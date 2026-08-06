'use client';

import React, { useState, useEffect } from 'react';
import { BlogPost } from '@/lib/supabase';
import {
  Lock,
  Key,
  Upload,
  Plus,
  Trash2,
  FileCode,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  LogOut,
  Eye
} from 'lucide-react';

interface BlankImageMatch {
  index: number;
  fullTag: string;
  alt: string;
}

export default function AdminPage() {
  // Authentication & Security States
  const [authenticated, setAuthenticated] = useState(false);
  const [keyVerified, setKeyVerified] = useState(false);

  // Form inputs for Login & Key
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openKeyInput, setOpenKeyInput] = useState('');

  const [authError, setAuthError] = useState('');
  const [keyError, setKeyError] = useState('');
  const [loading, setLoading] = useState(false);

  // Blog Manager States
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeTab, setActiveTab] = useState<'manage' | 'create'>('create');

  // New Post Form
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [thumbnail, setThumbnail] = useState('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop');
  const [htmlContent, setHtmlContent] = useState(
`<div class="space-y-6">
  <p class="text-lg text-slate-700 leading-relaxed">
    Write your blog article here. You can include images with blank src and upload them below!
  </p>
  <img src="" alt="AI Guide" loading="lazy" width="1200" height="675" />
</div>`
  );

  const [blankImages, setBlankImages] = useState<BlankImageMatch[]>([]);
  const [statusMsg, setStatusMsg] = useState('');

  // Auto-generate slug from title
  useEffect(() => {
    if (title) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  }, [title]);

  // Parse HTML for blank <img> tags (<img ... src="" ... />)
  useEffect(() => {
    const imgRegex = /<img\s+[^>]*src=["']\s*["'][^>]*>|<img\s+[^>]*src(?!\s*=)[^>]*>/gi;
    const matches: BlankImageMatch[] = [];
    let match;
    let idx = 0;

    while ((match = imgRegex.exec(htmlContent)) !== null) {
      const fullTag = match[0];
      const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
      const alt = altMatch ? altMatch[1] : `Image ${idx + 1}`;
      matches.push({ index: idx, fullTag, alt });
      idx++;
    }

    setBlankImages(matches);
  }, [htmlContent]);

  // Fetch posts on login
  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog/posts');
      const data = await res.json();
      if (data.posts) setPosts(data.posts);
    } catch (e) {
      console.error('Failed to fetch posts', e);
    }
  };

  useEffect(() => {
    if (authenticated && keyVerified) {
      fetchPosts();
    }
  }, [authenticated, keyVerified]);

  // Handle Admin Login (Restricted by ADMIN_EMAIL env in backend)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setAuthError(data.error || 'Login failed');
      } else {
        setAuthenticated(true);
      }
    } catch (err: any) {
      setAuthError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  // Handle Open Key Validation (Restricted by OPEN_KEY env in backend)
  const handleVerifyKey = async (e: React.FormEvent) => {
    e.preventDefault();
    setKeyError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/verify-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ openKey: openKeyInput })
      });

      const data = await res.json();

      if (!res.ok) {
        setKeyError(data.error || 'Key verification failed');
      } else {
        setKeyVerified(true);
      }
    } catch (err: any) {
      setKeyError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  // Upload Thumbnail Image (Enforces 16:9 ratio preview)
  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload-image', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.url) {
        setThumbnail(data.url);
        setStatusMsg('Thumbnail uploaded successfully!');
      }
    } catch (err) {
      alert('Thumbnail upload failed');
    } finally {
      setLoading(false);
    }
  };

  // Automatically Replace Blank <img> Tag src="" with Uploaded Image URL
  const handleBlankImageUpload = async (file: File, targetTag: string) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload-image', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (data.url) {
        // Replace empty src="" in targetTag with data.url
        let updatedTag = targetTag.replace(/src=["']\s*["']/i, `src="${data.url}"`);
        if (!updatedTag.includes('src=')) {
          updatedTag = targetTag.replace('<img', `<img src="${data.url}"`);
        }

        const newHtml = htmlContent.replace(targetTag, updatedTag);
        setHtmlContent(newHtml);
        setStatusMsg(`Image uploaded and blank <img> tag replaced automatically!`);
      }
    } catch (err) {
      alert('Image upload failed');
    } finally {
      setLoading(false);
    }
  };

  // Publish New Blog Post
  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content: htmlContent,
          thumbnail,
          author: 'NoxyAI Admin'
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusMsg(`Error: ${data.error}`);
      } else {
        setStatusMsg('Blog post published successfully!');
        setTitle('');
        setExcerpt('');
        fetchPosts();
        setActiveTab('manage');
      }
    } catch (err: any) {
      setStatusMsg('Failed to publish post');
    } finally {
      setLoading(false);
    }
  };

  // Delete Post
  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await fetch(`/api/blog/posts?id=${id}`, { method: 'DELETE' });
      fetchPosts();
    } catch (e) {
      alert('Delete failed');
    }
  };

  // SCREEN 1: ADMIN LOGIN (EMAIL + PASSWORD ONLY, NO SIGNUP)
  if (!authenticated) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
              <Lock size={28} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Admin Gateway</h1>
            <p className="text-sm text-slate-400">Enter your credentials to continue</p>
          </div>

          {authError && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@noxyai.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-white transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Validating...' : 'Log in as Admin'} <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-center text-xs text-slate-500">
            Protected area. Email restricted by <code className="text-slate-400">ADMIN_EMAIL</code> env.
          </p>
        </div>
      </main>
    );
  }

  // SCREEN 2: OPEN KEY PROMPT (KEY RESTRICTION)
  if (!keyVerified) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Key size={28} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Security Check</h1>
            <p className="text-sm text-slate-400">Enter <code className="text-amber-400">OPEN_KEY</code> to unlock editor permissions</p>
          </div>

          {keyError && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              {keyError}
            </div>
          )}

          <form onSubmit={handleVerifyKey} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                OPEN_KEY Passphrase
              </label>
              <input
                type="password"
                required
                value={openKeyInput}
                onChange={(e) => setOpenKeyInput(e.target.value)}
                placeholder="Enter OPEN_KEY..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400 transition font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Verifying Key...' : 'Unlock Admin Editor'} <CheckCircle size={16} />
            </button>
          </form>
        </div>
      </main>
    );
  }

  // SCREEN 3: BLOG EDITOR & CONTENT MANAGER
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-30 bg-slate-950 text-white px-6 py-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="NoxyAI" className="h-8 w-8 rounded-full border border-slate-700 p-0.5" />
            <span className="font-bold text-lg tracking-tight">NoxyAI Admin Studio</span>
            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-mono border border-emerald-500/30">
              OPEN_KEY VERIFIED
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/blog"
              target="_blank"
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
            >
              <Eye size={14} /> View Public Blog
            </a>
            <button
              onClick={() => {
                setAuthenticated(false);
                setKeyVerified(false);
              }}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
            >
              <LogOut size={14} /> Exit
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'create'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Plus size={16} /> Create New Blog Post
          </button>
          <button
            onClick={() => setActiveTab('manage')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'manage'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <FileCode size={16} /> Manage Posts ({posts.length})
          </button>
        </div>

        {statusMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-sm font-semibold flex items-center gap-2">
            <CheckCircle size={18} className="text-emerald-600" />
            {statusMsg}
          </div>
        )}

        {/* TAB 1: CREATE POST FORM WITH BLANK IMAGE DETECTION */}
        {activeTab === 'create' && (
          <form onSubmit={handleCreatePost} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Post Meta & Title</h2>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Post Title
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Introducing NoxyAI Chief Agent Operator"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="e.g. introducing-noxyai-cao"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-700 focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Post Excerpt
                  </label>
                  <textarea
                    rows={2}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Brief summary of the article..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              {/* HTML Code Editor */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileCode size={20} /> HTML Code Content Editor
                  </h2>
                  <span className="text-xs text-slate-500 font-mono">HTML Format Supported</span>
                </div>

                <textarea
                  rows={14}
                  required
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                  className="w-full p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 bg-slate-50 leading-relaxed focus:outline-none focus:border-slate-900"
                />

                {/* AUTOMATIC BLANK IMAGE DETECTOR & AUTO-UPLOADER */}
                {blankImages.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                      <AlertCircle size={18} className="text-amber-600" />
                      Detected {blankImages.length} Blank &lt;img src=""&gt; Tag(s)! Upload to replace automatically:
                    </div>

                    <div className="space-y-2">
                      {blankImages.map((bImg, i) => (
                        <div key={i} className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white rounded-lg border border-amber-200 text-xs">
                          <code className="font-mono text-slate-700 truncate max-w-xs">{bImg.fullTag}</code>
                          <label className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-3 py-1.5 rounded-lg cursor-pointer transition flex items-center gap-1">
                            <Upload size={14} /> Upload Image for Tag #{i + 1}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const f = e.target.files?.[0];
                                if (f) handleBlankImageUpload(f, bImg.fullTag);
                              }}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar: 16:9 Thumbnail & Publish Button */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <ImageIcon size={18} /> 16:9 Aspect Ratio Thumbnail
                </h3>

                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                  <img src={thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                    16:9 Aspect
                  </span>
                </div>

                <label className="block w-full py-3 rounded-xl border border-dashed border-slate-300 text-center text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer">
                  <Upload size={16} className="inline mr-1.5" /> Upload 16:9 Thumbnail Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-base hover:bg-black transition shadow-xl cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Publishing...' : 'Publish Blog Post'}
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: MANAGE EXISTING POSTS */}
        {activeTab === 'manage' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 font-bold text-slate-900 text-base">
              Published Blog Posts ({posts.length})
            </div>

            <div className="divide-y divide-slate-200">
              {posts.map((post) => (
                <div key={post.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition">
                  <div className="flex items-center gap-4">
                    <img src={post.thumbnail} alt={post.title} className="w-24 h-14 object-cover rounded-lg border border-slate-200 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{post.title}</h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">/blog/{post.slug}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="px-3.5 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold flex items-center gap-1.5"
                    >
                      <Eye size={14} /> Preview
                    </a>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="px-3.5 py-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
