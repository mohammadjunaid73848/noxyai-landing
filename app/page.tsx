'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroFinancial from '@/components/ui/hero-financial';
import OrbitRotation from '@/components/ui/orbit-rotation';
import { PlusCard } from '@/components/ui/ruixen-bento-cards';
import { GradientBackground } from '@/components/ui/almoayyed';
import { FaAmazon, FaDiscord, FaShopify } from 'react-icons/fa';
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  Layers,
  Globe,
  Brain,
  Users,
  Calendar,
  FolderGit2,
  BookOpen,
  MessageSquare,
  TrendingUp,
  FileText,
  ChevronDown,
  Store,
  Boxes,
  Compass,
  Briefcase,
  Instagram
} from 'lucide-react';
import {
  AgentBuilderVideo,
  EvolveImages,
  CollaborateImages
} from '@/components/ui/hero-financial-utils/assets-index';

export default function Home() {
  // State for Multimodal Workflow Tabs in Collaborate Section
  const [activeTab, setActiveTab] = useState<'pages' | 'schedule' | 'project' | 'workspace'>('pages');

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is NoxyAI?',
      a: 'NoxyAI is your Chief Agent Operator (CAO) — a collaborative AI platform that hires, schedules, and manages autonomous agent teams to execute long-horizon tasks 24/7.'
    },
    {
      q: 'How do I use NoxyAI?',
      a: 'Simply describe your goal in one sentence. NoxyAI automatically configures names, roles, skills, and MCP tools for your agent team, allowing them to collaborate in real-time.'
    },
    {
      q: 'How much does NoxyAI cost?',
      a: 'NoxyAI offers a generous free tier for individuals. Premium and Enterprise plans unlock unlimited background agent execution, private team workspaces, and custom compute options.'
    },
    {
      q: 'What are compute credits?',
      a: 'Compute credits are tokens used when your AI agent workforce performs intensive reasoning, tool execution, multimodal processing, or large-scale data sweeps.'
    },
    {
      q: 'What is NoxyAI community?',
      a: 'A thriving global ecosystem of creators, developers, and prompt engineers sharing custom Agents, MCP Servers, and SKILLs in our open marketplace.'
    },
    {
      q: 'Is NoxyAI open source?',
      a: 'Yes, NoxyAI provides a Community Edition that you can self-host locally or deploy on your own private cloud infrastructure with full data ownership.'
    }
  ];

  const operateCards = [
    {
      title: 'Shopify / Amazon Operator',
      description: '"Autonomous agents monitor store metrics 24/7, reconcile inventories, and resolve customer support claims in real time."',
      icon: (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <FaShopify size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
            <FaAmazon size={20} />
          </div>
        </div>
      )
    },
    {
      title: 'The Discord Whisperer',
      description: '"Monitors server channels, auto-triages bug reports, and responds to community queries across messaging platforms."',
      icon: (
        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
          <FaDiscord size={20} />
        </div>
      )
    },
    {
      title: 'One-Sentence Setup',
      description: 'Names, roles, skills, and behaviors are set up automatically from a single sentence prompt.',
      icon: (
        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md">
          1
        </div>
      )
    },
    {
      title: '24/7 Autonomous Tasks',
      description: 'Hires, schedules, and reports on your entire AI workforce with zero online supervision required.',
      icon: (
        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-md">
          24/7
        </div>
      )
    }
  ];

  const useCases = [
    {
      icon: Briefcase,
      title: 'Job Application Agent Group',
      description: 'Anyone can build and team up with agent teammates into a group to deliver job searches, resume tailoring, and interview prep end to end.'
    },
    {
      icon: MessageSquare,
      title: 'Lenny\'s Podcast Product Building Insights',
      description: 'Summarize 299 transcripts with deep product management takeaways, action items, and structural frameworks.'
    },
    {
      icon: Compass,
      title: 'Understanding Videos',
      description: 'Understand complex videos without subtitles, extract key frames, and generate transcript summaries automatically.'
    },
    {
      icon: TrendingUp,
      title: 'Stock Trading Team',
      description: 'An agent group for stock trading that collaborates to analyze market signals, draft strategies, and surface key risks for better decision-making.'
    },
    {
      icon: BookOpen,
      title: 'Paper Summary Generation',
      description: 'An agent group that reads papers and produces structured summaries with core ideas, methods, and key takeaways for faster literature review.'
    },
    {
      icon: FileText,
      title: 'Meeting Summary',
      description: 'Converts meeting notes or transcripts into a clear recap with key decisions, action items, and owners for easy follow-up.'
    }
  ];

  return (
    <main className="min-h-screen bg-transparent w-full max-w-full overflow-x-hidden relative">
      {/* Moving Liquid Oil Paint Canvas (LobeHub style) */}
      <GradientBackground />

      {/* 1. Hero Section */}
      <HeroFinancial />

      {/* 2. OPERATE SECTION */}
      <section id="products" className="py-20 md:py-24 px-4 bg-white/40 backdrop-blur-md relative z-20 overflow-visible border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto overflow-visible">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-slate-100/80 text-slate-900 border border-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-xs">
              <Bot size={14} /> Operate
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 max-w-3xl mx-auto">
              You run the strategy. We run the agents.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto px-2 font-medium">
              Hires, schedules, and reports on your entire AI team for long-horizon task execution.
            </p>
          </div>

          {/* Plus Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-20">
            {operateCards.map((card, i) => (
              <PlusCard key={i} {...card} />
            ))}
          </div>

          {/* Restored Orbit Rotation Integrations Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-6 md:py-8 overflow-visible relative z-20">
            <div className="space-y-6 z-10">
              <span className="bg-slate-100/80 text-slate-900 border border-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
                <Globe size={14} /> IM & App Gateway
              </span>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-slate-950">
                Agents where you already work
              </h3>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                Bring all your agents under one roof. Connect NoxyAI directly to Vercel, Google Calendar, X, Notion, Supabase, Figma, OneDrive, YouTube, Slack, Gmail, and GitHub. More productivity, fewer tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2.5 font-semibold text-slate-900 text-sm md:text-base">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                  Instant Bi-Directional Sync
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-slate-900 text-sm md:text-base">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                  Zero-Latency Webhook Triggers
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-slate-900 text-sm md:text-base">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                  End-to-End Enterprise Encryption
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-slate-900 text-sm md:text-base">
                  <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                  Automated Context Routing
                </div>
              </div>
            </div>

            {/* Orbit Rotation Showcase Directly On Page */}
            <div className="flex justify-center items-center py-6 min-h-[380px] sm:min-h-[500px] relative z-30 overflow-visible">
              <OrbitRotation
                centerIcon={{ imageSrc: '/favicon.png', name: 'NoxyAI' }}
                orbitCount={3}
                orbitGap={6}
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CREATE SECTION */}
      <section id="create" className="py-20 md:py-24 px-4 bg-slate-50/40 backdrop-blur-md relative border-t border-slate-200/60 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-slate-100/80 text-slate-900 border border-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-xs">
              <Store size={14} /> Create
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 max-w-3xl mx-auto">
              Agents built for real work
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto px-2 font-medium">
              Build Agents fast with full control over their Skills and MCP tools.
            </p>
          </div>

          {/* Video Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 max-w-5xl mx-auto bg-slate-900 mb-12 md:mb-16">
            <video
              src={AgentBuilderVideo.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Highlights & Stats in Plus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <PlusCard
              title="One sentence to start"
              description="Names, roles, skills, and behaviors are set up automatically. Auto-configured by default for immediate use."
              icon={
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
              }
            />

            <PlusCard
              title="SKILLs Marketplace"
              description="Connect Agents to 333,276+ Skills you use every day in your workspace."
              icon={
                <div className="text-3xl md:text-4xl font-extrabold text-slate-950">
                  333,276+
                </div>
              }
            />

            <PlusCard
              title="MCP Servers"
              description="Unified intelligence across 84,898+ MCP servers and modalities under your control."
              icon={
                <div className="text-3xl md:text-4xl font-extrabold text-slate-950">
                  84,898+
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* 4. COLLABORATE SECTION */}
      <section id="collaborate" className="py-20 md:py-24 px-4 bg-white/40 backdrop-blur-md relative border-t border-slate-200/60 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-slate-100/80 text-slate-900 border border-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-xs">
              <Users size={14} /> Collaborate
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 max-w-3xl mx-auto">
              A new kind of collaboration
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto px-2 font-medium">
              Work with Agents as real teammates through auto team formation and parallel multi-task execution.
            </p>
          </div>

          {/* Multimodal Workflow Tabs */}
          <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center border-b border-slate-200/80 pb-6">
              {[
                { id: 'pages', label: 'Pages', icon: FileText },
                { id: 'schedule', label: 'Schedule', icon: Calendar },
                { id: 'project', label: 'Project', icon: FolderGit2 },
                { id: 'workspace', label: 'Workspace', icon: Layers }
              ].map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm flex items-center gap-2 transition cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200'
                    }`}
                  >
                    <IconComp size={16} /> {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {activeTab === 'pages' && (
                <>
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-950">Multimodal Pages</h3>
                    <p className="text-slate-700 text-base md:text-xl leading-relaxed font-medium">
                      Write and refine Pages with multiple Agents simultaneously, all in one place with shared Context.
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <img src={CollaborateImages.pages} alt="Pages" className="w-full max-w-xl h-auto object-contain hover:scale-105 transition duration-300 drop-shadow-xl" />
                  </div>
                </>
              )}
              {activeTab === 'schedule' && (
                <>
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-950">Autonomous Schedule</h3>
                    <p className="text-slate-700 text-base md:text-xl leading-relaxed font-medium">
                      Schedule tasks and let Agents handle the rest automatically while you sleep.
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <img src={CollaborateImages.schedule} alt="Schedule" className="w-full max-w-xl h-auto object-contain hover:scale-105 transition duration-300 drop-shadow-xl" />
                  </div>
                </>
              )}
              {activeTab === 'project' && (
                <>
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-950">Structured Projects</h3>
                    <p className="text-slate-700 text-base md:text-xl leading-relaxed font-medium">
                      Organize work by project, so everything stays structured and easy to track.
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <img src={CollaborateImages.project} alt="Project" className="w-full max-w-xl h-auto object-contain hover:scale-105 transition duration-300 drop-shadow-xl" />
                  </div>
                </>
              )}
              {activeTab === 'workspace' && (
                <>
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-950">Team Workspace</h3>
                    <p className="text-slate-700 text-base md:text-xl leading-relaxed font-medium">
                      A shared Workspace for teams to collaborate with Agents, with clear ownership and visibility.
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <img src={CollaborateImages.workspace} alt="Workspace" className="w-full max-w-xl h-auto object-contain hover:scale-105 transition duration-300 drop-shadow-xl" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVOLVE SECTION */}
      <section id="evolve" className="py-20 md:py-24 px-4 bg-slate-50/40 backdrop-blur-md relative border-t border-slate-200/60 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-slate-100/80 text-slate-900 border border-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-xs">
              <Brain size={14} /> Evolve
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 max-w-3xl mx-auto">
              Agents that evolve with you
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto px-2 font-medium">
              Continuous learning and white-box memory systems that adapt to your personal workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <div className="flex flex-col space-y-4 text-left">
              <div className="w-full py-2 flex justify-center">
                <img src={EvolveImages.personalMemory} alt="Personal Memory" className="w-full h-44 sm:h-52 object-contain hover:scale-105 transition duration-300 drop-shadow-md" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-slate-950">Personal Memory</h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">Builds a clear understanding of you and your preferences over time.</p>
            </div>

            <div className="flex flex-col space-y-4 text-left">
              <div className="w-full py-2 flex justify-center">
                <img src={EvolveImages.continualLearning} alt="Continual Learning" className="w-full h-44 sm:h-52 object-contain hover:scale-105 transition duration-300 drop-shadow-md" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-slate-950">Continual Learning</h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">Learns from how you work and continually refines execution paths.</p>
            </div>

            <div className="flex flex-col space-y-4 text-left">
              <div className="w-full py-2 flex justify-center">
                <img src={EvolveImages.adaptiveBehavior} alt="Adaptive Behavior" className="w-full h-44 sm:h-52 object-contain hover:scale-105 transition duration-300 drop-shadow-md" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-slate-950">Adaptive Behavior</h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">Acts at the right moment to automate complex repetitive actions.</p>
            </div>

            <div className="flex flex-col space-y-4 text-left">
              <div className="w-full py-2 flex justify-center">
                <img src={EvolveImages.whiteBox} alt="White-Box Memory" className="w-full h-44 sm:h-52 object-contain hover:scale-105 transition duration-300 drop-shadow-md" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-slate-950">White-Box Memory</h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">Structured, editable memory completely transparent to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. USE CASES SECTION WITH PLUS CARDS */}
      <section id="use-cases" className="py-20 md:py-24 px-4 bg-white/40 backdrop-blur-md relative border-t border-slate-200/60 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-slate-100/80 text-slate-900 border border-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-xs">
              <Boxes size={14} /> Real-World Use Cases
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 max-w-3xl mx-auto">
              Pre-built Agent Groups for immediate work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {useCases.map((uc, i) => {
              const IconComp = uc.icon;
              return (
                <PlusCard
                  key={i}
                  title={uc.title}
                  description={uc.description}
                  icon={
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md">
                      <IconComp size={20} />
                    </div>
                  }
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="resources" className="py-20 md:py-24 px-4 bg-slate-50/40 backdrop-blur-md relative border-t border-slate-200/60 z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
              Questions? Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 md:px-8 py-5 md:py-6 text-left font-bold text-base md:text-lg text-slate-900 flex justify-between items-center transition hover:bg-slate-50 cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-5 md:pb-6 text-slate-700 leading-relaxed border-t border-slate-100 pt-4 text-sm md:text-base font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA SECTION */}
      <section className="py-20 md:py-24 px-4 bg-[#000000] text-white text-center relative overflow-hidden z-20">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <img
            src="/logo-noxyai-white-custom.png"
            alt="NoxyAI Logo"
            className="h-10 md:h-12 w-auto mx-auto object-contain bg-transparent p-0"
          />
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight">
            Your Chief Agent Operator
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto px-2">
            Start using NoxyAI today and join thousands of super individuals operating 7x24 autonomous AI teams.
          </p>
          <div className="pt-6 flex justify-center">
            <a
              href="https://chat.noxyai.com"
              className="bg-white hover:bg-neutral-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2 shadow-lg cursor-pointer"
            >
              Get started for free <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOOTER - WITH NURATIX LOGO BRANDING */}
      <footer className="py-12 md:py-16 px-4 bg-[#000000] text-slate-400 border-t border-zinc-800 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-noxyai-white-custom.png"
                  alt="NoxyAI Logo"
                  className="h-8 md:h-10 w-auto bg-transparent p-0 object-contain"
                />
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  by
                  <a href="https://www.nuratix.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition inline-block">
                    <img src="https://www.nuratix.com/white-logo.png" alt="Nuratix" className="h-4 w-auto object-contain" />
                  </a>
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                NoxyAI is a collaborative agent platform for work and life.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/official_noxyai?igsh=Ymtxc3Y3czlha3R3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://chat.noxyai.com" className="hover:text-white transition">Product Chat</a></li>
                <li><a href="https://chat.noxyai.com/pricing" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://aboutus.noxyai.com" className="hover:text-white transition">About Us</a></li>
                <li><a href="https://support.noxyai.com" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <p>© 2023-2026 NoxyAI, LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
