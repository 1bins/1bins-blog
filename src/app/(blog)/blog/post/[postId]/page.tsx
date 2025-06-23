import style from './post.module.scss';
import classnames from "classnames/bind";
import {PostDetail} from "@/app/(blog)/blog/post/[postId]/components/PostDetail";

const cx = classnames.bind(style);

export default async function Page({
  params
}: {
  params: Promise<{ postId: string }>
}) {
  const { postId } = await params;

  return(
    <article className={cx('container')}>
      <PostDetail postId={postId} />
    </article>
  )
}