/** @format */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/templates/MainLayout";
import { Breadcrumb } from "@/components/molecules/Breadcrumb";
import { DetailGallery } from "@/components/organisms/DetailGallery";
import { DetailInfoBox } from "@/components/organisms/DetailInfoBox";
import { DetailTabsSection } from "@/components/organisms/DetailTabsSection";
import { MotorCardGrid } from "@/components/organisms/MotorCardGrid";
import { Button } from "@/components/atoms/Button";
import { motorList } from "@/data/mockData";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function MotorDetailClient({ id }) {
  // Find the motor item or fallback to Honda Vario 160
  const motor = motorList.find((item) => item.id === id) || motorList[2];

  // Related motors (excluding current one)
  const relatedMotors = motorList
    .filter((item) => item.id !== motor.id)
    .slice(0, 4);

  const handleAskQuestion = () => {
    const text = encodeURIComponent(
      `Halo MotorKu, saya ingin bertanya lebih detail mengenai unit *${motor.name}*. Apakah bisa dibantu?`,
    );
    window.open(`https://wa.me/6281315223570?text=${text}`, "_blank");
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back Link & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <Breadcrumb
            items={[
              { label: "Katalog Motor", href: "/katalog" },
              { label: motor.name, href: `/katalog/${motor.id}` },
            ]}
          />

          <Link
            href="/katalog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Katalog</span>
          </Link>
        </div>

        {/* 2-Columns: Left Gallery + Right Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <DetailGallery images={motor.images} title={motor.name} />
          </div>

          {/* Right Column: Detail Info & Actions */}
          <div className="lg:col-span-5">
            <DetailInfoBox motor={motor} onAskQuestion={handleAskQuestion} />
          </div>
        </div>

        {/* Tabs Section: Spesifikasi, Kondisi, Dokumen, Video */}
        <DetailTabsSection motor={motor} />

        {/* Rekomendasi Unit Serupa */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                Pilihan Motor Lainnya
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Unit sejenis yang mungkin cocok untuk kebutuhan Anda
              </p>
            </div>

            <Link
              href="/katalog"
              className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Lihat Semua
            </Link>
          </div>

          <MotorCardGrid motors={relatedMotors} columns={4} />
        </section>
      </div>

      {/* Sticky Mobile WhatsApp CTA (shown on mobile screens < 768px, exactly as in section 04 of design) */}
      <div className="md:hidden fixed bottom-14 inset-x-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 font-semibold uppercase">
            Harga Cash
          </span>
          <span className="text-sm font-extrabold text-red-500">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(motor.price)}
          </span>
        </div>

        <Button
          variant="whatsapp"
          size="sm"
          icon={MessageCircle}
          onClick={() => {
            const text = encodeURIComponent(
              `Halo MotorKu, saya tertarik dengan unit *${motor.name}* (Harga: Rp ${motor.price?.toLocaleString(
                "id-ID",
              )}). Apakah unit ini masih tersedia?`,
            );
            window.open(`https://wa.me/6281315223570?text=${text}`, "_blank");
          }}
          className="font-bold px-4 py-2 text-xs shadow-md shadow-emerald-500/20"
        >
          Chat WhatsApp
        </Button>
      </div>
    </MainLayout>
  );
}
