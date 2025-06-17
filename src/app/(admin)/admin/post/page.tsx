import {supabase} from "@/lib/supabase";
import {PostCategory} from "@/app/(admin)/admin/post/components/PostCategory";
import {PostTable} from "@/app/(admin)/admin/post/components/PostTable";
import {PostButton} from "@/app/(admin)/admin/post/components/PostButton";
import style from './post.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

export default async function Page() {
  const { data: posts, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

  if (error) {
    // 에러 처리
    console.log(error);
    return(
      <div>에러 처리 필요!</div>
    )
  }

  return(
    <div className={cx('container', 'list-container')}>
      <div className={cx('left-side')}>
        <PostCategory />
      </div>
      <div className={cx('right-side')}>
        <PostTable posts={posts} />
        <PostButton />
      </div>
    </div>
  )
}