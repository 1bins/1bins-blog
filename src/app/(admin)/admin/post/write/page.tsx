import style from './write.module.scss';
import classnames from 'classnames/bind';
import WriteEditor from "@/app/(admin)/admin/post/write/components/WriteEditor";

const cx = classnames.bind(style);

export default function AdminPostPage() {
  return(
    <div className={cx('container')}>
      <WriteEditor/>
    </div>
  )
}