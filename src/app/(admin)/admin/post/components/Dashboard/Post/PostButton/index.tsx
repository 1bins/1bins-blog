'use client';

import {useRouter} from 'next/navigation';
import style from './PostButton.module.scss';
import classnames from 'classnames/bind';
import {Button} from "@/components/Button";

const cx = classnames.bind(style);

export const PostButton = () => {
  // ** variables
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/admin/post/write');
  }

  return(
    <div className={cx('button-box')}>
      <Button onClick={handleButtonClick}>새 글 작성</Button>
    </div>
  )
}