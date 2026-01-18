"use client";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const logoRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      arrowRef.current,
      {
        x: 0,
        y: 0,
        opacity: 1,
      },
      {
        x: 8,
        y: -8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
    ).fromTo(
      arrowRef.current,
      {
        x: -8,
        y: 8,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
    );
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headerRef.current,
      {
        y: -100,
        opacity: 0,
        scale: 0.8,
        rotationX: -15,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      },
    )
    .fromTo(
      logoRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(2)",
      },
      "-=0.8"
    )
    .fromTo(
      navItemsRef.current.filter(item => item !== null),
      {
        x: -50,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .fromTo(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
        rotationY: 90,
      },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 0.7,
        ease: "back.out(2.5)",
      },
      "-=0.4"
    )
    .to(
      '.real-header',
      {
        boxShadow: "0 0 15px rgba(162, 26, 122, 0.3), 0 0 30px rgba(63, 0, 228, 0.2)",
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .to(
      '.real-header',
      {
        boxShadow: "0 0 0px rgba(162, 26, 122, 0), 0 0 0px rgba(63, 0, 228, 0)",
        duration: 0.8,
        ease: "power2.in",
      }
    );
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed w-full flex items-center justify-center h-25 z-100"
      style={{ perspective: "1000px" }}
    >
      <header className="real-header flex items-center justify-center gap-8 p-2 px-4 border border-gray-800 rounded-full w-max bg-black/80 backdrop-blur-md text-[#C0C0C0] font-semibold">
        <nav className="flex">
          <ul className="flex gap-3 items-center *:text-[#C0C0C0] *:hover:text-[#A1A1A1] *:transition *:duration-100">
            <li className="sm:mr-5">
              <img
                ref={logoRef}
                src="/logo.png"
                draggable={false}
                alt="Logo"
                className="h-10 select-none w-10"
              />
            </li>
            <li ref={(el) => { navItemsRef.current[0] = el; }}>
              <a href="#">Home</a>
            </li>
            <li ref={(el) => { navItemsRef.current[1] = el; }}>
              <a href="#services">Services</a>
            </li>
            <li ref={(el) => { navItemsRef.current[2] = el; }}>
              <a href="#projects">Projects</a>
            </li>
            <li ref={(el) => { navItemsRef.current[3] = el; }}>
              <a href="#">About Us</a>
            </li>
            <li ref={(el) => { navItemsRef.current[4] = el; }}>
              <a href="#contact-us">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          ref={buttonRef}
          onMouseEnter={handleButtonClick}
          className="text-white flex cursor-pointer items-center justify-center gap-2 bg-gradient-to-br px-4 py-2 from-[#A21A7A]/50 via-cyan-400/50 to-[#3F00E4]/50 rounded-full overflow-hidden hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
        >
          Book a Call
          <ArrowUpRight ref={arrowRef} />
        </button>
      </header>
    </div>
  );
};

export default Header;
