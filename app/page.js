import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";


export default function Home() {
  return (
    <>
    <main className="w-full md:w-[1250px] m-auto mt-20 flex min-h-screen flex-col items-center justify-between gap-10 p-4 md:p-24 ">
     <About/>
     <Services/>
     <Works/>
    </main>
    </>
  );
}
