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

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BuildIt4Me. All rights reserved.
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <StarBorder
              className="text-xs font-medium"
              color="#ff6b35"
              speed="6s"
            >
              Contact Us
            </StarBorder>
          </div>
        </div>
      </div>
    </footer>
  );
}
