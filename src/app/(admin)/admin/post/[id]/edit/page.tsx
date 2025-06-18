import style from './edit.module.scss';
import classnames from 'classnames/bind';
import {EditorForm} from "@/app/(admin)/admin/post/components/Editor/EditorForm";

const cx = classnames.bind(style);

export default async function AdminEditPage({ params } : { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return(
    <div className={cx('container')}>
      <EditorForm postId={id}/>
    </div>
  )
}