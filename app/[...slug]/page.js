// 'use client'
import About from "@/app/(components)/ui/About";

import Nav from "@/app/(components)/ui/Nav";

// import { fetchUsers, filterUser } from "@/services/fetchUsers";
import Footer from "../(components)/ui/Footer";
import Services from "../(components)/ui/Services";
import Works from "../(components)/Works";

export const fetchData = async() =>{
  const res = await fetch('http://localhost:3000/api/Dentists',{
    cache: 'no-store'
  })
  return res.json()
}

export default  async function Home({params}) {
 const {dentists} = await fetchData();
 console.log(dentists, 'please work')
 const name = dentists
 const paramsName= params.slug.join(', ').replace('-',' ')

 
  return (
    <>
    <Nav name={name.fullName} />
    <main className="w-full md:w-[1250px] m-auto mt-20 flex min-h-screen flex-col items-center justify-between gap-10 p-4 md:p-24 ">
     <About/>
     <Services/>
     <Works/>
    </main>
    <Footer/>
    </>
  );
}
