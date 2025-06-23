'use client';

import style from './backButton.module.scss';
import classnames from 'classnames/bind';
import {Button} from "@/components/Button";
import {IoMdArrowRoundBack} from "react-icons/io";
import {useRouter} from "next/navigation";

const cx = classnames.bind(style);

export const BackButton = () => {
  // ** state
  const router = useRouter();

  return(
    <div className={cx('post-button')}>
      <Button
        className={cx('circle')}
        onClick={() => router.push('/blog')}
      >
        <IoMdArrowRoundBack size={18}/>
      </Button>
    </div>
  )
}