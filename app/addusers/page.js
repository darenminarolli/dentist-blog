'use client'
import { useRouter } from 'next/navigation';
import React,{useState} from 'react'

const page = () => {
    const router= useRouter()
    const [formData,setFormData] = useState({
        fullName: '',
        igUrl: '',
        email: '',
        number: 0,
        linkedinUrl: '',
        fcbUrl: '',
        desc: '',
        file: null,
        service1: '',
        service2: '',
        service3: '',
        service4: '',
        service5: '',
        service6: '',
    })
    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res =await fetch("/api/Dentists",{
            method: "POST",
            body: JSON.stringify({formData}),
            "content-type": "application/json"
        })
        if(!res.ok){
            throw new Error("Failed to create user")
        }
        router.refresh()
        router.back()
        console.log(formData)
    }
    return (
        <form className="max-w-lg mx-auto h-max " method='post' onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className=" text-gray-700 font-bold mb-2" for="full-name">
                    Full Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fullName"
                    type="text"
                    name='fullName'
                    onChange={handleChange}
                    placeholder="Full Name"
                    value={formData.title}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="number">
                    Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    name='number'
                    onChange={handleChange}
                    value={formData.number}
                    placeholder="Number"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="ig-url">
                    Instagram URL
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="ig-url"
                    type="url"
                    name='igUrl'
                    onChange={handleChange}
                    value={formData.igUrl}
                    placeholder="Instagram URL"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="linkedin-url">
                    LinkedIn URL
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedin-url"
                    type="url"
                    name='linkedinUrl'
                    onChange={handleChange}
                    value={formData.linkedinUrl}
                    placeholder="LinkedIn URL"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="facebook-url">
                    Facebook URL
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="facebook-url"
                    type="url"
                    name='fcbUrl'
                    onChange={handleChange}
                    value={formData.fcbUrl}
                    placeholder="Facebook URL"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="description">
                    Rreth meje descripiton
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name='desc'
                    onChange={handleChange}
                    value={formData.desc}
                    placeholder="Description"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="images">
                    Images
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    name='file'
                    onChange={handleChange}
                    value={formData.file}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="services">
                    Services
                </label>
                <div className="grid grid-cols-3 gap-4">
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service1"
                        type="text"
                        name='service1'
                        onChange={handleChange}
                        value={formData.service1}
                        placeholder="Service 1"
                    />
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service2"
                        type="text"
                        name='service2'
                        onChange={handleChange}
                        value={formData.service2}
                        placeholder="Service 2"
                    />
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service3"
                        type="text"
                        name='service3'
                        onChange={handleChange}
                        value={formData.service3}
                        placeholder="Service 3"
                    />
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service4"
                        type="text"
                        name='service4'
                        onChange={handleChange}
                        value={formData.service4}
                        placeholder="Service 4"
                    />
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service5"
                        type="text"
                        name='service5'
                        onChange={handleChange}
                        value={formData.service5}
                        placeholder="Service 5"
                    />
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="service6"
                        type="text"
                        name='service6'
                        onChange={handleChange}
                        value={formData.service6}
                        placeholder="Service 6"
                    />
                </div>
            </div>
            <button type='submit' className='w-full shadow-md text-center rounded-md bg-slate-900 text-slate-100 self-center py-2 px-4 my-4'>
                Dergo
            </button>
        </form>
    )
}

export default page
