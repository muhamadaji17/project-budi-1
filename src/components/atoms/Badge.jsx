import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    baru: "bg-red-500 text-white font-semibold shadow-xs",
    bekas: "bg-blue-600 text-white font-semibold shadow-xs",
    tersedia: "bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium",
    promo: "bg-amber-500 text-white font-semibold",
    terjual: "bg-gray-400 text-white font-semibold",
    outline: "border border-gray-300 text-gray-700 bg-white",
    default: "bg-blue-50 text-blue-700 font-medium",
  };

  const selectedVariant = variants[variant] || variants.default;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs transition-colors duration-150 ${selectedVariant} ${className}`}
    >
      {children}
    </span>
  );
}
