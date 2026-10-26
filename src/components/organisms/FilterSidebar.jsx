"use client";

import React from "react";
import { Checkbox } from "../atoms/Checkbox";
import { Select } from "../atoms/Select";
import { RangeSlider } from "../atoms/RangeSlider";
import { Button } from "../atoms/Button";
import { RotateCcw } from "lucide-react";

export function FilterSidebar({
  selectedBrands = [],
  onBrandToggle,
  selectedTypes = [],
  onTypeToggle,
  selectedYear,
  onYearChange,
  maxPrice = 100000000,
  onPriceChange,
  onReset,
  onApply,
  className = "",
}) {
  const brandList = [
    { name: "Honda", count: 12 },
    { name: "Yamaha", count: 8 },
    { name: "Suzuki", count: 3 },
    { name: "Kawasaki", count: 4 },
    { name: "TVS", count: 1 },
    { name: "Lainnya", count: 2 },
  ];

  const typeList = [
    { name: "Matic", count: 18 },
    { name: "Sport", count: 8 },
    { name: "Underbone", count: 5 },
    { name: "Classic", count: 4 },
    { name: "Adventure", count: 6 },
    { name: "Motor Listrik", count: 3 },
  ];

  const years = [
    { value: "", label: "Semua Tahun" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020 ke bawah" },
  ];

  return (
    <aside
      className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-xs space-y-6 ${className}`}
    >
      {/* Top Title & Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h3 className="font-extrabold text-base text-gray-900">Filter</h3>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Merek (Brand) */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
          Merek
        </h4>
        <div className="space-y-1">
          {brandList.map((brand) => (
            <Checkbox
              key={brand.name}
              id={`brand-${brand.name}`}
              label={brand.name}
              count={brand.count}
              checked={selectedBrands.includes(brand.name)}
              onChange={() => onBrandToggle && onBrandToggle(brand.name)}
            />
          ))}
        </div>
      </div>

      {/* Tipe Motor */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
          Tipe Motor
        </h4>
        <div className="space-y-1">
          {typeList.map((type) => (
            <Checkbox
              key={type.name}
              id={`type-${type.name}`}
              label={type.name}
              count={type.count}
              checked={selectedTypes.includes(type.name)}
              onChange={() => onTypeToggle && onTypeToggle(type.name)}
            />
          ))}
        </div>
      </div>

      {/* Tahun */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
          Tahun
        </h4>
        <Select
          options={years}
          value={selectedYear}
          onChange={(e) => onYearChange && onYearChange(e.target.value)}
          placeholder=""
        />
      </div>

      {/* Rentang Harga */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
          Rentang Harga
        </h4>
        <RangeSlider
          min={0}
          max={100000000}
          step={1000000}
          value={maxPrice}
          onChange={onPriceChange}
        />
      </div>

      {/* Terapkan Filter Button */}
      <div className="pt-2">
        <Button
          variant="primary"
          fullWidth
          size="md"
          onClick={onApply}
          className="shadow-sm font-semibold"
        >
          Terapkan Filter
        </Button>
      </div>
    </aside>
  );
}
