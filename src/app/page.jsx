/** @format */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { MainLayout } from "@/components/templates/MainLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { CategorySection } from "@/components/organisms/CategorySection";
import { MotorCardGrid } from "@/components/organisms/MotorCardGrid";
import { PromoBannerSection } from "@/components/organisms/PromoBannerSection";
import { TestimonialSection } from "@/components/organisms/TestimonialSection";
import { motorList } from "@/data/mockData";

export default function HomePage() {
  const router = useRouter();

  // Search & Filter States
  const [keyword, setKeyword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [favorites, setFavorites] = useState([]);

  // Featured units (first 4 items as shown in design mockup)
  const featuredMotors = motorList.slice(0, 4);

  const handleFavoriteToggle = (id, isFav) => {
    setFavorites((prev) =>
      isFav ? [...prev, id] : prev.filter((item) => item !== id),
    );
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.append("search", keyword);
    if (selectedBrand) params.append("brand", selectedBrand);
    if (selectedType) params.append("type", selectedType);
    if (selectedPriceRange) params.append("price", selectedPriceRange);

    router.push(`/katalog?${params.toString()}`);
  };

  const handleSelectCategory = (categoryName) => {
    router.push(`/katalog?type=${encodeURIComponent(categoryName)}`);
  };

  const handleTradeInClick = () => {
    const text = encodeURIComponent(
      "Halo MotorKu, saya ingin mendapatkan informasi mengenai program Tukar Tambah motor.",
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <MainLayout favoriteCount={favorites.length}>
      {/* 01. Hero Section with Quick Filter */}
      <div className="">
        <HeroSection
          keyword={keyword}
          setKeyword={setKeyword}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          onSearch={handleSearch}
        />
      </div>

      {/* 02. Kategori Motor */}
      <CategorySection onSelectCategory={handleSelectCategory} />

      {/* 03. Rekomendasi Unit Terbaik (Section 01 from Mockup) */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pilihan Terkurasi</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Rekomendasi Unit Terbaik
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Pilihan motor berkualitas siap pakai, siap menemani setiap
                perjalananmu.
              </p>
            </div>

            <Link
              href="/katalog"
              className="group inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Lihat Semua Motor</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid 4 Motor Cards */}
          <MotorCardGrid
            motors={featuredMotors}
            columns={4}
            favorites={favorites}
            onFavoriteToggle={handleFavoriteToggle}
          />
        </div>
      </section>

      {/* 04. Promo Banner (Tukar Tambah) & Kenapa Pilih Kami */}
      <div id="tentang-kami">
        <PromoBannerSection onTradeInClick={handleTradeInClick} />
      </div>

      {/* 05. Apa Kata Pelanggan Kami (Testimoni) */}
      <TestimonialSection />
    </MainLayout>
  );
}
