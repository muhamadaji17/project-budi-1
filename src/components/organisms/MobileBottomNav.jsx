"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Heart, PhoneCall } from "lucide-react";

export function MobileBottomNav({ onOpenContact, favoriteCount = 0 }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Beranda", icon: Home, href: "/" },
    { label: "Katalog", icon: Compass, href: "/katalog" },
    { label: "Favorit", icon: Heart, href: "#favorit", isBadge: true },
    { label: "Kontak", icon: PhoneCall, href: "#kontak", isAction: true },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-2 py-1.5 safe-area-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href) && !item.isAction;

          if (item.isAction) {
            return (
              <button
                key={item.label}
                type="button"
                onClick={onOpenContact}
                className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-gray-500 hover:text-blue-600 transition-colors"
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-[10px] font-medium mt-1">{item.label}</span>
              </button>
            );
          }

          if (item.isBadge) {
            return (
              <Link
                key={item.label}
                href="/katalog"
                className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl text-gray-500 hover:text-blue-600 transition-colors"
              >
                <div className="relative">
                  <IconComponent className="w-5 h-5" />
                  {favoriteCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {favoriteCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium mt-1">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
                isActive
                  ? "text-blue-600 font-bold"
                  : "text-gray-500 hover:text-blue-600 font-medium"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
