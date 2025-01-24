"use client";

import TeamsGrid from "@/components/Teams";
import Navbar from "@/components/Navbar";

export default function TeamsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1 relative overflow-hidden">
        <TeamsGrid />
      </main>
    </div>
  );
}
