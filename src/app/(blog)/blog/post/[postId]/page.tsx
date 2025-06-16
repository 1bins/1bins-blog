import { MdOutlineCalendarMonth } from "react-icons/md";
import {supabase} from "@/lib/supabase";
import {notFound} from "next/navigation";
import style from './post.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style);

async function Post({ postId } : { postId: string }) {
  const { data: posts, error } = await supabase.from('posts').select('*').eq('id', Number(postId));

  if (error) {
    // 에러 처리
    return(
      <div>에러 처리중...</div>
    );
  }

  if (!posts || posts.length === 0) {
    notFound()
  }

  return(
    <>
      <div className={cx('post-header')}>
        <h3 className={cx('title')}>{posts[0].title}</h3>
        <p className={cx('category')}>{posts[0].category}</p>
        <p className={cx('date')}>
          <MdOutlineCalendarMonth color="#999" />
          <span>{new Date(`${posts[0].created_at}`).toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
        </p>
      </div>
      <div className="post-body">
        {posts[0].content}
      </div>
    </>
  )
}

export default async function Page({
                                     params
                                   }: {
  params: Promise<{ postId: string }>
}) {
  const { postId } = await params;

  return(
    <article className={cx('container')}>
      <Post postId={postId} />
    </article>
  )
}