"use client";

import TeamsGrid from "@/components/Teams";

export default function TeamsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <main className="flex-1 relative overflow-hidden">
        <TeamsGrid />
      </main>
    </div>
  );
}
