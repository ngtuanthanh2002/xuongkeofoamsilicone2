"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="#top" className="flex items-center gap-2" aria-label="AOFENG">
          <Image
            src="/images/Logo.png"
            alt="AOFENG logo"
            width={150}
            height={40}
            className="h-7 w-auto md:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden cursor-pointer items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-500 xl:flex"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand">
              <PhoneIcon />
            </span>
            {site.phone}
          </a>
          <Link href="#dat-hang" className="btn-accent !px-5 !py-2.5 text-sm">
            Đặt hàng
          </Link>

          <button
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-brand transition-colors hover:bg-brand-50 lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-16 bg-slate-900/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <nav
          className={`absolute inset-x-0 top-16 origin-top border-t border-slate-100 bg-white px-4 pb-6 pt-2 shadow-xl transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="mt-2 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-3 font-semibold text-brand"
          >
            <PhoneIcon /> {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
    </svg>
  );
}
