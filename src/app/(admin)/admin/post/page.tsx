import style from './post.module.scss';
import classnames from 'classnames/bind';
import {PostData} from '@/types';
import {supabase} from "@/lib/supabase";

const cx = classnames.bind(style);

export default async function Page() {
  const { data: posts, error } = await supabase.from<'posts', PostData>('posts').select('*').order('created_at', { ascending: false });

  if (error) {
    // 에러 처리
    console.log(error);
    return(
      <div>에러 처리 필요!</div>
    )
  }

  return(
    <div className={cx('container', 'list-container')}>
      <div className={cx('category-wrap')}>
        <p className={cx('title')}>Category</p>
        <ul>
          <li className={cx('active')}>카테고리 1</li>
          <li>카테고리 2</li>
          <li>카테고리 3</li>
        </ul>
      </div>
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
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{new Date(`${post.created_at}`).toLocaleDateString('ko-KR', {year: 'numeric', month: 'long', day: 'numeric'})}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}