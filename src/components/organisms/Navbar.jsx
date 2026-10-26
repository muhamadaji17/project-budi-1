/** @format */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, MessageCircle, Menu, X, Bike, Phone } from "lucide-react";
import { Button } from "../atoms/Button";
import { SocialLinks } from "../molecules/SocialLinks";

export function Navbar({ onOpenContact }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Katalog", href: "/katalog" },
    { label: "Tentang Kami", href: "/#tentang-kami" },
    { label: "Testimoni", href: "/#testimoni" },
    { label: "Kontak", href: "#kontak", isAction: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30 group-hover:bg-blue-700 transition-colors">
              <Bike className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-blue-600 tracking-tight leading-none">
                Motor<span className="text-gray-900">Ku</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest leading-tight mt-0.5">
                Jual Beli Motor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "#kontak";

              if (link.isAction) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={onOpenContact}
                    className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Mini Search + Social + WhatsApp Button */}
          {/* <div className="hidden md:flex items-center gap-3.5">
            <div className="relative w-44 lg:w-56">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari motor impian..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-600 focus:outline-hidden transition-all text-gray-800 placeholder-gray-400"
              />
            </div>

            <SocialLinks className="hidden xl:flex" />

            <Button
              variant="whatsapp"
              size="sm"
              icon={MessageCircle}
              onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
              className="rounded-full shadow-xs"
            >
              Hubungi Kami
            </Button>
          </div> */}

          {/* Mobile Right Action: Search icon & Hamburger menu */}
          {/* <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="p-2 rounded-xl text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="relative w-full mb-3">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari motor impian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-600 focus:outline-hidden"
            />
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              if (link.isAction) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact();
                    }}
                    className="flex items-center py-2 px-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-left"
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center py-2 px-3 rounded-lg text-sm font-semibold ${
                    pathname === link.href
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">Ikuti Kami:</span>
            <SocialLinks />
          </div>
        </div>
      )}
    </header>
  );
}
