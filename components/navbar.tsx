"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { StarBorder } from "@/components/ui/star-border";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import Chatbot from "@/components/chatbot";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-orange-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="relative px-4 py-2 rounded-lg border border-orange-500/30 bg-black/50 backdrop-blur-sm">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="default"
                />
                <div className="relative z-10 flex items-center">
                  <Image
                    src="/logo.jpeg"
                    alt="BuildIt4Me"
                    width={40}
                    height={40}
                  />
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      BuildIt
                    </span>
                    <span className="text-white">4Me</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* CTA Button */}
            <Chatbot>
              <StarBorder
                className="text-sm font-medium"
                color="#ff6b35"
                speed="5s"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </StarBorder>
            </Chatbot>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg border border-orange-500/30 bg-black/50 backdrop-blur-sm text-orange-400 hover:text-white hover:bg-orange-500/20 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-orange-500/20 rounded-b-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <StarBorder
                  className="w-full text-sm font-medium"
                  color="#ff6b35"
                  speed="5s"
                >
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </StarBorder>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
