import React from "react";

export function PriceTag({ price, size = "md", className = "" }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  const sizeClasses = {
    sm: "text-base font-bold",
    md: "text-lg md:text-xl font-bold",
    lg: "text-2xl md:text-3xl font-extrabold",
  };

  return (
    <div className={`text-red-500 tracking-tight ${sizeClasses[size]} ${className}`}>
      {formatRupiah(price)}
    </div>
  );
}
