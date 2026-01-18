import { Service } from "@/data/services";
import gsap from "gsap";
import { useRef } from "react";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -4,
      backgroundColor: service.bgColor,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      backgroundColor: "#0A0A0A",
      duration: 0.1,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="cursor-pointer group relative flex justify-center rounded-3xl rounded-tr-[60px] rounded-bl-[60px] border border-neutral-800 p-6 hover:border-neutral-700 transition-all duration-300"
      style={{ backgroundColor: "#0A0A0A" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer relative bg-black/40 rounded-3xl rounded-tr-[60px] rounded-bl-[60px] backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 group-hover:border-white/20 group-hover:scale-[1.02] overflow-hidden">
        <div
          className={`mb-4 p-3 rounded-lg bg-black/50 border border-neutral-800 w-fit ${service.shadow} shadow-lg group-hover:shadow-xl transition-shadow`}
        >
          {service.icon}
        </div>
        <div className="text-left">
          <h3 className="text-lg md:text-xl font-medium text-white mb-3">
            {service.title}
          </h3>
          <span className="text-sm text-neutral-400 leading-relaxed">
            {service.description}
          </span>
        </div>
      </div>
    </div>
  );
}
