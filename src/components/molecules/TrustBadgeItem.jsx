import React from "react";
import { ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export function TrustBadgeItem({
  type = "warranty",
  title,
  subtitle,
  className = "",
}) {
  const getIcon = () => {
    switch (type) {
      case "documents":
        return <FileCheck className="w-5 h-5 text-blue-600" />;
      case "ready":
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case "warranty":
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div
      className={`flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 ${className}`}
    >
      <div className="p-1.5 rounded-lg bg-white shadow-xs shrink-0">{getIcon()}</div>
      <div>
        <h5 className="text-xs font-bold text-gray-800 leading-tight">{title}</h5>
        {subtitle && (
          <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
