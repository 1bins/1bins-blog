import style from './adminTitle.module.scss';
import classnames from 'classnames/bind';

const cx= classnames.bind(style);

interface Props {
  title: string;
  description: string;
}

export const AdminTitleIndex = ({ title, description }: Props) => {
  return(
    <div className={cx('title-box')}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}