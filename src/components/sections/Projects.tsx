"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, Github, SquareArrowOutUpRight } from "lucide-react";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const imgRef = useRef(null);

  const handleNextCurrent = () => {
    current < projects.length - 1 ? setCurrent(current + 1) : setCurrent(0);
  }
  const handlePrevCurrent = () => {
    current != 0 && current < projects.length ? setCurrent(current - 1): setCurrent(projects.length - 1) 
  }

  useEffect(() => {
     if (!imgRef.current) return;
      gsap.fromTo(imgRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    const interval = setInterval(() => {
      setCurrent(current < projects.length - 1 ?current + 1 : 0);
    }, 8000);

    return () => clearInterval(interval);
    
  }, [current]);

  return (
    <section className="h-dvh text-white p-6 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 items-center text-center justify-center h-auto w-full">
        <h2 className="font-semibold  text-3xl md:text-5xl 2xl:text-7xl">Nuestro Portafolio</h2>
        <span className="text-center text-lg 2xl:text-2xl w-[90%] md:w-[50%]">Descubre los increíbles proyectos que hemos desarrollado para nuestros clientes. Desde bots de Discord hasta aplicaciones web completas.</span>
      </div>

      <div className="relative w-[90%] h-[80%] rounded-lg bg-white p-0.5">
        <div className="relative w-full h-full">
            <img
              ref={imgRef}
              key={projects[current].path}
              src={projects[current].path}
              className="rounded-lg object-cover h-full w-full"
            />

          
          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center md:justify-between bg-black/10 backdrop-blur-xs rounded-lg px-4">
            <button
              className="hidden p-2 bg-white/30 rounded-full md:flex items-center justify-center cursor-pointer" 
              onClick={handlePrevCurrent}
            >
              <ChevronLeft/>
            </button>

            <div className="flex flex-col gap-6 justify-center items-center">
                <span className="font-semibold text-3xl">{projects[current].name}</span>
              <div className="flex gap-2 w-full justify-center font-semibold text-xs md:text-md">
                <a
                  href={projects[current].prodLink}
                  target="_blank"  
                  className="flex  justify-center items-center gap-1 bg-[#6c04bb] py-2 px-4 rounded-2xl">
                  See project
                  <SquareArrowOutUpRight size={20}/>
                </a>
                <a
                  href={projects[current].githubLink}
                  target="_blank"
                  className="flex items-center justify-center gap-1 bg-black py-2 px-4 rounded-2xl">
                  See Github
                  <Github size={20}/>
                </a>
              </div>
            </div>

              <button
                className="hidden p-2 bg-white/30 rounded-full md:flex items-center justify-center cursor-pointer"  
                onClick={handleNextCurrent}
              >
              <ChevronRight/>
            </button>
          
          <div className="absolute bottom-5 flex  justify-center w-full gap-3">
            {projects.map((p, index) =>(
              <div key={index} className={`bg-white ${current == index? 'opacity-100': 'opacity-40'} p-1 rounded-lg`}></div>
            ))}
          </div>

          </div>
        </div>

      </div>
    </section>
  );
}
