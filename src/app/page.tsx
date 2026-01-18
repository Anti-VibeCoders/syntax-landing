import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contacts from "@/components/sections/Contacts";
import Service from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <main className="bg-[#080B03] overflow-hidden">
        <Header />
        <div>
          <Hero />
          <div className="relative py-4 flex flex-col gap-32">
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#a3a3a320_1px,transparent_1px)] bg-size-[16px_16px]" />
            <Service />
            <Projects />
            <Contacts />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
