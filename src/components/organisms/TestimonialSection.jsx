import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { testimonials } from "@/data/mockData";

export function TestimonialSection() {
  return (
    <section id="testimoni" className="py-12 md:py-16 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>4.9 / 5.0 dari 1.200+ Pelanggan Puas</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Banyak pelanggan yang sudah mempercayai kami. Berikut beberapa cerita mereka.
            </p>
          </div>

          <a
            href="#testimoni"
            className="group hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Lihat Semua Testimoni</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testi) => (
            <TestimonialCard
              key={testi.id}
              name={testi.name}
              avatar={testi.avatar}
              rating={testi.rating}
              comment={testi.comment}
              time={testi.time}
              city={testi.city}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
