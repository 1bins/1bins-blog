import style from './PostCategory.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

export const PostCategory = () => {
  return(
    <div className={cx('category-wrap')}>
      <p className={cx('title')}>Category</p>
      <ul>
        <li className={cx('active')}>카테고리 1</li>
        <li>카테고리 2</li>
        <li>카테고리 3</li>
      </ul>
    </div>
  )
}