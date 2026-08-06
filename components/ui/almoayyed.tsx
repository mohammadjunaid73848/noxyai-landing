"use client"

import React from "react"

// Animated Liquid Oil Paint Canvas with Rich Grain Noise Texture
export function GradientBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[#f4effc] ${className}`}
    >
      {/* Moving Oil Paint Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1: Lavender & Deep Purple */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[85vw] h-[85vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[80px] md:blur-[110px] opacity-90 animate-oil-blob-1"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(192, 132, 252, 0.55) 45%, rgba(233, 213, 255, 0) 75%)"
          }}
        />

        {/* Blob 2: Rose Pink & Magenta */}
        <div
          className="absolute top-[5%] -right-[15%] w-[85vw] h-[85vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[80px] md:blur-[110px] opacity-85 animate-oil-blob-2"
          style={{
            background: "radial-gradient(circle, rgba(244, 114, 182, 0.85) 0%, rgba(236, 72, 153, 0.5) 50%, rgba(251, 207, 232, 0) 75%)"
          }}
        />

        {/* Blob 3: Periwinkle & Cyan */}
        <div
          className="absolute top-[40%] -left-[15%] w-[90vw] h-[90vw] max-w-[1100px] max-h-[1100px] rounded-full blur-[90px] md:blur-[120px] opacity-90 animate-oil-blob-3"
          style={{
            background: "radial-gradient(circle, rgba(129, 140, 248, 0.8) 0%, rgba(147, 197, 253, 0.6) 45%, rgba(224, 231, 255, 0) 80%)"
          }}
        />

        {/* Blob 4: Fuchsia Glow */}
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[950px] max-h-[950px] rounded-full blur-[80px] md:blur-[110px] opacity-85 animate-oil-blob-4"
          style={{
            background: "radial-gradient(circle, rgba(232, 121, 249, 0.8) 0%, rgba(192, 132, 252, 0.45) 50%, rgba(250, 232, 255, 0) 80%)"
          }}
        />
      </div>

      {/* Prominent High-Density Grain & Oil Paint Stipple Noise Texture Overlay */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-65 mix-blend-overlay pointer-events-none"
      >
        <filter id="oil-paint-heavy-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.95"
            numOctaves="5"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0.1" />
        </filter>
        <rect width="100%" height="100%" filter="url(#oil-paint-heavy-noise)" />
      </svg>
    </div>
  )
}
