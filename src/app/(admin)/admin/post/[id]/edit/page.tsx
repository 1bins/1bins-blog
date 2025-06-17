import style from './edit.module.scss';
import classnames from 'classnames/bind';
import Editor from "@/app/(admin)/admin/post/write/components/Editor";

const cx = classnames.bind(style);

export default function AdminEditPage({ params } : { params: { id: string } }) {
  const { id } = params;

  return(
    <div className={cx('container')}>
      <Editor postId={id}/>
    </div>
  )
}