import React from "react";
import { Star } from "lucide-react";

export function RatingStars({ rating = 5, max = 5, size = "sm", showValue = false }) {
  const sizeMap = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center text-amber-400">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeMap[size]} ${
              i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs font-semibold text-gray-700 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
