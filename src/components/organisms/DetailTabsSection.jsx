"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageCircle, MapPin, Play, ShieldAlert, FileText } from "lucide-react";
import { Button } from "../atoms/Button";

export function DetailTabsSection({ motor }) {
  const [activeTab, setActiveTab] = useState("spesifikasi");

  const tabs = [
    { id: "spesifikasi", label: "Spesifikasi" },
    { id: "kondisi", label: "Kondisi" },
    { id: "dokumen", label: "Dokumen" },
    { id: "video", label: "Video Unit" },
  ];

  const specRows = [
    { label: "Merek", value: motor.brand },
    { label: "Tipe Motor", value: motor.type },
    { label: "Tahun Perakitan", value: motor.year },
    { label: "Kilometer (Odo)", value: motor.mileage },
    { label: "Transmisi", value: motor.transmission || motor.type },
    { label: "Warna Unit", value: motor.color },
    { label: "Kapasitas Mesin", value: motor.engine || "160 cc" },
    { label: "Masa Pajak", value: motor.taxValidUntil || "Hidup Panjang" },
  ];

  const handleChatAppointment = () => {
    const text = encodeURIComponent(
      `Halo MotorKu, saya ingin menjadwalkan janji temu/test drive untuk unit *${motor.name}*. Kapan showroom buka?`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <div className="mt-8 md:mt-12">
      {/* Tabs Header */}
      <div className="border-b border-gray-200">
        <div className="flex items-center space-x-2 sm:space-x-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`py-3.5 px-2 text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Body + Showroom Callout */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Active Tab Content */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
          {/* TAB 1: SPESIFIKASI */}
          {activeTab === "spesifikasi" && (
            <div className="space-y-6">
              <h3 className="text-base font-bold text-gray-900">
                Spesifikasi Teknis
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {specRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50/70 border border-gray-100"
                  >
                    <span className="text-gray-500 text-xs sm:text-sm font-medium">
                      {row.label}
                    </span>
                    <span className="text-gray-900 text-xs sm:text-sm font-bold text-right">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  Deskripsi Lengkap
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {motor.description}
                </p>
              </div>

              {/* Key Features */}
              {motor.features && (
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    Keunggulan & Kondisi Part
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {motor.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: KONDISI */}
          {activeTab === "kondisi" && (
            <div className="space-y-5">
              <h3 className="text-base font-bold text-gray-900">
                Laporan Hasil Inspeksi 50+ Titik
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-900">Mesin & Transmisi 100% Sehat</h5>
                    <p className="text-xs text-emerald-700 mt-0.5">Suara mesin halus, tidak ada rembes oli, tarikan responsif, dan starter elektrik instan.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-900">Sasis & Rangka Normal Bebas Tabrakan</h5>
                    <p className="text-xs text-emerald-700 mt-0.5">Rangka center lurus, kestabilan stang sempurna pada kecepatan tinggi maupun tikungan.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-900">Kelistrikan & Fitur Digital Berfungsi</h5>
                    <p className="text-xs text-emerald-700 mt-0.5">Semua lampu LED, sein, klakson, speedometer digital, dan soket pengisi daya berfungsi optimal.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DOKUMEN */}
          {activeTab === "dokumen" && (
            <div className="space-y-5">
              <h3 className="text-base font-bold text-gray-900">
                Legalitas & Keaslian Dokumen
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Semua unit motor di MotorKu telah diverifikasi keabsahannya melalui sistem Samsat setempat. Kami menjamin 100% dokumen bebas blokir dan bukan unit bermasalah.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">BPKB Asli & Faktur</h5>
                    <p className="text-[11px] text-gray-500">Tangan pertama, siap balik nama</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">STNK & Pajak Hidup</h5>
                    <p className="text-[11px] text-gray-500">Masa berlaku s/d {motor.taxValidUntil || "2027"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: VIDEO */}
          {activeTab === "video" && (
            <div className="space-y-4 text-center py-6">
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center group cursor-pointer">
                <img
                  src={motor.images ? motor.images[0] : ""}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <span className="text-white text-xs font-semibold mt-3 bg-black/50 px-3 py-1 rounded-full">
                    Putar Video Walkaround & Suara Knalpot
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Tonton video 360° untuk melihat detail bodi, mesin yang menyala, dan kelengkapan aksesoris motor ini.
              </p>
            </div>
          )}
        </div>

        {/* Right: Showroom Visit Box */}
        <div className="lg:col-span-4 bg-linear-to-br from-blue-50 to-indigo-50/60 rounded-3xl p-6 border border-blue-100 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <MapPin className="w-5 h-5" />
          </div>

          <div>
            <h4 className="text-base font-extrabold text-gray-900">
              Ingin Lihat Unit Langsung?
            </h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Datang ke showroom kami untuk melihat langsung fisik unit, cek dokumen,
              dan coba test drive gratis sebelum memutuskan membeli.
            </p>
          </div>

          <div className="p-3 bg-white/80 rounded-xl border border-blue-100 text-xs text-gray-700 space-y-1">
            <p className="font-semibold text-gray-900">Lokasi Showroom Pusat:</p>
            <p className="text-gray-500">Jl. Raya Motor No. 123, Jakarta Selatan</p>
            <p className="text-emerald-600 font-medium">Buka hari ini: 08.00 - 20.00 WIB</p>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            fullWidth
            icon={MessageCircle}
            onClick={handleChatAppointment}
            className="font-bold shadow-xs"
          >
            Chat Janji Temu Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}
