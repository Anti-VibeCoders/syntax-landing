import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contacts from "@/components/sections/Contacts";
import Service from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-[#080B03] gap-32">
        <Header />
        <Hero />
        <Service />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
