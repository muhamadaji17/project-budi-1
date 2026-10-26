import React from "react";
import { Check } from "lucide-react";

export function Checkbox({
  id,
  checked,
  onChange,
  label,
  count,
  className = "",
}) {
  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center justify-between w-full cursor-pointer select-none py-1 group ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="relative flex items-center justify-center">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="peer sr-only"
          />
          <div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors duration-150 flex items-center justify-center">
            <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>
        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-xs text-gray-400 group-hover:text-gray-500">
          ({count})
        </span>
      )}
    </label>
  );
}
