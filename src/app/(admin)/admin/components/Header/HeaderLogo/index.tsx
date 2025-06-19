import style from './HeaderLogo.module.scss';
import classnames from 'classnames/bind';
import Link from "next/link";
import Image from "next/image";

const cx = classnames.bind(style);

export const AdminHeaderLogo = () => {
  return(
    <div className={cx('logo-box')}>
      <h1>
        <Link href="/admin">
          <Image
            src="/admin-logo.png"
            width={108}
            height={38}
            alt="관리자페이지 로고 이미지"
          />
        </Link>
      </h1>
    </div>
  )
}