"use client";

import { useEffect, useState, useRef } from "react";
import { projects } from "@/data/projects";
import { Github, SquareArrowOutUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import WebFramework from "../ui/WebFramework";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const imgRef = useRef(null)

  const handleNextCurrent = () => {
    setCurrent((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const handlePrevCurrent = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  return (
    <section className="h-full text-white p-6 flex flex-col gap-8 items-center overflow-hidden">
      
      <div className="flex flex-col gap-2 items-center text-center justify-center h-auto w-full">
        <h2 className="font-semibold text-3xl md:text-5xl 2xl:text-7xl">Nuestro Portafolio</h2>
        <span className="text-center text-lg 2xl:text-2xl w-[90%] md:w-[50%]">
          Descubre los increíbles proyectos que hemos desarrollado para nuestros clientes. Desde bots de Discord hasta aplicaciones web completas.
        </span>
      </div>

      <div className="relative  flex items-center justify-center w-full h-[120vh]">
        {projects.map((data, index) => {
          const total = projects.length;

          // Calcular posición relativa circular
          let offset = (index - current + total) % total;
          if (offset > total / 2) offset -= total;
          
          let transform = "";

          if (offset === 0) {
            transform = "translate-x- opacity-100 z-30 ";
          } else if (offset === -1) {
            transform = "-translate-x-[78%] scale-70 opacity-100 z-20";
          } else if (offset === 1) {
            transform = "translate-x-[78%] scale-70 opacity-100 -20";
          } else if (offset === -2) {
            transform = "-translate-x-[160%] scale-70 opacity-40 z-10";
          } else if (offset === 2) {
            transform = "translate-x-[160%] scale-70 opacity-40 z-10";
          }

          return (
            <div
              key={index}
              className={`absolute transition-all flex justify-center items-center duration-700 ease-[cubic-bezier(0.45,0,0.55,1)] ${transform}`}
            >
              <WebFramework color={current === index? data.color: ""}>
                <div className="w-full h-full relative group overflow-hidden ">
                  <img
                    src={data.path}
                    className="rounded-b-md object-cover h-full w-full"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-400 top-0 flex flex-col gap-6 justify-center items-center w-full h-full bg-black/30 backdrop-blur-xs">
                    <span className="font-semibold text-3xl">{data.name}</span>
                    <div className="flex gap-2 w-full justify-center font-semibold text-xs md:text-md">
                      <a
                        href={data.prodLink}
                        target="_blank"
                        className="flex justify-center items-center gap-1 bg-[#6c04bb] py-2 px-4 rounded-2xl"
                      >
                        See project
                        <SquareArrowOutUpRight size={18} />
                      </a>
                      <a
                        href={data.githubLink}
                        target="_blank"
                        className="flex items-center justify-center gap-1 bg-black py-2 px-4 rounded-2xl"
                      >
                        See Github
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </WebFramework>
            </div>
          );
        })}

        <button
          onClick={handlePrevCurrent}
          className="absolute left-4 md:left-10 bg-white/20 hover:bg-white/40 transition-all p-2 rounded-full z-100 cursor-pointer"
        >
          <ChevronLeft/>
        </button>
        <button
          onClick={handleNextCurrent}
          className="absolute right-4 md:right-10 bg-white/20 hover:bg-white/40 transition-all p-2 rounded-full z-100 cursor-pointer"
        >
          <ChevronRight/>
        </button>
      </div>
    </section>
  );
}
