import React from 'react';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/supabase';
import { FloatingGlassHeader } from '@/components/ui/floating-glass-header';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900 relative">
      {/* Floating Glass Header */}
      <FloatingGlassHeader />

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 pt-32 pb-24">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 mb-8 transition"
        >
          <ArrowLeft size={16} /> Back to All Articles
        </Link>

        {/* Title & Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User size={14} />
              {post.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* 16:9 Thumbnail Image */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 mb-12 bg-slate-100">
          <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* HTML Article Content */}
        <div
          className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-950 prose-p:text-slate-700 prose-p:leading-relaxed prose-img:rounded-2xl prose-img:border prose-img:border-slate-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-400 border-t border-slate-800 text-center text-sm">
        <p>© 2023-2026 NoxyAI, LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
