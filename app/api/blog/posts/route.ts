import { NextRequest, NextResponse } from 'next/server';
import { getPosts, supabase, BlogPost } from '@/lib/supabase';
import { verifyAdminToken } from '@/lib/auth';

let localPosts: BlogPost[] | null = null;

export async function GET() {
  const posts = localPosts || (await getPosts());
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('noxy_admin_token')?.value;
    const isKeyVerified = req.cookies.get('noxy_open_key_verified')?.value === 'true';

    if (!token || !(await verifyAdminToken(token)) || !isKeyVerified) {
      return NextResponse.json({ error: 'Unauthorized: Admin authentication and OPEN_KEY verification required' }, { status: 401 });
    }

    const { title, slug, excerpt, content, thumbnail, author } = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Title, slug, and content are required' }, { status: 400 });
    }

    const newPost: BlogPost = {
      id: `${Date.now()}`,
      slug: slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      title,
      excerpt: excerpt || title,
      content,
      thumbnail: thumbnail || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      author: author || 'NoxyAI Admin',
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString()
    };

    // Try Supabase insert if configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .insert([newPost])
          .select();
        if (!error && data) {
          return NextResponse.json({ success: true, post: data[0] });
        }
      } catch (e) {
        console.warn('Supabase post insert failed, using memory store');
      }
    }

    // Fallback in-memory insert
    if (!localPosts) localPosts = await getPosts();
    localPosts = [newPost, ...localPosts];

    return NextResponse.json({ success: true, post: newPost });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to create blog post' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get('noxy_admin_token')?.value;
    const isKeyVerified = req.cookies.get('noxy_open_key_verified')?.value === 'true';

    if (!token || !(await verifyAdminToken(token)) || !isKeyVerified) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      await supabase.from('blog_posts').delete().eq('id', id);
    }

    if (!localPosts) localPosts = await getPosts();
    localPosts = localPosts.filter((p) => p.id !== id);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to delete post' }, { status: 500 });
  }
}
