import style from './write.module.scss';
import classnames from 'classnames/bind';
import Editor from "@/app/(admin)/admin/post/write/components/Editor";

const cx = classnames.bind(style);

export default function AdminPostPage() {
  return(
    <div className={cx('container')}>
      <Editor/>
    </div>
  )
}