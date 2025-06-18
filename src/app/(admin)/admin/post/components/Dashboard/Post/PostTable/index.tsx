'use client';

import style from './PostTable.module.scss';
import classnames from 'classnames/bind';
import {PostData} from "@/types";
import {useRouter} from "next/navigation";

const cx = classnames.bind(style);

interface PostTableProps {
  posts: PostData[];
}

export const PostTable = ({
  posts
}: PostTableProps) => {
  // ** variables
  const router = useRouter();

  return(
    <div className={cx('post-wrap')}>
      <table>
        <colgroup>
          <col width="10%"/>
          <col width="70%"/>
          <col width="20%"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="row">No.</th>
          <th scope="row">title</th>
          <th scope="row">date</th>
        </tr>
        </thead>
        <tbody>
        {posts.map(post => (
          <tr
            key={post.id}
            onClick={() => router.push(`/admin/post/${post.id}/edit`)}
          >
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{new Date(`${post.created_at}`).toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric'})}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}