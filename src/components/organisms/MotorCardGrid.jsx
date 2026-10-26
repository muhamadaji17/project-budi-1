import React from "react";
import { MotorCard } from "./MotorCard";
import { Bike } from "lucide-react";

export function MotorCardGrid({
  motors = [],
  columns = 4,
  onFavoriteToggle,
  favorites = [],
  emptyMessage = "Tidak ada unit motor yang sesuai dengan filter pencarian.",
}) {
  if (motors.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center my-6">
        <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
          <Bike className="w-7 h-7" />
        </div>
        <h4 className="text-base font-bold text-gray-800">Unit Tidak Ditemukan</h4>
        <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto mt-1">
          {emptyMessage}
        </p>
      </div>
    );
  }

  const gridColsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={`grid gap-4 sm:gap-6 ${gridColsClass[columns] || gridColsClass[4]}`}>
      {motors.map((motor) => (
        <MotorCard
          key={motor.id}
          motor={motor}
          isFavorite={favorites.includes(motor.id)}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
}
