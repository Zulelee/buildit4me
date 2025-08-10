"use client";

import { Mail, Linkedin } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

const cofounders = [
  {
    name: "Zulekha",
    role: "Founder & CEO",
    email: "zulekha@buildit4me.com",
    linkedin: "https://linkedin.com/in/zulekha",
    photo: "/zulele.jpeg",
    description:
      "Leading strategy and client relationships with technical expertise.",
  },
  // {
  //   name: "Hamza",
  //   role: "Tech & Operations",
  //   email: "hamza@buildit4me.com",
  //   linkedin: "https://linkedin.com/in/hamza",
  //   photo: "/hamza.jpeg",
  //   description: "Driving automation and AI solutions for scalable operations.",
  // },
  // {
  //   name: "Narmeen",
  //   role: "Client Success & PM",
  //   email: "narmeen@buildit4me.com",
  //   linkedin: "https://linkedin.com/in/narmeen",
  //   photo: "/nemo.jpeg",
  //   description:
  //     "Ensuring project delivery and client satisfaction excellence.",
  // },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-orange-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Founders
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            BuildIt4Me is led by a trio of builders who blend tech, strategy,
            and execution.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {cofounders.map((founder, index) => (
            <FlipCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FlipCardProps {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  photo: string;
  description: string;
}

function FlipCard({
  name,
  role,
  email,
  linkedin,
  photo,
  description,
}: FlipCardProps) {
  return (
    <div className="flip-card group relative h-72 sm:h-80">
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className="flip-card-front">
          <div className="relative h-full rounded-2xl border border-orange-500/30 bg-black p-6 sm:p-8 overflow-hidden">
            {/* Puzzle Pattern Background */}
            <div className="absolute inset-0 w-full h-full opacity-25">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter
                    id="glow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="orangeGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff8c42" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ffa726" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff8c42" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Puzzle Pattern Paths */}
                <path
                  d="M50 50 L150 50 L150 100 L200 100 L200 150 L150 150 L150 200 L100 200 L100 150 L50 150 Z"
                  stroke="url(#orangeGlow)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  className="animate-pulse-glow"
                />
                <path
                  d="M250 75 L350 75 L350 125 L400 125 L400 175 L350 175 L350 225 L300 225 L300 175 L250 175 Z"
                  stroke="url(#orangeGlow)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  className="animate-pulse-glow"
                />
                <path
                  d="M75 250 L175 250 L175 300 L225 300 L225 350 L175 350 L175 400 L125 400 L125 350 L75 350 Z"
                  stroke="url(#orangeGlow)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  className="animate-pulse-glow"
                />

                {/* Connecting Lines */}
                <path
                  d="M150 100 L250 75"
                  stroke="url(#orangeGlow)"
                  strokeWidth="1.5"
                  filter="url(#glow)"
                  className="animate-pulse-glow"
                />
                <path
                  d="M200 150 L300 175"
                  stroke="url(#orangeGlow)"
                  strokeWidth="1.5"
                  filter="url(#glow)"
                  className="animate-pulse-glow"
                />
                <path
                  d="M150 200 L250 225"
                  stroke="url(#orangeGlow)"
                  strokeWidth="1.5"
                  filter="url(#glow)"
                  className="animate-pulse-glow"
                />
              </svg>
            </div>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
              variant="default"
            />

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {name}
                  </h3>
                  <p className="text-orange-400 font-medium text-lg">{role}</p>
                </div>

                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">{email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">LinkedIn Profile</span>
                </div>
              </div>

              {/* Hover hint */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-orange-400 text-xs font-medium">
                  Hover to see photo
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back">
          <div className="relative h-full rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-900/20 via-orange-800/10 to-black overflow-hidden">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
              variant="default"
            />

            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
              <div className="relative mb-6">
                <Image
                  src={photo}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-orange-500/30 shadow-2xl"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                {name}
              </h3>
              <p className="text-orange-300 text-center font-medium">{role}</p>

              <div className="mt-6 flex gap-4">
                <a
                  href={`mailto:${email}`}
                  className="p-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 hover:bg-orange-500/30 hover:text-white transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 hover:bg-orange-500/30 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
