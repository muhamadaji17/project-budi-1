"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bike, MapPin, Clock, Phone, Send, Check } from "lucide-react";

export function Footer({ onOpenContact }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0B1B3D] text-white pt-12 pb-24 md:pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-blue-900/60">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <Bike className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  Motor<span className="text-blue-400">Ku</span>
                </span>
                <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-widest">
                  Jual Beli Motor
                </span>
              </div>
            </Link>

            <p className="text-xs text-blue-200/80 leading-relaxed max-w-sm">
              Showroom jual beli motor terpercaya dengan jaminan kondisi prima,
              kelengkapan surat legalitas 100%, serta garansi resmi demi ketenangan berkendara Anda.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-blue-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Jl. Raya Motor No. 123, Jakarta Selatan 12130</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Buka Setiap Hari: 08:00 - 20:00 WIB</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+62 812 3456 7890</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-blue-400">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-blue-100 hover:text-white transition-colors">
                  Katalog Motor
                </Link>
              </li>
              <li>
                <a href="/#tentang-kami" className="text-blue-100 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/#testimoni" className="text-blue-100 hover:text-white transition-colors">
                  Testimoni Pelanggan
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-blue-100 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-blue-400">
              Update Motor Terbaru
            </h4>
            <p className="text-xs text-blue-200/80 leading-relaxed">
              Dapatkan informasi promo spesial, unit baru masuk, dan diskon flash sale langsung ke email Anda.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email kamu"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-blue-950/80 border border-blue-800 text-white placeholder-blue-300/50 focus:outline-hidden focus:border-blue-400"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-300" />
                    <span>Terdaftar!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Langganan</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-blue-300/60 gap-3">
          <p>© 2026 MotorKu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-200">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-200">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-200">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
