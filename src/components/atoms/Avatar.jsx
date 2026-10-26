import React from "react";

export function Avatar({ src, alt = "Avatar", size = "md", className = "" }) {
  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  return (
    <div
      className={`relative inline-block overflow-hidden rounded-full border-2 border-white shadow-xs bg-gray-100 shrink-0 ${sizeMap[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-bold text-gray-500 bg-blue-50 text-blue-600">
          {alt.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}
