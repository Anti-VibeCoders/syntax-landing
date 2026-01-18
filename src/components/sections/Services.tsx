"use client";
import { services } from "@/data/services";
import ServiceCard from "./services/components/ServiceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Service() {
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.services-head', {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: 'power4.out',
    })
    .to('.service-card', {
      autoAlpha: 1,
      scale: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    }, "-=0.3");
  }, []);

  return (
    <section
      id="services"
      className="services text-center text-white px-4 py-8 md:py-12"
    >
      <div className="services-head flex flex-col gap-4 items-center justify-center mb-8 md:mb-12">
        <h2 
          className="services-title font-semibold text-4xl md:text-5xl 2xl:text-6xl text-white"
        >
          Services
        </h2>
        <p className="services-description text-lg md:text-xl text-neutral-400 leading-relaxed w-[90%] md:w-[60%] max-w-2xl">
          Discover the amazing services we offer and tell us which one you're
          interested in.
        </p>
      </div>
      
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl max-2xl:max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card opacity-0"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
