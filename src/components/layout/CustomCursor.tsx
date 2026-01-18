"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.onclick !== null ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <div
        className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`absolute transition-all duration-300 ${
            isPointer ? "scale-150" : "scale-100"
          }`}
          style={{
            left: "-20px",
            top: "-20px",
            animation: isPointer ? "spin 3s linear infinite" : "spin 8s linear infinite",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="drop-shadow-lg">
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="33%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="66%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon
              points="20,3 32,10 32,24 20,31 8,24 8,10"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="2"
              filter="url(#glow)"
            />
          </svg>
        </div>

        <div className="absolute" style={{ left: "-12px", top: "-12px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <polygon
              points="12,2 19,6 19,14 12,18 5,14 5,6"
              fill="url(#hexGradient)"
              opacity="0.6"
            />
          </svg>
        </div>

        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
            isPointer ? "w-3 h-3" : "w-2 h-2"
          }`}
          style={{
            background: "radial-gradient(circle, #ffffff 0%, #f97316 100%)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(249, 115, 22, 0.6)",
            animation: isPointer ? "pulse 1s ease-in-out infinite" : "none",
          }}
        />

        {isPointer && [0, 120, 240].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: "-0.75px",
              top: "-0.75px",
              animation: `orbit 2s linear infinite`,
              animationDelay: `${i * 0.33}s`,
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: ["#f97316", "#a855f7", "#3b82f6"][i],
                boxShadow: `0 0 8px ${["#f97316", "#a855f7", "#3b82f6"][i]}`,
                transform: "translateX(20px)",
              }}
            />
          </div>
        ))}

        {isPointer && (
          <div
            className="absolute w-16 h-16 rounded-full"
            style={{
              left: "-32px",
              top: "-32px",
              background: "radial-gradient(circle, transparent 60%, rgba(249, 115, 22, 0.2) 70%, transparent 80%)",
              animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
            }}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          0% { transform: scale(0.8); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  );
}
