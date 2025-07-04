import style from './skeleton.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

export const Skeleton = () => {
  return(
    <div className={cx('skeleton', 'list')}>
      <div className={cx('thumbnail')}></div>
      <div className={cx('content-box')}>
        <div className={cx('category')}></div>
        <div className={cx('title')}></div>
        <div className={cx('date')}></div>
      </div>
    </div>
  )
}

export const SkeletonList = ({ count }: { count: number }) => {
  return(
    <div className={cx('skeleton-list')}>
      {new Array(count).fill(null).map((_, index) => (
        <Skeleton key={index}/>
      ))}
    </div>
  )
}

export const SkeletonPost = () => {
  return(
    <div className={cx('skeleton', 'post')}>
      <div className={cx('title')}></div>
      <div className={cx('category')}></div>
      <div className={cx('date')}></div>
      <div className={cx('content-box')}>
        <div className={cx('content')}></div>
      </div>
    </div>
  )
}

export const SkeletonProjectContent = () => {
  return(
    <div className={cx('skeleton', 'project')}>
      {
        new Array(3).fill('').map((_, idx) => (
          <div
            className={cx('item')}
            key={idx}
          >
            <div className={cx('title')}></div>
            <div className={cx('content')}></div>
          </div>
        ))
      }
    </div>
  )
}