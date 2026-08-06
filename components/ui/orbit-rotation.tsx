"use client"

import type React from "react"
import {
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaCloud,
  FaSlack,
  FaDiscord,
  FaTelegram,
  FaJira,
  FaTrello,
} from "react-icons/fa"
import {
  SiVercel,
  SiSupabase,
  SiFigma,
  SiYoutube,
  SiGmail,
} from "react-icons/si"

import { cn } from "@/lib/utils"

interface OrbitIcon {
  Icon: React.ComponentType<{ className?: string }>
  name: string
  color: string
}

interface OrbitRotationProps {
  centerIcon?: {
    imageSrc?: string
    name?: string
  }
  orbitCount?: number
  orbitGap?: number
  size?: "sm" | "md" | "lg"
  className?: string
}

// Icons in their official brand colors
const defaultIcons: OrbitIcon[][] = [
  // Inner orbit (4 icons) - Vercel, Google Calendar, X, Gmail
  [
    { Icon: SiVercel, name: "Vercel", color: "text-slate-900 dark:text-white" },
    { Icon: FaGoogle, name: "Google Calendar", color: "text-[#4285F4]" },
    { Icon: FaTwitter, name: "X", color: "text-slate-900 dark:text-white" },
    { Icon: SiGmail, name: "Gmail", color: "text-[#EA4335]" },
  ],
  // Middle orbit (5 icons) - Supabase, Figma, OneDrive, YouTube, Slack
  [
    { Icon: SiSupabase, name: "Supabase", color: "text-[#3ECF8E]" },
    { Icon: SiFigma, name: "Figma", color: "text-[#F24E1E]" },
    { Icon: FaCloud, name: "OneDrive", color: "text-[#0078D4]" },
    { Icon: SiYoutube, name: "YouTube", color: "text-[#FF0000]" },
    { Icon: FaSlack, name: "Slack", color: "text-[#ECB22E]" },
  ],
  // Outer orbit (5 icons) - GitHub, Discord, Telegram, Jira, Trello
  [
    { Icon: FaGithub, name: "GitHub", color: "text-[#24292E] dark:text-white" },
    { Icon: FaDiscord, name: "Discord", color: "text-[#5865F2]" },
    { Icon: FaTelegram, name: "Telegram", color: "text-[#26A5E4]" },
    { Icon: FaJira, name: "Jira", color: "text-[#0052CC]" },
    { Icon: FaTrello, name: "Trello", color: "text-[#0052CC]" },
  ],
]

export default function OrbitRotation({
  centerIcon = { imageSrc: "/favicon.png", name: "NoxyAI" },
  orbitCount = 3,
  size = "md",
  className,
}: OrbitRotationProps) {
  const containerSizeMap = {
    sm: "w-[300px] h-[300px]",
    md: "w-[360px] h-[360px] sm:w-[480px] sm:h-[480px]",
    lg: "w-[480px] h-[480px] sm:w-[600px] sm:h-[600px]",
  }

  // Pure black orbit lines placed FAR from the center logo
  const radiusMap = {
    sm: [65, 110, 155],
    md: [90, 160, 230], // Far from center logo
    lg: [110, 190, 270],
  }

  const centerSizeMap = {
    sm: "w-12 h-12",
    md: "w-14 h-14 sm:w-18 sm:h-18",
    lg: "w-18 h-18 sm:w-22 sm:h-22",
  }

  const iconSizeMap = {
    sm: "w-7 h-7 text-xs",
    md: "w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm",
    lg: "w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base",
  }

  const selectedRadius = radiusMap[size]
  const containerSize = containerSizeMap[size]
  const centerSize = centerSizeMap[size]
  const iconSize = iconSizeMap[size]

  return (
    <div
      className={cn(
        "relative flex items-center justify-center max-w-full overflow-visible my-4 scale-90 sm:scale-100 transition-transform duration-300",
        containerSize,
        className
      )}
    >
      {/* Full Size Circle Favicon in Center */}
      <div
        className={cn(
          "absolute z-30 rounded-full bg-white shadow-2xl border-2 border-black flex items-center justify-center overflow-hidden p-0 hover:scale-110 transition-transform duration-300",
          centerSize
        )}
        title={centerIcon.name}
      >
        <img
          src="/favicon.png"
          alt={centerIcon.name || "NoxyAI Logo"}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Pure Black Orbit Lines and Icons */}
      {Array.from({ length: Math.min(orbitCount, 3) }).map((_, orbitIndex) => {
        const radius = selectedRadius[orbitIndex]
        const iconsForOrbit = defaultIcons[orbitIndex] || []
        const duration = 25 + orbitIndex * 12
        const isClockwise = orbitIndex % 2 === 0

        return (
          <div key={orbitIndex} className="absolute inset-0 flex items-center justify-center overflow-visible">
            {/* Pure Black Orbit Circle Ring (Dashed & Solid, Far from Center Logo) */}
            <div
              className="absolute rounded-full border-2 border-black dark:border-white border-dashed pointer-events-none opacity-90 shadow-xs"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
              }}
            />

            {/* Rotating Container */}
            <div
              className="absolute inset-0 flex items-center justify-center overflow-visible"
              style={{
                animation: `orbit-spin ${duration}s linear infinite ${
                  isClockwise ? "normal" : "reverse"
                }`,
              }}
            >
              {iconsForOrbit.map((iconItem, iconIndex) => {
                const totalIcons = iconsForOrbit.length
                const angle = (iconIndex / totalIcons) * 360
                const radian = (angle * Math.PI) / 180
                const x = radius * Math.cos(radian)
                const y = radius * Math.sin(radian)

                const IconComponent = iconItem.Icon

                return (
                  <div
                    key={iconIndex}
                    className={cn(
                      "absolute z-40 rounded-full bg-white border-2 border-black shadow-lg flex items-center justify-center hover:scale-125 hover:shadow-2xl transition-all duration-200 cursor-pointer p-1.5",
                      iconSize
                    )}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    title={iconItem.name}
                  >
                    {/* Counter-rotation to keep icons upright */}
                    <div
                      style={{
                        animation: `orbit-spin ${duration}s linear infinite ${
                          isClockwise ? "reverse" : "normal"
                        }`,
                      }}
                    >
                      <IconComponent className={cn("w-4 h-4 sm:w-5 sm:h-5", iconItem.color)} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
