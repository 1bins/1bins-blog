import Link from 'next/link';
import {supabase} from "@/lib/supabase";
import Image from "next/image";
import { MdOutlineCalendarMonth } from "react-icons/md";
import style from './blog.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

async function PostList() {
  const { data: posts, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

  if (error) {
    // 에러 처리
    console.log(error);
    return(
      <div>에러 처리 필요!</div>
    )
  }

  return(
    <div className={cx('post-list')}>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <article>
              <Link href={`/blog/post/${post.id}`}>
                <div className={cx('thumb-box')}>
                  <Image
                    width={433}
                    height={232}
                    src={post.thumbnailUrl || '/err_no_thumb.jpg'}
                    alt={`${post.title} 썸네일 이미지`}
                  />
                </div>
                <div className={cx('cont-box')}>
                  <p className={cx('category')}>{post.category}</p>
                  <p className={cx('title')}>{post.title}</p>
                  <p className={cx('date')}>
                    <MdOutlineCalendarMonth color="#999" />
                    <span>{new Date(`${post.created_at}`).toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                  </p>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function Home() {
  return (
    <div className={cx('container')}>
      <PostList />
    </div>
  );
}
