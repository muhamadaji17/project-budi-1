/** @format */

"use client";

import React, { useState } from "react";
import { MessageCircle, HelpCircle, Heart, Share2, Check } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { PriceTag } from "../atoms/PriceTag";
import { Button } from "../atoms/Button";
import { TrustBadgeItem } from "../molecules/TrustBadgeItem";

export function DetailInfoBox({ motor, onAskQuestion }) {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo MotorKu, saya tertarik dengan unit *${motor.name}* (Harga: Rp ${motor.price?.toLocaleString(
        "id-ID",
      )}). Apakah unit ini masih tersedia?`,
    );
    window.open(`https://wa.me/6281315223570?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-6">
      {/* Top Badges & Status */}
      <div className="flex items-center gap-2">
        <Badge variant={motor.status === "Baru" ? "baru" : "bekas"}>
          {motor.status}
        </Badge>
        {motor.isAvailable ? (
          <Badge variant="tersedia">Tersedia di Showroom</Badge>
        ) : (
          <Badge variant="terjual">Sudah Terjual</Badge>
        )}
      </div>

      {/* Title & Quick specs */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          {motor.name}
        </h1>
        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500 font-medium">
          <span>{motor.year}</span>
          <span>•</span>
          <span>{motor.mileage}</span>
          <span>•</span>
          <span>{motor.transmission || motor.type}</span>
          <span>•</span>
          <span className="text-blue-600">{motor.color}</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="pt-2 pb-4 border-y border-gray-100">
        <span className="text-xs text-gray-400 font-medium block">
          Harga Cash (Nego Halus)
        </span>
        <PriceTag price={motor.price} size="lg" className="mt-1" />
        <span className="text-[11px] text-gray-500 mt-1 block">
          Tersedia simulasi kredit DP mulai Rp 2 jutaan & angsuran ringan
        </span>
      </div>

      {/* Trust Badges Trio */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <TrustBadgeItem
          type="warranty"
          title="Garansi Mesin"
          subtitle={
            motor.status === "Baru" ? "Resmi 3 Tahun" : "Showroom 1 Bulan"
          }
        />
        <TrustBadgeItem
          type="documents"
          title="Dokumen Lengkap"
          subtitle="BPKB & STNK Sah"
        />
        <TrustBadgeItem
          type="ready"
          title="Siap Pakai"
          subtitle="Lolos 50+ Titik Cek"
        />
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 pt-2">
        <Button
          variant="whatsapp"
          size="lg"
          fullWidth
          icon={MessageCircle}
          onClick={handleWhatsApp}
          className="font-bold text-base py-3.5 shadow-md shadow-emerald-500/20"
        >
          Hubungi via WhatsApp
        </Button>

        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="md"
            fullWidth
            icon={HelpCircle}
            onClick={onAskQuestion}
            className="border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold"
          >
            Tanya Unit
          </Button>

          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2.5 rounded-xl border transition-colors flex items-center justify-center shrink-0 cursor-pointer ${
              isSaved
                ? "border-red-300 bg-red-50 text-red-500"
                : "border-gray-200 bg-white hover:bg-gray-50 text-gray-600"
            }`}
            title="Simpan ke Favorit"
            aria-label="Simpan ke Favorit"
          >
            <Heart className={`w-5 h-5 ${isSaved ? "fill-red-500" : ""}`} />
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
            title="Bagikan Tautan"
            aria-label="Bagikan Tautan"
          >
            {copied ? (
              <Check className="w-5 h-5 text-emerald-600" />
            ) : (
              <Share2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
