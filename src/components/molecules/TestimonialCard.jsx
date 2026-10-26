import React from "react";
import { Avatar } from "../atoms/Avatar";
import { RatingStars } from "../atoms/RatingStars";

export function TestimonialCard({
  name,
  avatar,
  rating = 5,
  comment,
  time,
  city,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Avatar src={avatar} alt={name} size="md" />
          <div>
            <h4 className="text-sm font-bold text-gray-900 leading-tight">{name}</h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <RatingStars rating={rating} size="sm" />
              {city && <span className="text-[11px] text-gray-400">• {city}</span>}
            </div>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic line-clamp-3">
          &ldquo;{comment}&rdquo;
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400">
        <span>Verified Buyer</span>
        <span>{time}</span>
      </div>
    </div>
  );
}
