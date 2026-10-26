/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Search, MessageCircle } from "lucide-react";
import { SearchBarGroup } from "../molecules/SearchBarGroup";

export function HeroSection({
  keyword,
  setKeyword,
  selectedBrand,
  setSelectedBrand,
  selectedType,
  setSelectedType,
  selectedPriceRange,
  setSelectedPriceRange,
  onSearch,
  onOpenContact,
}) {
  const router = useRouter();

  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch();
    } else {
      router.push(
        `/katalog?search=${keyword || ""}&brand=${selectedBrand || ""}&type=${selectedType || ""}&price=${selectedPriceRange || ""}`,
      );
    }
  };

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const text = encodeURIComponent(
        "Halo MotorKu, saya ingin konsultasi mengenai unit motor baru & bekas.",
      );
      window.open(`https://wa.me/6281315223570?text=${text}`, "_blank");
    }
  };

  return (
    <section className="relative z-20 bg-[url('/images/hero_banner_home.png')] bg-cover bg-center bg-no-repeat pt-8 pb-10 md:pt-14 md:pb-14">
      {/* Decorative ambient lights contained without clipping the search bar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sun glow effect on top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[radial-gradient(circle_at_70%_30%,rgba(255,243,199,0.5)_0%,rgba(191,224,248,0.3)_45%,transparent_75%)]" />
        {/* Subtle cloud ambient lights */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[360px] md:min-h-[420px] lg:min-h-[460px]">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-blue-100 shadow-sm text-xs font-semibold text-gray-800">
              <ShieldCheck className="w-4 h-4 text-blue-600 fill-blue-50" />
              <span>Motor Baru & Bekas Berkualitas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-gray-900 tracking-tight leading-[1.12]">
              Motor Impianmu <br />
              <span className="text-blue-600 relative inline-block mt-1">
                Ada di Sini!
                {/* Hand-drawn yellow underline SVG */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-amber-400 overflow-visible pointer-events-none"
                  viewBox="0 0 170 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8C45 3.5 105 2 165 7.5"
                    stroke="#FACC15"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-lg leading-relaxed font-normal">
              Nikmati pengalaman membeli motor baru dan bekas dengan proses
              mudah, aman, dan terpercaya. Pilih motor favoritmu, dan wujudkan
              perjalanan terbaikmu!
            </p>

            {/* CTA Buttons Pair */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 rounded-xl shadow-md shadow-blue-500/25 transition-all group"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Lihat Katalog Motor</span>
              </Link>

              <button
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white active:bg-gray-100 border border-gray-300 text-gray-800 font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <span>Hubungi Kami</span>
              </button>
            </div>
          </div>

          {/* Right Column: Space for banner motorcycle illustration */}
          <div className="hidden lg:block lg:col-span-6 min-h-[320px]" />
        </div>

        {/* Floating Quick Filter Search Bar - Floating ON TOP of both sections with high z-index and no clipping */}
        <div className="relative z-30 mt-6 sm:mt-8 md:mt-10 -mb-8 sm:-mb-10 md:-mb-24">
          <SearchBarGroup
            keyword={keyword}
            onKeywordChange={setKeyword}
            selectedBrand={selectedBrand}
            onBrandChange={setSelectedBrand}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedPriceRange={selectedPriceRange}
            onPriceRangeChange={setSelectedPriceRange}
            onSearch={handleSearchSubmit}
          />
        </div>
      </div>
    </section>
  );
}
