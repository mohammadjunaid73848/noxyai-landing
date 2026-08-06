'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { X, MoreVertical } from 'lucide-react'

export function FloatingGlassHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* ---------- DESKTOP FLOATING GLASS HEADER ---------- */}
      <div className="fixed top-5 inset-x-0 z-50 hidden sm:flex justify-center px-4 pointer-events-none">
        <header className="pointer-events-auto flex items-center justify-between gap-4 w-full max-w-5xl px-6 py-3 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 dark:border-white/10 shadow-2xl transition-all duration-300">
          {/* Desktop Brand Logo */}
          <Link href="/" className="flex items-center gap-2 pl-2">
            <img src="/logo-noxyai-custom.png" alt="NoxyAI" className="h-8 w-auto object-contain max-h-8" />
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-3">
            <a
              href="https://chat.noxyai.com"
              className="px-4 py-2 text-sm font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-100/70 rounded-full transition"
            >
              Product Chat
            </a>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-100/70 rounded-full transition"
            >
              Blog
            </Link>
            <a
              href="https://chat.noxyai.com/pricing"
              className="px-4 py-2 text-sm font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-100/70 rounded-full transition"
            >
              Pricing
            </a>
          </nav>

          {/* Header Right CTA */}
          <div className="flex items-center gap-3 pr-1">
            <a
              href="https://chat.noxyai.com"
              className="bg-neutral-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-black transition shadow-md hover:shadow-lg cursor-pointer"
            >
              Get started
            </a>
          </div>
        </header>
      </div>

      {/* ---------- MOBILE FLOATING DUAL BAR & FULL SCREEN NAV ---------- */}
      <div className="fixed top-4 inset-x-4 z-50 flex sm:hidden items-center justify-between pointer-events-none">
        {/* Mobile Left Piece */}
        <div className="pointer-events-auto flex items-center gap-2.5 p-1.5 rounded-full bg-white/90 backdrop-blur-2xl border border-white/80 shadow-xl">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <MoreVertical size={20} />}
          </button>

          {/* Mobile Full Circle Logo */}
          <Link href="/" className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 bg-white p-0.5 shadow-xs flex items-center justify-center">
            <img src="/favicon.png" alt="NoxyAI Logo" className="w-full h-full object-contain rounded-full" />
          </Link>
        </div>

        {/* Mobile Right Piece */}
        <div className="pointer-events-auto p-1.5 rounded-full bg-white/90 backdrop-blur-2xl border border-white/80 shadow-xl">
          <a
            href="https://chat.noxyai.com"
            className="bg-neutral-900 text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-black transition shadow-md cursor-pointer block"
          >
            Get started
          </a>
        </div>
      </div>

      {/* Full Screen Mobile Navigation Bar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden bg-white/98 backdrop-blur-3xl p-6 flex flex-col justify-between text-slate-900 animate-in fade-in duration-200">
          <div className="pt-20 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
              <img src="/favicon.png" alt="NoxyAI" className="h-10 w-10 object-contain rounded-full border border-slate-200 p-1" />
              <span className="text-xl font-bold tracking-tight text-slate-900">NoxyAI</span>
            </div>

            <nav className="space-y-4 text-lg font-bold">
              <a
                href="https://chat.noxyai.com"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-xl hover:bg-slate-100 text-slate-800"
              >
                Product Chat
              </a>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-xl hover:bg-slate-100 text-slate-800"
              >
                Blog
              </Link>
              <a
                href="https://chat.noxyai.com/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-xl hover:bg-slate-100 text-slate-800"
              >
                Pricing
              </a>
            </nav>
          </div>

          <div className="space-y-4 pb-8 border-t border-slate-200 pt-6">
            <a
              href="https://chat.noxyai.com"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-neutral-900 text-white py-4 rounded-xl font-bold text-base shadow-lg text-center block"
            >
              Get started for free
            </a>
          </div>
        </div>
      )}
    </>
  )
}
