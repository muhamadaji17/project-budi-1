import React from "react";

export function RangeSlider({
  min = 0,
  max = 100000000,
  step = 1000000,
  value,
  onChange,
  className = "",
}) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
        <span>Rp 0</span>
        <span className="text-blue-600 font-semibold">{formatRupiah(value || max)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange && onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
}
