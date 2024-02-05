// 'use client'
import About from "@/app/(components)/ui/About";

import Nav from "@/app/(components)/ui/Nav";

import Footer from "../(components)/ui/Footer";
import Services from "../(components)/ui/Services";
import Works from "../(components)/Works";


export const fetchData = async(params) =>{
  const local= 'http://localhost:3000'

  const user= params.slug
  const res = await fetch(`${local || 'https://dentist-blog.vercel.app' }/api/Dentists/${user}`,{
    cache: 'no-store'
  })
  return res.json()
}

export default  async function Home({params}) {


  const {dentists}= await fetchData(params);
console.log(dentists?.fullName)

 
  return (
    <>
    <Nav name={dentists?.fullName} />
    <main className="w-full md:w-[1250px] m-auto mt-20 flex min-h-screen flex-col items-center justify-between gap-10 p-4 md:p-24 ">
     <About desc={dentists?.desc} />
     <Services services={dentists?.services}/>
     <Works/>
    </main>
    <Footer data={dentists}/>
    </>
  );
}
