import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({ items = [], className = "" }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-1.5 text-xs text-gray-500 overflow-x-auto whitespace-nowrap py-1 ${className}`}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Beranda</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
            {isLast || !item.href ? (
              <span className="font-semibold text-gray-900 truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
