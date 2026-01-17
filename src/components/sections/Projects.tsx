"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WebFramework from "../ui/WebFramework";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const handleNextCurrent = () => {
    setCurrent((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const handlePrevCurrent = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextCurrent, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="h-full text-white p-6 flex flex-col gap-4 2xl:gap-2 items-center overflow-hidden"
    >
      <div className="flex flex-col gap-2 items-center text-center justify-center h-auto w-full ">
        <h2 className="font-semibold text-2xl md:text-4xl 2xl:text-5xl">
          Our Portfolio
        </h2>
        <span className="text-center w-[90%] md:w-[50%] text-neutral-400">
          Discover the incredible projects we have developed for our clients.
          From Discord bots to complete web applications.{" "}
        </span>
      </div>

      <div className="relative  flex items-center justify-center w-full h-[40vh] md:h-[100vh]">
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
              <WebFramework color={current === index ? data.color : ""}>
                <div className="xl:w-[800px] xl:h-[400px] 2xl:w-[1200px] 2xl:h-[600px] relative group overflow-hidden ">
                  <img
                    src={data.path}
                    className="rounded-b-md object-cover w-full h-full select-none"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-400 top-0 flex flex-col gap-6 justify-center items-center w-full h-full bg-black/30 backdrop-blur-xs">
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <span className="font-semibold text-3xl">
                        {data.name}
                      </span>
                      <span className="w-[60%] text-center text-xl text-neutral-300">
                        {data.description}
                      </span>
                    </div>
                  </div>
                </div>
              </WebFramework>
            </div>
          );
        })}

        <button
          onClick={handlePrevCurrent}
          className="opacity-0 lg:opacity-100 absolute left-4 md:left-10 bg-white/20 hover:bg-white/40 transition-all p-2 rounded-full z-100 cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNextCurrent}
          className="opacity-0 lg:opacity-100 absolute right-4 md:right-10 bg-white/20 hover:bg-white/40 transition-all p-2 rounded-full z-100 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
