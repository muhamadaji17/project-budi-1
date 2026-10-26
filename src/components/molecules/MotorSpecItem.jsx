import React from "react";
import { Calendar, Gauge, Cog } from "lucide-react";

export function MotorSpecItem({ icon = "calendar", text, className = "" }) {
  const getIcon = () => {
    switch (icon) {
      case "gauge":
        return <Gauge className="w-3.5 h-3.5 text-gray-400" />;
      case "cog":
        return <Cog className="w-3.5 h-3.5 text-gray-400" />;
      case "calendar":
      default:
        return <Calendar className="w-3.5 h-3.5 text-gray-400" />;
    }
  };

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs text-gray-600 ${className}`}>
      {getIcon()}
      <span className="font-medium truncate">{text}</span>
    </div>
  );
}
