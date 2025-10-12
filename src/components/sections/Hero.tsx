"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

export default function () {
  const textHeroRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const splitText = new SplitText(textHeroRef.current, { type: "words" });

    gsap.from(splitText.words, {
      autoAlpha: 0,
      y: 25,
      stagger: 0.3,
      duration: 1.2,
      filter: "blur(10px)",
    });
  }, []);

  return (
    <main
      className="h-dvh flex items-end bg-[url(../../public/background.png)] bg-no-repeat bg-cover bg-center justify-start overflow-hidden p-8 select-none"
      draggable={false}
    >
      <h1
        ref={textHeroRef}
        className="font-semibold text-8xl max-2xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl text-white"
      >
        Tus Ideas en Código
      </h1>
    </main>
  );
}
