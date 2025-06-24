'use client';
import style from './errorFallback.module.scss';
import classnames from 'classnames/bind';
import {Button} from "@/components/Button";
import {useRouter} from "next/navigation";

const cx = classnames.bind(style);

export const ErrorFallback = () => {
  const router = useRouter();

  return(
    <div className={cx('container')}>
      <div className={cx('align-box')}>
        <p className={cx('title')}>404</p>
        <p className={cx('cont')}>게시글을 가져오는데 오류가 있습니다.
          <br />잠시 후 다시 시도해주세요😢</p>
        <Button
          onClick={() => router.back()}
        >뒤로 가기</Button>
      </div>
    </div>
  )
}