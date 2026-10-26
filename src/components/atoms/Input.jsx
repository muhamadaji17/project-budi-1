import React from "react";

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  className = "",
  error,
  ...props
}) {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-gray-300 bg-white py-2.5 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-150 focus:border-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-100 ${
          Icon ? "pl-10" : "pl-3.5"
        } pr-3.5 ${error ? "border-red-500 focus:ring-red-100" : ""} ${className}`}
        {...props}
      />
    </div>
  );
}
