"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactGif from "@/assets/contact-us.gif";

export default function Contacts() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-us',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.contact-head', {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: 'power4.out',
    })
    .to('.contact-form', {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.4')
    .to('.contact-card', {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8');
  }, []);

  return (
    <section
      id="contact-us"
      className="relative w-full h-full flex flex-col md:flex-row items-center justify-around gap-8 px-4 py-8 md:py-12"
    >
      <div className="flex flex-col gap-8 items-center justify-center w-full md:w-1/2">
        <div className="contact-head flex flex-col gap-4 items-center text-center justify-center w-full opacity-0 translate-y-4">
          <h2 className="font-semibold text-4xl md:text-5xl 2xl:text-6xl text-white">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed w-[90%] md:w-full max-w-2xl">
            Do you have questions, suggestions, or want to collaborate with
            us? We are here to help you and listen to your ideas.
          </p>
        </div>

        <div className="contact-form flex flex-col md:flex-row w-full justify-between items-center px-4 opacity-0 translate-y-4">
          <div className="relative flex justify-center items-center w-full">
            <form className="flex flex-col gap-5 p-4 rounded-xl shadow-2xl w-full z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-neutral-300 font-semibold">
                    First Name <span className="font-bold text-[#A82071]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="border rounded-xl border-gray-500 text-neutral-300 p-3 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-neutral-300 font-semibold">
                    Last Name <span className="font-bold text-[#A82071]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="border rounded-xl border-gray-500 text-neutral-300 p-3 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-neutral-300 font-semibold">
                  Email <span className="font-bold text-[#A82071]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className="border rounded-xl border-gray-500 text-neutral-300 p-3 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-neutral-300 font-semibold">
                  Message <span className="font-bold text-[#A82071]">*</span>
                </label>
                <textarea
                  placeholder="Send us a message"
                  className="border rounded-xl resize-none border-gray-500 text-neutral-300 p-3 h-32 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                />
              </div>

              <button className="bg-gradient-to-r from-[#64173d] via-[#6c04bb] to-[#2305ca] py-2.5 rounded-xl font-semibold text-white cursor-pointer hover:opacity-90 transition-opacity">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${ContactGif.src})` }}
        className="contact-card relative flex flex-col items-center justify-center w-full md:w-auto h-[400px] md:h-[800px] rounded-xl text-neutral-200 bg-cover bg-center bg-black/50 bg-blend-overlay opacity-0 translate-y-4"
        draggable={false}
      >
        <div className="absolute bg-black/20 backdrop-blur-sm w-full h-full rounded-xl"></div>
        <div className="flex flex-col justify-center items-center z-10 px-6">
          <img src="/logo.png" className="w-30 select-none" draggable={false} alt="Syntax World Logo" />
          <p className="text-center p-4 text-lg max-w-[40ch] leading-relaxed">
            At <b>Syntax World</b>, we transform your ideas into digital
            solutions that create real impact. More than developers, we are
            your strategic allies in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
}
