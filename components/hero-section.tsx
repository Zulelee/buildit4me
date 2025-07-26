"use client";

import { StarBorder } from "@/components/ui/star-border";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Create the glow animation
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, index) => {
      path.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Glowing Puzzle Pattern Background */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          ref={svgRef}
          className="w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff8c42" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Puzzle Pattern Paths */}
          <path
            d="M100 100 L300 100 L300 200 L400 200 L400 300 L300 300 L300 400 L200 400 L200 300 L100 300 Z"
            stroke="url(#orangeGlow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M500 150 L700 150 L700 250 L800 250 L800 350 L700 350 L700 450 L600 450 L600 350 L500 350 Z"
            stroke="url(#orangeGlow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M900 200 L1100 200 L1100 300 L1200 300 L1200 400 L1100 400 L1100 500 L1000 500 L1000 400 L900 400 Z"
            stroke="url(#orangeGlow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M150 500 L350 500 L350 600 L450 600 L450 700 L350 700 L350 800 L250 800 L250 700 L150 700 Z"
            stroke="url(#orangeGlow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M550 550 L750 550 L750 650 L850 650 L850 750 L750 750 L750 850 L650 850 L650 750 L550 750 Z"
            stroke="url(#orangeGlow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M950 600 L1150 600 L1150 700 L1250 700 L1250 800 L1150 800 L1150 900 L1050 900 L1050 800 L950 800 Z"
            stroke="url(#orangeGlow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />

          {/* Connecting Lines */}
          <path
            d="M300 200 L500 150"
            stroke="url(#orangeGlow)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M700 250 L900 200"
            stroke="url(#orangeGlow)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M400 300 L600 350"
            stroke="url(#orangeGlow)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M800 350 L1000 400"
            stroke="url(#orangeGlow)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M300 400 L500 450"
            stroke="url(#orangeGlow)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
          <path
            d="M700 450 L900 500"
            stroke="url(#orangeGlow)"
            strokeWidth="1.5"
            filter="url(#glow)"
            className="animate-pulse-glow"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Got an idea?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            We&apos;ll build it
          </span>{" "}
          for you.
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Web apps, mobile apps, chatbots, voice agents, automations — we can do
          it all!
        </p>

        {/* Star Border CTA Button */}
        <StarBorder
          className="text-lg font-semibold"
          color="#ff6b35"
          speed="4s"
        >
          <span className="flex items-center gap-2">
            Tell Us What You Need
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </StarBorder>
      </div>

      {/* Subtle Parallax Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  );
}
