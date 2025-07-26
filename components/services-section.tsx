"use client";

import {
  Globe,
  Smartphone,
  MessageSquare,
  Mic,
  Zap,
  Rocket,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Apps",
    description: "Custom web applications for your users, fast and scalable.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Apps",
    description: "iOS and Android apps built with a single, powerful codebase.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Chatbots",
    description: "AI-powered bots for websites, support, and automation.",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Voice Agents",
    description: "AI-powered voice agents for customer support and automation.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automations",
    description: "From workflows to integrations, we automate what matters.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Prototypes & MVPs",
    description: "Idea to launch in weeks. Validate and iterate faster.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Build
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From MVPs to AI agents — we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative">
      <div className="relative h-full rounded-2xl border border-gray-800/50 p-6 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:bg-black/70">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          variant="default"
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="w-fit rounded-xl border border-gray-700/50 bg-gray-900/50 p-3 mb-6 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300">
            <div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Hover indicator */}
          {/* <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-orange-400 text-sm font-medium">
              <span>Learn more</span>
              <div className="ml-2 w-4 h-4 border-r-2 border-b-2 border-orange-400 transform rotate-45 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
