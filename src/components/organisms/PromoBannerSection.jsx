/** @format */

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  BadgePercent,
  Headphones,
  Award,
} from "lucide-react";
import { Button } from "../atoms/Button";

export function PromoBannerSection({ onTradeInClick }) {
  const benefits = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Unit Berkualitas",
      desc: "Semua motor sudah melalui pengecekan kondisi fisik, mesin, dan keaslian dokumen resmi.",
    },
    {
      id: 2,
      icon: BadgePercent,
      title: "Harga Transparan",
      desc: "Tanpa biaya tersembunyi, harga yang ditawarkan jujur dan bersaing sesuai kondisi riil.",
    },
    {
      id: 3,
      icon: Headphones,
      title: "Pelayanan Ramah",
      desc: "Tim kami siap mendampingi mulai dari konsultasi unit, test drive, sampai serah terima.",
    },
    {
      id: 4,
      icon: Award,
      title: "Garansi Pembelian",
      desc: "Garansi mesin 1 bulan & jaminan uang kembali 100% jika unit terbukti bekas laka atau banjir.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-6 lg:gap-8 items-stretch">
          {/* Left: Trade-in Banner */}
          {/* <div className="lg:col-span-6 rounded-3xl bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-md">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4 border border-blue-400/20">
                Program Spesial MotorKu
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Tukar Tambah Motor <br />
                <span className="text-blue-400">Jadi Lebih Mudah!</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-3 font-normal leading-relaxed">
                Jual motor lama kamu dengan taksiran harga tertinggi, atau tukar
                tambah langsung dengan unit impian baru & bekas bergaransi.
                Proses cepat 1 hari beres!
              </p>
            </div>

            <div className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onTradeInClick}
                className="bg-blue-600 hover:bg-blue-500 shadow-lg text-white gap-2"
              >
                <span>Info Tukar Tambah</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="mt-4 sm:mt-0 sm:absolute sm:right-4 sm:bottom-4 w-full sm:w-56 opacity-90 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80"
                alt="Tukar Tambah Motor"
                className="rounded-2xl shadow-md border border-white/10 hidden sm:block object-cover h-36 w-full"
              />
            </div>
          </div> */}

          {/* Right: Why Choose Us */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                Kenapa Pilih Kami?
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Komitmen kami memberikan standar kenyamanan dan keamanan
                transaksi tertinggi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
              {benefits.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.id} className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
