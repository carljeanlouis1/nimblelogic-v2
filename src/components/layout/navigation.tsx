"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="NimbleLogic AI Home"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <path
                d="M18.5 3L8 17h7l-2 12L25 15h-7l2.5-12z"
                fill="#00D4AA"
              />
            </svg>
            <span className="text-lg font-bold text-[#F9FAFB] tracking-tight">
              NimbleLogic
              <span className="text-[#00D4AA]"> AI</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links - Center */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-[#9CA3AF] transition-colors duration-200 hover:text-[#F9FAFB] py-1",
                  "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:bg-gradient-to-r after:from-[#00D4AA] after:to-[#0EA5E9] after:transition-transform after:duration-300 after:ease-out",
                  "hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop Right Section */}
        <motion.div
          className="hidden md:flex items-center gap-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-1.5 text-sm text-[#6B7280] transition-colors duration-200 hover:text-[#9CA3AF]"
          >
            <Phone className="size-3.5" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0A0F1C]"
          >
            Book a Free Call
          </a>
        </motion.div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
