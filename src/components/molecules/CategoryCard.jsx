import React from "react";
import { Bike, Gauge, Compass, Sparkles, Mountain, Zap } from "lucide-react";

export function CategoryCard({
  id,
  name,
  icon,
  count,
  isActive = false,
  onClick,
}) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Gauge":
        return <Gauge className="w-6 h-6" />;
      case "Compass":
        return <Compass className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Mountain":
        return <Mountain className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Bike":
      default:
        return <Bike className="w-6 h-6" />;
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-center min-w-[110px] sm:min-w-[130px] flex-1 ${
        isActive
          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
          : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-md text-gray-700 hover:text-blue-600"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110 ${
          isActive
            ? "bg-white/20 text-white"
            : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
        }`}
      >
        {getIcon(icon)}
      </div>
      <span className="text-sm font-semibold tracking-tight">{name}</span>
      {count && (
        <span
          className={`text-xs mt-0.5 ${
            isActive ? "text-blue-100" : "text-gray-400 group-hover:text-blue-500"
          }`}
        >
          {count} unit
        </span>
      )}
    </button>
  );
}
