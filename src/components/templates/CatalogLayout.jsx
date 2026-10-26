/** @format */

"use client";

import React, { useState } from "react";
import { Breadcrumb } from "../molecules/Breadcrumb";
import { FilterSidebar } from "../organisms/FilterSidebar";
import { Pagination } from "../molecules/Pagination";
import {
  SlidersHorizontal,
  LayoutGrid,
  List,
  ArrowRight,
  X,
} from "lucide-react";
import { Button } from "../atoms/Button";

export function CatalogLayout({
  totalCount = 24,
  sortBy,
  onSortChange,
  viewMode = "grid",
  onViewModeChange,
  currentPage = 1,
  totalPages = 5,
  onPageChange,
  // Filter states
  selectedBrands,
  onBrandToggle,
  selectedTypes,
  onTypeToggle,
  selectedYear,
  onYearChange,
  maxPrice,
  onPriceChange,
  onResetFilters,
  onApplyFilters,
  onSellMotorClick,
  children,
}) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const sortOptions = [
    { value: "terbaru", label: "Terbaru" },
    { value: "harga-rendah", label: "Harga: Rendah ke Tinggi" },
    { value: "harga-tinggi", label: "Harga: Tinggi ke Rendah" },
    { value: "tahun-terbaru", label: "Tahun Paling Baru" },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Banner Header */}
      <section className="bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-10 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Katalog Motor
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-blue-200 mt-2 max-w-xl font-normal leading-relaxed">
            Temukan motor impianmu dari berbagai pilihan unit baru dan bekas
            dengan kondisi prima dan harga bersaing.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb items={[{ label: "Katalog Motor", href: "/katalog" }]} />
        </div>

        {/* 2-Columns: Sidebar (Desktop) + Catalog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Left Sidebar */}
          {/* <div className="hidden lg:block lg:col-span-3 sticky top-24">
            <FilterSidebar
              selectedBrands={selectedBrands}
              onBrandToggle={onBrandToggle}
              selectedTypes={selectedTypes}
              onTypeToggle={onTypeToggle}
              selectedYear={selectedYear}
              onYearChange={onYearChange}
              maxPrice={maxPrice}
              onPriceChange={onPriceChange}
              onReset={onResetFilters}
              onApply={onApplyFilters}
            />
          </div> */}

          <div className="lg:col-span-12 space-y-6">
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex flex-wrap items-center justify-between gap-3">
              {/* <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 text-blue-600 text-xs font-bold border border-blue-200 cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Filter</span>
                  {(selectedBrands?.length > 0 ||
                    selectedTypes?.length > 0) && (
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
                      {(selectedBrands?.length || 0) +
                        (selectedTypes?.length || 0)}
                    </span>
                  )}
                </button>

                <p className="text-xs sm:text-sm text-gray-600">
                  Menampilkan{" "}
                  <span className="font-bold text-gray-900">{totalCount}</span>{" "}
                  motor
                </p>
              </div> */}

              {/* Sorting & View Mode */}
              <div className="flex items-center gap-3 ml-auto">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-500 hidden sm:inline">
                    Urutkan:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      onSortChange && onSortChange(e.target.value)
                    }
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700 cursor-pointer focus:outline-hidden focus:border-blue-600"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden sm:flex items-center rounded-xl border border-gray-200 p-0.5 bg-gray-50">
                  <button
                    type="button"
                    onClick={() => onViewModeChange && onViewModeChange("grid")}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-white text-blue-600 shadow-xs"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                    aria-label="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onViewModeChange && onViewModeChange("list")}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "list"
                        ? "bg-white text-blue-600 shadow-xs"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                    aria-label="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Catalog Grid items */}
            {children}

            {/* Pagination */}
            <div className="pt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>

            {/* Bottom CTA Banner: "Mau Jual Motor Kamu?" */}
            {/* <div className="mt-10 rounded-3xl bg-linear-to-r from-amber-50 via-sky-50 to-blue-50 border border-blue-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2 text-center md:text-left max-w-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Titip Jual & Beli Cepat
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  Mau Jual Motor Kamu?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Dapatkan penawaran harga terbaik untuk motor kesayanganmu.
                  Proses cepat, inspeksi gratis ke rumah, dan pembayaran
                  langsung cair di hari yang sama.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onSellMotorClick}
                  className="font-bold shadow-md shadow-blue-600/20 whitespace-nowrap"
                >
                  <span>Jual Motor Sekarang</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer / Bottom Sheet */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-h-[85vh] overflow-y-auto bg-white rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="font-extrabold text-base text-gray-900">
                Filter Motor
              </h3>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4">
              <FilterSidebar
                selectedBrands={selectedBrands}
                onBrandToggle={onBrandToggle}
                selectedTypes={selectedTypes}
                onTypeToggle={onTypeToggle}
                selectedYear={selectedYear}
                onYearChange={onYearChange}
                maxPrice={maxPrice}
                onPriceChange={onPriceChange}
                onReset={onResetFilters}
                onApply={() => {
                  if (onApplyFilters) onApplyFilters();
                  setMobileFilterOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
