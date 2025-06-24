import style from './post.module.scss';
import classnames from 'classnames/bind';
import {SkeletonPost} from "@/components/Skeleton";

const cx = classnames.bind(style);

export default function Loading() {
  return(
    <div className={cx('container')}>
      <SkeletonPost/>
    </div>
  )
}