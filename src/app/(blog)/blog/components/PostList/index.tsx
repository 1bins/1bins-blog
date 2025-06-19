import style from './postItem.module.scss';
import classname from 'classnames/bind';
import Link from "next/link";
import Image from "next/image";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {PostData} from "@/types";

const cx = classname.bind(style);

export const PostList = ({ posts }: { posts: PostData[] }) => {
  return(
    <div className={cx('post-list-box')}>
      <ul>
        {posts.map(post => (
          <li
            key={post.id}
            className={cx('post-item')}
          >
            <article>
              <Link href={`/blog/post/${post.id}`}>
                <div className={cx('thumb-box')}>
                  <Image
                    width={433}
                    height={232}
                    src={post.thumbnailUrl || '/posts/thumbnail-error.jpg'}
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