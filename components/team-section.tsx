"use client";

import { Mail, Linkedin } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const cofounders = [
  {
    name: "Zulekha",
    role: "All-Rounder — Tech & Client",
    email: "zulekha@buildit4me.com",
    linkedin: "https://linkedin.com/in/zulekha",
    photo: "https://source.unsplash.com/featured/face?sig=1",
    description:
      "Leading strategy and client relationships with technical expertise.",
  },
  {
    name: "Hamza",
    role: "Tech & Operations",
    email: "hamza@buildit4me.com",
    linkedin: "https://linkedin.com/in/hamza",
    photo: "https://source.unsplash.com/featured/face?sig=2",
    description: "Driving automation and AI solutions for scalable operations.",
  },
  {
    name: "Narmeen",
    role: "Client Success & PM",
    email: "narmeen@buildit4me.com",
    linkedin: "https://linkedin.com/in/narmeen",
    photo: "https://source.unsplash.com/featured/face?sig=3",
    description:
      "Ensuring project delivery and client satisfaction excellence.",
  },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Founders
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            BuildIt4Me is led by a trio of builders who blend tech, strategy,
            and execution.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
    <div className="flip-card group relative h-80">
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className="flip-card-front">
          <div className="relative h-full rounded-2xl border border-orange-500/30 bg-gradient-to-br from-black via-gray-900 to-black p-8">
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
                <img
                  src={photo}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-orange-500/30 shadow-2xl"
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
