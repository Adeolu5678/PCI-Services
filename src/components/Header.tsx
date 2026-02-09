"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-[20px]">
                engineering
              </span>
            </div>
            <span className="font-display font-bold text-xl tracking-wide text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              PCI SERVICES
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/solutions"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded text-sm font-bold font-display tracking-wide uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Request Audit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary focus:outline-none"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/solutions"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-white px-5 py-2 rounded text-sm font-bold font-display tracking-wide uppercase text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Audit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
