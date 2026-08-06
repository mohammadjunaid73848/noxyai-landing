'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FloatingGlassHeader } from '@/components/ui/floating-glass-header';
import { BlogPost } from '@/lib/supabase';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog/posts')
      .then((res) => res.json())
      .then((data) => {
        if (data.posts) setPosts(data.posts);
      })
      .catch((err) => console.error('Failed to load blog posts', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900 relative">
      {/* Floating Glass Header */}
      <FloatingGlassHeader />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-4 text-center max-w-4xl mx-auto space-y-4">
        <span className="bg-slate-100 text-slate-900 border border-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
          <BookOpen size={14} /> NoxyAI Blog & Insights
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Explore AI Workforce & Agentic Workflows
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Stay updated with technical guides, architecture deep-dives, and product announcements from NoxyAI.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        {loading ? (
          <div className="py-20 text-center text-slate-500 font-semibold">
            Loading articles...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 16:9 Thumbnail Image */}
                  <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden relative">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </Link>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <Calendar size={14} />
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 hover:text-slate-700 transition leading-snug">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-sm text-slate-900 hover:text-slate-700 transition flex items-center gap-1.5"
                  >
                    Read full article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-400 border-t border-slate-800 text-center text-sm">
        <p>© 2023-2026 NoxyAI, LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
