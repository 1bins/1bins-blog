import style from './post.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function Post() {
  return(
    <article className={cx('container')}>
      <div className={cx('post-header')}>

      </div>
      <div className="post-body">

      </div>
    </article>
  )
}