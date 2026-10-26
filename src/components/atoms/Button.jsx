import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  type = "button",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-xl";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-5 py-2.5 text-base gap-2.5 shadow-sm hover:shadow",
    xl: "px-6 py-3.5 text-base font-semibold gap-3 shadow-md hover:shadow-lg",
  };

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-xs",
    secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1caa4f] shadow-xs",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
    dark: "bg-gray-900 text-white hover:bg-gray-800 active:bg-black",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
