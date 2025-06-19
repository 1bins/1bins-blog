import {supabase} from "@/lib/supabase";
import style from './blog.module.scss';
import classnames from 'classnames/bind';
import {PostItem} from "@/app/(blog)/blog/components/PostItem";

const cx = classnames.bind(style);

export default async function Home() {
  const { data: posts, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

  if (error) {
    // 에러 처리
    console.log(error);
    return(
      <div>에러 처리 필요!</div>
    )
  }

  return (
    <div className={cx('container')}>
      <div className={cx('post-list')}>
        <ul>
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
