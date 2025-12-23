"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl py-3 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <Link href={`/`} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center font-black text-xl shadow-lg shadow-red-700/30 rotate-3">
            হ
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter leading-none">
              OSMAN HADI
            </h1>
            <p className="text-[10px] text-red-500 font-bold uppercase tracking-[0.2em]">
              Legacy Archive
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-wide text-zinc-400">
          <a
            href="#biography"
            className="hover:text-red-500 transition-colors uppercase"
          >
            জীবনী
          </a>
          <a
            href="#vision"
            className="hover:text-red-500 transition-colors uppercase"
          >
            দর্শন
          </a>
          <a
            href="#vault"
            className="hover:text-red-500 transition-colors uppercase"
          >
            ভিডিও
          </a>
          <a
            href="#poetry"
            className="hover:text-red-500 transition-colors uppercase"
          >
            সাহিত্য
          </a>
          <a
            href="#research"
            className="hover:text-red-500 transition-colors uppercase"
          >
            গবেষণা
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-red-700 text-white px-6 py-2.5 rounded-xl text-xs font-black hover:bg-red-600 transition-all shadow-xl active:scale-95 uppercase tracking-widest">
            Google Drive
          </button>
          <button
            className="lg:hidden text-zinc-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
