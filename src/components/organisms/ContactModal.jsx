"use client";

import React from "react";
import { X, MessageCircle, Phone, MapPin, ExternalLink } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "../atoms/SocialIcons";
import { companyContact } from "@/data/mockData";

export function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Modal"
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center pb-4 border-b border-gray-100">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-gray-900">Hubungi Kami</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
            Kami siap membantu Anda untuk konsultasi unit, tukar tambah, atau jadwal test drive.
          </p>
        </div>

        {/* Contact List */}
        <div className="space-y-2.5 py-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-950">WhatsApp Official</h4>
                <p className="text-xs text-emerald-700">{companyContact.whatsapp}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Telepon */}
          <a
            href="tel:+6281234567890"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-950">Telepon Showroom</h4>
                <p className="text-xs text-blue-700">{companyContact.phone}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100/80 border border-pink-200/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-xs">
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-pink-950">Instagram</h4>
                <p className="text-xs text-pink-700">{companyContact.instagram}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-pink-600 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-xs">
                <TikTokIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">TikTok</h4>
                <p className="text-xs text-gray-600">{companyContact.tiktok}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Showroom Location Map preview */}
        <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-gray-900">Lokasi Showroom Pusat</p>
              <p className="text-gray-500 text-[11px] leading-tight mt-0.5">{companyContact.address}</p>
              <p className="text-gray-400 text-[10px] mt-0.5">{companyContact.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
