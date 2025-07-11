import style from './postDetail.module.scss';
import classnames from 'classnames/bind';
import {supabase} from "@/lib/supabase";
import {notFound} from "next/navigation";
import {MdOutlineCalendarMonth} from "react-icons/md";
import MarkdownPreviewClient from "@/app/(blog)/blog/post/[postId]/MarkdownPreviewClient";
import {BackButton} from "@/app/(blog)/blog/post/[postId]/components/BackButton";
import {ErrorFallback} from "@/app/(blog)/blog/post/[postId]/components/ErrorFallback";

const cx = classnames.bind(style);

export const PostDetail = async ({ postId } : { postId: string }) => {
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', Number(postId))
    .single();

  console.log(post);

  if (error) {
    // 에러 처리
    return <ErrorFallback />;
  }

  if (post === null) {
    notFound()
  }

  return(
    <>
      <div className={cx('post-header')}>
        <h3 className={cx('title')}>{post.title}</h3>
        <p className={cx('category')}>{post.category}</p>
        <p className={cx('date')}>
          <MdOutlineCalendarMonth color="#999" />
          <span>{new Date(`${post.created_at}`).toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
        </p>
      </div>
      <div className={cx('post-body')}>
        <MarkdownPreviewClient source={post.content}/>
        <aside>
          <BackButton/>
        </aside>
      </div>
    </>
  )
}