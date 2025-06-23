'use client';

import style from './header.module.scss';
import classnames from 'classnames/bind';
import {useDarkModeStore} from "@/store/darkModeStore";
import {TbSun} from "react-icons/tb";
import {FiGithub, FiMoon} from "react-icons/fi";
import {useEffect} from "react";

const cx = classnames.bind(style);

export const HeaderAdditional = () => {
  // ** state
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-color-mode', 'dark');
    } else {
      document.body.setAttribute('data-color-mode', 'light');
    }
  }, [darkMode])

  return(
    <div className={cx('add-wrap')}>
      <ul>
        <li className={cx('dark')}>
          <
            button type="button"
            onClick={toggleDarkMode}
          >
            {
              darkMode ?
                <FiMoon size="18" color="#fff" />
                :
                <TbSun size="18" color="#000" />
            }
          </button>
        </li>
        <li className={cx('github')}>
          <a href="https://github.com/1bins" target="_blank" title="새 탭으로 열기">
            <FiGithub size="18" color={darkMode ? '#fff' : '#000'} />
          </a>
        </li>
      </ul>
    </div>
  )
}