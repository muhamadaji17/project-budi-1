"use client";

import React, { useState } from "react";
import { Navbar } from "../organisms/Navbar";
import { MobileBottomNav } from "../organisms/MobileBottomNav";
import { Footer } from "../organisms/Footer";
import { ContactModal } from "../organisms/ContactModal";

export function MainLayout({ children, favoriteCount = 0 }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-800">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main className="flex-1 w-full pb-16 md:pb-0">{children}</main>

      <Footer onOpenContact={() => setContactOpen(true)} />

      <MobileBottomNav
        onOpenContact={() => setContactOpen(true)}
        favoriteCount={favoriteCount}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
