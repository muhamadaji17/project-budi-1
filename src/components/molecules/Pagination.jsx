import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
  className = "",
}) {
  const pages = [1, 2, 3, 5];

  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors cursor-pointer"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onPageChange && onPageChange(p)}
          className={`w-9 h-9 rounded-xl font-semibold text-xs flex items-center justify-center transition-all cursor-pointer ${
            currentPage === p
              ? "bg-blue-600 text-white shadow-xs"
              : "bg-white border border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors cursor-pointer"
        aria-label="Next Page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
