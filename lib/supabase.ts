import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sfthmttafytppihsfzai.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type PostStatus = 'public' | 'draft' | 'unlisted';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: string;
  status: PostStatus;
  published_at: string;
  created_at: string;
}

// Memory fallback store
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'welcome-to-noxyai-cao',
    title: 'Welcome to NoxyAI: The Era of Autonomous AI Teams',
    excerpt: 'Discover how NoxyAI operates your agent workforce 24/7 with long-horizon execution and zero online supervision.',
    content: `<div class="space-y-6">
  <p class="text-lg text-slate-700 leading-relaxed">
    NoxyAI introduces a groundbreaking shift in AI collaboration — moving from simple single-prompt chatbots to full <strong>Chief Agent Operator (CAO)</strong> workforce orchestration.
  </p>
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" alt="AI Guide" loading="lazy" width="1200" height="675" class="rounded-2xl border border-slate-200 shadow-lg my-6" />
  <h2 class="text-2xl font-bold text-slate-900">How NoxyAI Works</h2>
  <p class="text-slate-600 leading-relaxed">
    By providing a single sentence goal, NoxyAI automatically provisions agent names, roles, skills, and Model Context Protocol (MCP) integrations to get straight to work.
  </p>
</div>`,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    author: 'NoxyAI Team',
    status: 'public',
    published_at: '2026-03-05T12:00:00Z',
    created_at: '2026-03-05T12:00:00Z'
  }
];

export async function getPosts(includeAllStatus: boolean = false): Promise<BlogPost[]> {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      let query = supabase.from('blog_posts').select('*').order('published_at', { ascending: false });
      if (!includeAllStatus) {
        query = query.eq('status', 'public');
      }
      const { data, error } = await query;
      if (!error && data) return data as BlogPost[];
    }
  } catch (err) {
    console.warn('Supabase not reachable, using memory store fallback');
  }
  return includeAllStatus ? mockBlogPosts : mockBlogPosts.filter((p) => p.status === 'public');
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();
      if (!error && data) return data as BlogPost;
    }
  } catch (err) {
    console.warn('Supabase getPostBySlug fallback');
  }
  const posts = await getPosts(true);
  return posts.find((p) => p.slug === slug) || null;
}
