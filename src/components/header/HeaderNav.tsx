"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './header.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

export const HeaderNav = () => {
  const pathname = usePathname();

  return(
    <div className={cx('nav-wrap')}>
      <nav>
        <h2 className={cx('blind')}>메뉴</h2>
        <ul>
          <li className={cx({ active: pathname.includes("/blog") })}>
            <Link href="/blog">1BINS</Link>
          </li>
          <li className={cx({ active: pathname === "/about" })}>
            {/*<Link href="/about">About</Link>*/}
            <a href="https://1bins-portfolio.vercel.app/" target={"blank"} title={"새 탭으로 열기"}>About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}