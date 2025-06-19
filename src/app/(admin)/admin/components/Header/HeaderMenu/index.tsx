'use client';

import style from './adminHeaderMenu.module.scss';
import classnames from 'classnames/bind';
import {useState} from "react";
import Link from "next/link";
import {AdminMenu} from "@/configs/configs";

const cx = classnames.bind(style);

export const AdminHeaderMenu = () => {
  // ** state
  const [activeMenu, setActiveMenu] = useState(0);

  // ** variables
  const handleMenuClick = (idx: number) => {
    setActiveMenu(idx);
  }

  return(
    <div className={cx('nav-wrap')}>
      <nav>
        <h2 className={cx('blind')}>관리자 메뉴</h2>
        <ul>
          {AdminMenu.map((menu, idx) => {
            const Icon = menu.icon;
            return(
              (
                <li
                  key={`menu${idx}`}
                  className={cx(activeMenu === idx ? 'active' : '')}
                  onClick={() => handleMenuClick(idx)}
                >
                  <Link href={menu.link}>
                    <Icon size={menu.iconSize}/>
                    <p>{menu.title}</p>
                  </Link>
                </li>
              )
            )
          })}
        </ul>
      </nav>
    </div>
  )
}