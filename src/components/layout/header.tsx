"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      {
        y: -80,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
      },
    );
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed w-full flex items-center justify-center h-25 z-100"
    >
      <header className="flex items-center justify-center bg-[#7E787810] p-2 px-4 border border-gray-800 rounded-full w-105 text-[#C0C0C0] font-semibold">
        <nav className="flex">
          <ul className="flex gap-3 items-center">
            <li className="sm:mr-5">
              <img
                src="/Logo-sintax.png"
                draggable={false}
                alt="Logo"
                className="h-10 select-none w-10"
              />
            </li>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

