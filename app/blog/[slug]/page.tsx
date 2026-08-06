import React from 'react';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/supabase';
import { FloatingGlassHeader } from '@/components/ui/floating-glass-header';
import { ArrowLeft, Instagram } from 'lucide-react';
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

      {/* Main Article Container - RENDERS ONLY THE BLOG HTML CONTENT */}
      <article className="max-w-4xl mx-auto px-4 pt-32 pb-24">
        {/* Back to Articles Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 mb-8 transition"
        >
          <ArrowLeft size={16} /> Back to All Articles
        </Link>

        {/* HTML Article Content (Supports HTML5 Video, Canvas, WebGL, Interactive Embeds) */}
        <div
          className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-950 prose-p:text-slate-700 prose-p:leading-relaxed prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-video:rounded-2xl prose-video:w-full prose-video:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* FULL NOXYAI FOOTER AT THE BOTTOM */}
      <footer className="py-12 md:py-16 px-4 bg-[#000000] text-slate-400 border-t border-zinc-800 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 space-y-4">
              <img
                src="/logo-noxyai-white-custom.png"
                alt="NoxyAI Logo"
                className="h-8 md:h-10 w-auto bg-transparent p-0 object-contain"
              />
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
