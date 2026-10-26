import React, { Suspense } from "react";
import MotorDetailClient from "./MotorDetailClient";
import { motorList } from "@/data/mockData";

export async function generateStaticParams() {
  return motorList.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const motor = motorList.find((m) => m.id === resolvedParams?.id) || motorList[2];

  return {
    title: `${motor.name} - MotorKu`,
    description: motor.description,
  };
}

export default async function MotorDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <MotorDetailClient id={id} />
    </Suspense>
  );
}
