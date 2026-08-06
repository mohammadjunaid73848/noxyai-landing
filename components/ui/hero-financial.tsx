'use client'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import { TimelineAnimation } from '@/components/ui/hero-financial-utils/timeline-animation'
import { EcommerceDash } from '@/components/ui/hero-financial-utils/assets-index'
import { FloatingGlassHeader } from '@/components/ui/floating-glass-header'

export const HeroFinancial = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null)

  return (
    <section
      ref={timelineRef}
      className="min-h-screen text-[#1e293b] relative overflow-hidden flex flex-col items-center w-full bg-transparent"
    >
      {/* Universal Floating Glass Header */}
      <FloatingGlassHeader />

      {/* Hero Content */}
      <div className="relative z-10 text-center pt-28 md:pt-36 pb-16 px-4 flex flex-col gap-6 max-w-4xl mx-auto">
        <TimelineAnimation
          animationNum={1}
          timelineRef={timelineRef}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1]"
        >
          Understand the universe
        </TimelineAnimation>

        <TimelineAnimation
          animationNum={2}
          timelineRef={timelineRef}
          className="text-xl sm:text-2xl font-bold text-slate-850 tracking-tight"
        >
          Your Chief Agent Operator
        </TimelineAnimation>

        <TimelineAnimation
          animationNum={3}
          timelineRef={timelineRef}
          className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          NoxyAI organizes your agents into 7×24 operation. It hires, schedules, and reports on your entire AI team. You stay in charge — without staying online.
        </TimelineAnimation>

        <TimelineAnimation
          animationNum={4}
          timelineRef={timelineRef}
          className="flex justify-center pt-2"
        >
          <a
            href="https://chat.noxyai.com"
            className="bg-neutral-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Get started for free <ChevronRight size={20} />
          </a>
        </TimelineAnimation>
      </div>

      {/* Dashboard Preview Image */}
      <TimelineAnimation
        animationNum={5}
        timelineRef={timelineRef}
        className="w-full max-w-6xl px-4 pb-16 z-10"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white">
          <img
            src={EcommerceDash.src}
            alt={EcommerceDash.alt}
            className="w-full h-auto object-cover"
          />
        </div>
      </TimelineAnimation>
    </section>
  )
}

export default HeroFinancial
