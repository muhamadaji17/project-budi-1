"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MainLayout } from "@/components/templates/MainLayout";
import { CatalogLayout } from "@/components/templates/CatalogLayout";
import { MotorCardGrid } from "@/components/organisms/MotorCardGrid";
import { motorList } from "@/data/mockData";

function CatalogContent() {
  const searchParams = useSearchParams();

  // Initial params
  const initialSearch = searchParams.get("search") || "";
  const initialBrand = searchParams.get("brand") || "";
  const initialType = searchParams.get("type") || "";

  // Filter States
  const [search, setSearch] = useState(initialSearch);
  const [selectedBrands, setSelectedBrands] = useState(
    initialBrand ? [initialBrand] : []
  );
  const [selectedTypes, setSelectedTypes] = useState(
    initialType ? [initialType] : []
  );
  const [selectedYear, setSelectedYear] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [sortBy, setSortBy] = useState("terbaru");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  // Toggle brand
  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Toggle type
  const handleTypeToggle = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedBrands([]);
    setSelectedTypes([]);
    setSelectedYear("");
    setMaxPrice(100000000);
    setSearch("");
  };

  // Filtered & Sorted Motor List
  const filteredMotors = useMemo(() => {
    return motorList.filter((item) => {
      // Search keyword
      if (search) {
        const query = search.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesBrand = item.brand.toLowerCase().includes(query);
        const matchesType = item.type.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesType) return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(item.brand)) {
        return false;
      }

      // Type filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(item.type)) {
        return false;
      }

      // Year filter
      if (selectedYear) {
        if (selectedYear === "2020") {
          if (item.year > 2020) return false;
        } else if (item.year !== Number(selectedYear)) {
          return false;
        }
      }

      // Max price
      if (item.price > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "harga-rendah") return a.price - b.price;
      if (sortBy === "harga-tinggi") return b.price - a.price;
      if (sortBy === "tahun-terbaru") return b.year - a.year;
      // Default terbaru
      return 0;
    });
  }, [search, selectedBrands, selectedTypes, selectedYear, maxPrice, sortBy]);

  const handleFavoriteToggle = (id, isFav) => {
    setFavorites((prev) =>
      isFav ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handleSellMotor = () => {
    const text = encodeURIComponent(
      "Halo MotorKu, saya ingin menjual motor saya. Bagaimana proses inspeksi dan penawarannya?"
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <CatalogLayout
      totalCount={filteredMotors.length}
      sortBy={sortBy}
      onSortChange={setSortBy}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
      currentPage={currentPage}
      totalPages={5}
      onPageChange={setCurrentPage}
      selectedBrands={selectedBrands}
      onBrandToggle={handleBrandToggle}
      selectedTypes={selectedTypes}
      onTypeToggle={handleTypeToggle}
      selectedYear={selectedYear}
      onYearChange={setSelectedYear}
      maxPrice={maxPrice}
      onPriceChange={setMaxPrice}
      onResetFilters={handleResetFilters}
      onApplyFilters={() => {}}
      onSellMotorClick={handleSellMotor}
    >
      <MotorCardGrid
        motors={filteredMotors}
        columns={viewMode === "grid" ? 3 : 2}
        favorites={favorites}
        onFavoriteToggle={handleFavoriteToggle}
        emptyMessage="Coba sesuaikan filter merek, tipe motor, atau rentang harga Anda."
      />
    </CatalogLayout>
  );
}

export default function CatalogPage() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <CatalogContent />
      </Suspense>
    </MainLayout>
  );
}
