'use client';

import style from './footer.module.scss';
import classnames from 'classnames/bind';
import { SiGithub } from "react-icons/si";
import {useDarkModeStore} from "@/store/darkModeStore";

const cx = classnames.bind(style);

export const Footer = () => {
  const { darkMode } = useDarkModeStore();

  return(
    <footer className={cx('footer')}>
      <ul className={cx('links')}>
        <li>
          <a href="https://github.com/1bins" target={"_blank"} title={"새 창으로 깃허브 열기"}>
            <SiGithub size={42} color={darkMode ? "#fff" : "#121212"} />
          </a>
        </li>
      </ul>
      <p className={cx('copyright')}>© 2025. <b>Wonbin Seo</b> all rights reserved.</p>
    </footer>
  )
}