"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`dark:text-white text-zinc-900 size-5 sm:size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3" />
    <PlusIcon className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3" />
    <PlusIcon className="absolute -bottom-2.5 -left-2.5 sm:-bottom-3 sm:-left-3" />
    <PlusIcon className="absolute -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3" />
  </>
)

export const PlusCard: React.FC<{
  className?: string
  title?: string
  description?: string
  icon?: React.ReactNode
  imageSrc?: string
  children?: React.ReactNode
  href?: string
}> = ({
  className = "",
  title,
  description,
  icon,
  imageSrc,
  children,
  href
}) => {
  const content = (
    <div
      className={cn(
        "relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-xl p-6 md:p-8 bg-white dark:bg-zinc-950 min-h-[180px]",
        "flex flex-col justify-between hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors duration-300 shadow-xs hover:shadow-md",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-3 w-full">
        {icon && <div className="mb-3">{icon}</div>}
        {imageSrc && (
          <div className="w-full flex justify-center py-2 mb-3">
            <img src={imageSrc} alt={title || "Card image"} className="w-full h-36 md:h-44 object-contain" />
          </div>
        )}
        {title && (
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}

const defaultCardContents = [
  {
    title: "The 500-Issue Sweep",
    description:
      "I had 500 open issues. My CAO dispatched 50 agents. I went to bed and woke up to 500 closed PRs with clean code.",
  },
  {
    title: "Shopify / Amazon Operator",
    description:
      "Autonomous agents monitor store metrics 24/7, reconcile inventories, and resolve customer support claims in real time.",
  },
  {
    title: "The Discord Whisperer",
    description:
      "Monitors server channels across messaging platforms, auto-triages bug reports, and responds to community queries effortlessly.",
  },
  {
    title: "One-Sentence Agent Setup",
    description:
      "Describe your goal in one sentence. NoxyAI automatically configures names, roles, skills, and tools for your team.",
  },
  {
    title: "24/7 Autonomous Execution",
    description:
      "Hires, schedules, and reports on your entire AI workforce with zero online supervision required.",
  },
]

export default function RuixenBentoCards() {
  return (
    <section className="bg-transparent my-6">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-5">
          <PlusCard {...defaultCardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...defaultCardContents[1]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...defaultCardContents[2]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...defaultCardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...defaultCardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>
      </div>
    </section>
  )
}
