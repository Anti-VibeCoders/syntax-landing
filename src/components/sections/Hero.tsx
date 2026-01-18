"use client";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

export default function Hero() {
  const textHeroRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);
    
    const splitText = new SplitText(textHeroRef.current, { 
      type: "words,chars" 
    });

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        scale: 1.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    splitText.words.forEach((word, i) => {
      const chars = word.querySelectorAll('.char');
      
      const effects = [
        {
          from: { 
            autoAlpha: 0, 
            y: -100, 
            rotationX: -90,
            transformOrigin: "50% 50% -100px",
          },
          to: { 
            autoAlpha: 1, 
            y: 0, 
            rotationX: 0,
            duration: 1.2,
            ease: "back.out(1.5)",
          }
        },
        {
          from: { 
            autoAlpha: 0, 
            scale: 0.3,
            filter: "blur(20px)",
          },
          to: { 
            autoAlpha: 1, 
            scale: 1,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "elastic.out(1, 0.5)",
          }
        },
        {
          from: { 
            autoAlpha: 0, 
            x: i % 2 === 0 ? -150 : 150,
            rotation: i % 2 === 0 ? -45 : 45,
            filter: "blur(10px)",
          },
          to: { 
            autoAlpha: 1, 
            x: 0,
            rotation: 0,
            filter: "blur(0px)",
            duration: 1.3,
            ease: "power4.out",
          }
        },
      ];

      const effect = effects[i % effects.length];

      tl.fromTo(
        word,
        effect.from,
        {
          ...effect.to,
          delay: i * 0.15, 
        },
        0.5 
      );

      if (chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.03,
            ease: "power2.out",
            delay: i * 0.15 + 0.3,
          }
        );
      }
    });

    tl.to(
      textHeroRef.current,
      {
        textShadow: "0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(162,26,122,0.6), 0 0 90px rgba(63,0,228,0.4)",
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .to(
      textHeroRef.current,
      {
        textShadow: "0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(162,26,122,0.2)",
        duration: 1,
        ease: "power2.inOut",
      }
    );

    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="h-dvh flex items-end bg-[url(../../public/background.png)] bg-no-repeat bg-cover bg-center justify-start overflow-hidden p-8 select-none relative"
      draggable={false}
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      
      <h1
        ref={textHeroRef}
        className="font-semibold text-8xl max-2xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl text-white relative z-10"
        style={{ 
          transformStyle: "preserve-3d",
        }}
      >
        Your Ideas in Code
      </h1>
    </main>
  );
}
