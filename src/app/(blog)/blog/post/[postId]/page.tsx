import style from './post.module.scss';
import classnames from "classnames/bind";
import { PostDetail } from "@/app/(blog)/blog/post/[postId]/components/PostDetail";
import { supabase } from "@/lib/supabase";
import { Metadata } from "next";

const cx = classnames.bind(style);

type Props = {
  params: Promise<{ postId: string }>
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { postId } = await params;

  const { data: post, error } = await supabase
    .from('posts')
    .select('title')
    .eq('id', Number(postId))
    .single();

  if (error || !post) {
    return {
      title: '게시글을 찾을 수 없습니다',
      openGraph: {
        title: '게시글 없음',
      }
    }
  }

  return {
    title: post.title,
    openGraph: {
      title: post.title ?? '서원빈 개발 블로그'
    }
  }
}

export default async function Page({ params }: Props) {
  const { postId } = await params;

  return (
    <article className={cx('container')}>
      <PostDetail postId={postId} />
    </article>
  )
}