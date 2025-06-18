import style from './write.module.scss';
import classnames from 'classnames/bind';
import { EditorForm } from '../components/Editor/EditorForm';

const cx = classnames.bind(style);

export default function AdminPostPage() {
  return(
    <div className={cx('container')}>
      <EditorForm/>
    </div>
  )
}