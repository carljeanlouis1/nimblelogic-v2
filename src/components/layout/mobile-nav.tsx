"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex items-center justify-center rounded-md p-2 text-[#9CA3AF] transition-colors hover:bg-white/5 hover:text-[#F9FAFB]"
        aria-label="Open menu"
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="!bg-[#111827] !border-white/5 w-[300px] p-0"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Logo */}
        <div className="flex items-center gap-2.5 p-6 pb-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
        </div>

        {/* Nav Links */}
        <div className="flex flex-col px-6 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-base font-medium text-[#9CA3AF] transition-colors hover:text-[#F9FAFB] border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="mx-6 mt-4 h-px bg-white/10" />

        {/* Contact & CTA */}
        <div className="flex flex-col gap-4 px-6 pt-6">
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 text-sm text-[#6B7280] transition-colors hover:text-[#9CA3AF]"
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gradient inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-[#0A0F1C]"
          >
            Book a Free Call
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
