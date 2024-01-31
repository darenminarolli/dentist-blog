// 'use client'
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { fetchUsers, filterUser } from "@/services/fetchUsers";

export default  async function Home({params}) {

  const { dentists } = await fetchUsers()
  console.log(dentists, 'we are here')

   const filteredUser= await filterUser(params.slug)
   const users = filteredUser[0]
  return (
    <>
    <Nav name={users?.fullName}/>
    <main className="w-full md:w-[1250px] m-auto mt-20 flex min-h-screen flex-col items-center justify-between gap-10 p-4 md:p-24 ">
     <About/>
     <Services/>
     <Works/>
    </main>
    <Footer />
    </>
  );
}
