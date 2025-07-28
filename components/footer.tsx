"use client";

import { StarBorder } from "@/components/ui/star-border";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="BuildIt4Me" width={40} height={40} />
            <span className="text-xl sm:text-2xl font-bold text-white">
              BuildIt<span className="text-orange-500">4Me</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#services"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#our-work"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              Our Work
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BuildIt4Me. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
