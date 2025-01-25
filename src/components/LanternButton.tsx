// @ts-nocheck
import type React from "react"
import Link from "next/link"
// import AnimatedElement from "@/components/AnimatedElement"
const LanternButton: React.FC = (params: { url: string, title: string, title_jp: string }) => {
  const { url, title, title_jp } = params
//   console.log(link)
    return (
    <Link href={url} className="block w-40 h-56 relative no-underline">
      <div className="lantern-container w-full h-full relative group">
        <svg
          viewBox="0 0 100 140"
          className="w-full h-full filter drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl group-hover:brightness-110"
        >
          {/* Lantern body */}
          <path
            d="M10,30 Q50,10 90,30 L90,110 Q50,130 10,110 Z"
            fill="url(#lanternGradient)"
            className="transition-all duration-300 group-hover:filter group-hover:brightness-110"
          />
          {/* Lantern top */}
          <path d="M10,30 Q50,10 90,30 Q50,50 10,30" fill="#8B4513" />
          {/* Lantern bottom */}
          <path d="M10,110 Q50,130 90,110 Q50,90 10,110" fill="#8B4513" />
          {/* Lantern texture */}
          <path
            d="M20,40 Q50,20 80,40 M20,60 Q50,40 80,60 M20,80 Q50,60 80,80 M20,100 Q50,80 80,100"
            stroke="#00000015"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Lantern string */}
          <path d="M50,10 L50,0" stroke="#8B4513" strokeWidth="2" />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="lanternGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-bold text-red-800 mb-1 font-bold" style={{ fontFamily: "The Last Shuriken" }}>{title_jp}</span>
          <span className="text-sm font-medium text-red-800" style={{ fontFamily: "The Last Shuriken" }}>{title}</span>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-yellow-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"></div>
      </div>
    </Link>
  )
}

export default LanternButton

