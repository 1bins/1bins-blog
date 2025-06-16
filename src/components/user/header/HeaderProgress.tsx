import style from './header.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

export const HeaderProgress = ({
 progress
} : {
  progress: number
}) => {
  return(
    <div className={cx('progress-bar', { isMoved: progress > 0})}>
      <span style={{ 'width': `${progress}%` }}></span>
    </div>
  )
}