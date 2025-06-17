import style from './edit.module.scss';
import classnames from 'classnames/bind';
import Editor from "@/app/(admin)/admin/post/write/components/Editor";

const cx = classnames.bind(style);

export default async function AdminEditPage({ params } : { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return(
    <div className={cx('container')}>
      <Editor postId={id}/>
    </div>
  )
}