"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import WebFramework from "../ui/WebFramework";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  const handleNextCurrent = () => {
    setCurrent((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(handleNextCurrent, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.to(".projects-head", {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
    })
      .to(
        ".projects-carousel",
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      )
      .to(
        ".projects-dots",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section
      id="projects"
      className="projects-section h-full text-white p-6 flex flex-col items-center overflow-hidden"
    >
      <div className="projects-head flex flex-col gap-4 items-center text-center justify-center max-w-3xl opacity-0 translate-y-4">
        <h2 className="font-semibold text-4xl md:text-5xl 2xl:text-6xl text-white">
          Our Portfolio
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed w-[90%] md:w-full">
          Explore our collection of innovative projects—from intelligent Discord
          bots to enterprise-grade web applications that drive real results.
        </p>
      </div>

      <div className="projects-carousel relative flex items-center justify-center w-full h-[40vh] md:h-[84dvh] opacity-0 scale-95">
        {projects.map((data, index) => {
          const total = projects.length;

          let offset = (index - current + total) % total;
          if (offset > total / 2) offset -= total;

          let transform = "";
          let blur = "";

          if (offset === 0) {
            transform = "translate-x-0 opacity-100 z-30 scale-100";
            blur = "blur-0";
          } else if (offset === -1) {
            transform = "-translate-x-[78%] scale-70 opacity-60 z-20";
            blur = "blur-[2px]";
          } else if (offset === 1) {
            transform = "translate-x-[78%] scale-70 opacity-60 z-20";
            blur = "blur-[2px]";
          } else if (offset === -2) {
            transform = "-translate-x-[160%] scale-70 opacity-40 z-10";
            blur = "blur-sm";
          } else if (offset === 2) {
            transform = "translate-x-[160%] scale-70 opacity-40 z-10";
            blur = "blur-sm";
          }

          return (
            <div
              key={index}
              className={`absolute transition-all flex justify-center items-center duration-700 ease-[cubic-bezier(0.45,0,0.55,1)] ${transform}`}
            >
              <WebFramework color={current === index ? data.color : ""}>
                <div className="xl:w-[800px] xl:h-[400px] 2xl:w-[1200px] 2xl:h-[600px] relative group overflow-hidden">
                  <img
                    src={data.path}
                    alt={data.name}
                    draggable={false}
                    className={`rounded-b-md object-cover w-full h-full select-none transition-all duration-500 ${blur} ${
                      current === index
                        ? "group-hover:blur-0 group-hover:scale-105"
                        : ""
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-bold text-2xl md:text-3xl mb-3 text-white">
                        {data.name}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </WebFramework>
            </div>
          );
        })}
      </div>

      <div className="projects-dots flex gap-2 z-10 opacity-0 translate-y-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
