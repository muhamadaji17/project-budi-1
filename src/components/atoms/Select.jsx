import React from "react";
import { ChevronDown } from "lucide-react";

export function Select({
  options = [],
  value,
  onChange,
  placeholder = "Pilih Opsi",
  icon: Icon,
  className = "",
  ...props
}) {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full appearance-none rounded-xl border border-gray-300 bg-white py-2.5 text-sm text-gray-800 transition-colors duration-150 focus:border-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-100 ${
          Icon ? "pl-10" : "pl-3.5"
        } pr-10 cursor-pointer ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" className="text-gray-400">
            {placeholder}
          </option>
        )}
        {options.map((option) => {
          const val = typeof option === "object" ? option.value : option;
          const label = typeof option === "object" ? option.label : option;
          return (
            <option key={val} value={val} className="text-gray-800">
              {label}
            </option>
          );
        })}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
}
