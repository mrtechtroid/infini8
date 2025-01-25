"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PortfolioHero() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0A0A0F] flex items-center p-8 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-slow-spin" />
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] border border-white/5 rounded-full animate-reverse-slow-spin" />
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#BC002D] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-white/20 rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border border-[#BC002D] rounded-full animate-pulse" />
      </div>

      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="seigaiha"></div>
      </div>

      {/* Anime Style Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[200px] h-[2px] bg-gradient-to-r from-[#BC002D]/0 via-[#BC002D] to-[#BC002D]/0" />
        <div className="absolute top-40 right-0 w-[300px] h-[1px] bg-gradient-to-l from-[#BC002D]/0 via-[#BC002D] to-[#BC002D]/0" />
      </div>

      {/* Decorative Kanji with glow effect */}
      <div
        className="absolute right-0 top-0 text-[200px] font-bold text-white/5 transform translate-x-1/4 -translate-y-1/4 kanji-glow"
        style={{ fontFamily: '"Noto Serif JP", serif' }}
      >
        芸術
      </div>

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="relative">
            <div className="mt-12 relative">
              <div className="border-2 border-white/20 p-6 bg-black/40 backdrop-blur-sm hover:border-[#BC002D] transition-colors duration-300">
                <h1
                  className="text-[3rem] lg:text-[5rem] font-black tracking-[-0.05em] leading-[0.9] text-white relative text-glow"
                  style={{ fontFamily: '"The Last Shuriken", sans-serif' }}
                >
                  MEET
                  <br />
                  OUR
                  <br />
                  TEAM
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#BC002D] line-glow"></div>
                </h1>
              </div>
            </div>

            <div className="mt-8 lg:mt-12 relative">
              <button
                onClick={() => router.push("/team")}
                className="animated-button w-full backdrop-blur-sm p-4 lg:p-8 rounded-lg group relative overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="text-sm lg:text-xl text-white/90 font-normal"
                    style={{ fontFamily: 'The Last Shuriken, sans-serif' }}
                  >
                    Look at our team
                  </span>
                  <ArrowRight
                    className="transform transition-all duration-500 ease-out translate-x-0 group-hover:translate-x-2 opacity-70 group-hover:opacity-100"
                    size={20}
                  />
                </div>
              </button>

              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#BC002D] corner-glow"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#BC002D] corner-glow"></div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-6 gap-4 lg:gap-6 h-auto lg:h-[600px] order-last lg:order-none">
            {/* Top Image */}
            <div className="col-span-6 h-[200px] lg:h-[300px] relative group">
              <div className="absolute inset-0 border-2 border-white/20 bg-black/40 p-1 transform transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-[#BC002D]">
                <img
                  src="/team_img1.png"
                  alt="Anime character close-up"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-[#BC002D] transform transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            </div>

            {/* Bottom Two Images */}
            <div className="col-span-3 h-[150px] lg:h-[280px] relative group">
              <div className="absolute inset-0 border-2 border-white/20 bg-black/40 p-1 transform transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-[#BC002D]">
                <img
                  src="/team_img2.png"
                  alt="Anime character portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-[#BC002D] transform transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            </div>
            <div className="col-span-3 h-[150px] lg:h-[280px] relative group">
              <div className="absolute inset-0 border-2 border-white/20 bg-black/40 p-1 transform transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-[#BC002D]">
                <img
                  src="/team_img3.png"
                  alt="Anime character detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-[#BC002D] transform transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
