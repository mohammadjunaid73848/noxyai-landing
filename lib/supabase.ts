import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

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
    console.warn('Supabase query error', err);
  }
  return [];
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
    console.warn('Supabase getPostBySlug error', err);
  }
  return null;
}
