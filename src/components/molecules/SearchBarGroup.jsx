/** @format */

import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "../atoms/Button";

export function SearchBarGroup({
  keyword,
  onKeywordChange,
  selectedBrand,
  onBrandChange,
  selectedType,
  onTypeChange,
  selectedPriceRange,
  onPriceRangeChange,
  onSearch,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/70 border border-gray-100/80 p-2.5 sm:p-3.5 md:p-4 flex flex-col md:flex-row items-center gap-2.5 md:gap-3 w-full max-w-6xl mx-auto ${className}`}
    >
      {/* Search Input with soft gray pill */}
      <div className="relative w-full md:flex-1">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => onKeywordChange && onKeywordChange(e.target.value)}
          placeholder="Cari merk, tipe, atau tahun..."
          className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl md:rounded-2xl bg-gray-100/70 hover:bg-gray-100 focus:bg-white border border-transparent focus:border-blue-500 focus:outline-hidden transition-all text-gray-800 placeholder-gray-400 font-normal"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 w-full md:w-auto md:flex md:items-center">
        {/* Brand Dropdown */}
        <div className="relative flex-1 md:w-36">
          <select
            value={selectedBrand}
            onChange={(e) => onBrandChange && onBrandChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-7 py-2.5 text-xs sm:text-sm rounded-xl bg-transparent hover:bg-gray-50 border border-gray-200/80 focus:border-blue-500 focus:outline-hidden transition-colors text-gray-700 font-medium cursor-pointer"
          >
            <option value="">Semua Merek</option>
            <option value="Honda">Honda</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Kawasaki">Kawasaki</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Lainnya">Lainnya</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Type Dropdown */}
        <div className="relative flex-1 md:w-36">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange && onTypeChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-7 py-2.5 text-xs sm:text-sm rounded-xl bg-transparent hover:bg-gray-50 border border-gray-200/80 focus:border-blue-500 focus:outline-hidden transition-colors text-gray-700 font-medium cursor-pointer"
          >
            <option value="">Semua Tipe</option>
            <option value="Matic">Matic</option>
            <option value="Sport">Sport</option>
            <option value="Underbone">Underbone</option>
            <option value="Classic">Classic</option>
            <option value="Adventure">Adventure</option>
            <option value="Motor Listrik">Motor Listrik</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Price Dropdown */}
        <div className="relative flex-1 md:w-32">
          <select
            value={selectedPriceRange}
            onChange={(e) =>
              onPriceRangeChange && onPriceRangeChange(e.target.value)
            }
            className="w-full appearance-none pl-3 pr-7 py-2.5 text-xs sm:text-sm rounded-xl bg-transparent hover:bg-gray-50 border border-gray-200/80 focus:border-blue-500 focus:outline-hidden transition-colors text-gray-700 font-medium cursor-pointer"
          >
            <option value="">Harga</option>
            <option value="under15">&lt; Rp 15 Jt</option>
            <option value="15to25">Rp 15 - 25 Jt</option>
            <option value="25to35">Rp 25 - 35 Jt</option>
            <option value="above35">&gt; Rp 35 Jt</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Blue "Cari" Button */}
      <Button
        variant="primary"
        size="md"
        className="w-full md:w-auto px-7 py-2.5 font-bold text-sm bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl shadow-md shadow-blue-500/20 whitespace-nowrap"
        onClick={onSearch}
      >
        Cari
      </Button>
    </div>
  );
}
