import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "../molecules/CategoryCard";
import { categories } from "@/data/mockData";

export function CategorySection({ selectedCategory, onSelectCategory }) {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16 relative z-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Kategori Motor
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Pilih kategori sesuai kebutuhan dan gaya berkendaramu
            </p>
          </div>

          <Link
            href="/katalog"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Lihat Semua</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid / Mobile Scroll */}
        <div className="flex md:grid md:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              icon={cat.icon}
              count={cat.count}
              isActive={selectedCategory === cat.name}
              onClick={() => onSelectCategory && onSelectCategory(cat.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
