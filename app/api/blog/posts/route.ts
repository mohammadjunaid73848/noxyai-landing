import { NextRequest, NextResponse } from 'next/server';
import { getPosts, supabase, BlogPost, PostStatus } from '@/lib/supabase';
import { verifyAdminToken } from '@/lib/auth';

let localPosts: BlogPost[] | null = null;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const includeAll = searchParams.get('all') === 'true';

  if (includeAll) {
    const token = req.cookies.get('noxy_admin_token')?.value;
    const isKeyVerified = req.cookies.get('noxy_open_key_verified')?.value === 'true';
    if (!token || !(await verifyAdminToken(token)) || !isKeyVerified) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const posts = localPosts ? (includeAll ? localPosts : localPosts.filter((p) => p.status === 'public')) : (await getPosts(includeAll));
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('noxy_admin_token')?.value;
    const isKeyVerified = req.cookies.get('noxy_open_key_verified')?.value === 'true';

    if (!token || !(await verifyAdminToken(token)) || !isKeyVerified) {
      return NextResponse.json({ error: 'Unauthorized: Admin authentication and OPEN_KEY verification required' }, { status: 401 });
    }

    const { title, slug, excerpt, content, thumbnail, author, status } = await req.json();

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
      status: (status as PostStatus) || 'public',
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString()
    };

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

    if (!localPosts) localPosts = await getPosts(true);
    localPosts = [newPost, ...localPosts];

    return NextResponse.json({ success: true, post: newPost });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to create blog post' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get('noxy_admin_token')?.value;
    const isKeyVerified = req.cookies.get('noxy_open_key_verified')?.value === 'true';

    if (!token || !(await verifyAdminToken(token)) || !isKeyVerified) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, title, slug, excerpt, content, thumbnail, status } = await req.json();

    if (!id || !title || !slug || !content) {
      return NextResponse.json({ error: 'ID, title, slug, and content are required' }, { status: 400 });
    }

    const updatedFields = {
      title,
      slug: slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      excerpt: excerpt || title,
      content,
      thumbnail,
      status: (status as PostStatus) || 'public'
    };

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(updatedFields)
        .eq('id', id)
        .select();

      if (!error && data) {
        return NextResponse.json({ success: true, post: data[0] });
      }
    }

    if (!localPosts) localPosts = await getPosts(true);
    localPosts = localPosts.map((p) => (p.id === id ? { ...p, ...updatedFields } : p));

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to update blog post' }, { status: 500 });
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

    if (!localPosts) localPosts = await getPosts(true);
    localPosts = localPosts.filter((p) => p.id !== id);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to delete post' }, { status: 500 });
  }
}
