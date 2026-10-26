"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { PriceTag } from "../atoms/PriceTag";
import { MotorSpecItem } from "../molecules/MotorSpecItem";

export function MotorCard({
  motor,
  onFavoriteToggle,
  isFavorite = false,
  className = "",
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !favorite;
    setFavorite(nextState);
    if (onFavoriteToggle) {
      onFavoriteToggle(motor.id, nextState);
    }
  };

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden relative ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
        <img
          src={motor.images && motor.images[0] ? motor.images[0] : motor.image}
          alt={motor.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <Badge variant={motor.status === "Baru" ? "baru" : "bekas"}>
            {motor.status}
          </Badge>
          {motor.isAvailable ? (
            <Badge variant="tersedia">Tersedia</Badge>
          ) : (
            <Badge variant="terjual">Terjual</Badge>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label="Simpan ke favorit"
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs ${
            favorite
              ? "bg-red-500 text-white shadow-md shadow-red-500/30"
              : "bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 shadow-xs"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${favorite ? "fill-white" : ""}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <Link href={`/katalog/${motor.id}`}>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
              {motor.name}
            </h3>
          </Link>

          {/* Quick specs */}
          <div className="flex items-center gap-3 mt-2.5 pb-3 border-b border-gray-100">
            <MotorSpecItem icon="calendar" text={motor.year} />
            <span className="text-gray-300">•</span>
            <MotorSpecItem icon="gauge" text={motor.mileage} />
            <span className="text-gray-300">•</span>
            <MotorSpecItem icon="cog" text={motor.type || motor.transmission} />
          </div>
        </div>

        {/* Bottom Price & Action */}
        <div className="mt-3.5 space-y-3">
          <PriceTag price={motor.price} size="md" />

          <Link
            href={`/katalog/${motor.id}`}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all group/btn"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
