"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderNav } from '@/components/Header/HeaderNav';
import { HeaderAdditional } from "@/components/Header/HeaderAdditional";
import style from './header.module.scss';
import classnames from 'classnames/bind';
import {HeaderProgress} from "@/components/Header/HeaderProgress";

const cx = classnames.bind(style);

export const Header = () => {
  // ** state
  const pathname = usePathname();
  const [isPageMoved, setIsPageMoved] = useState<boolean>(false);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  // ** variables
  const updateScrollProgress = () => {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollableHeight = scrollHeight - innerHeight;

    const progress = scrollableHeight > 0 ? (scrollY / scrollableHeight) * 100 : 0;
    setIsPageMoved(scrollY > 30);
    setScrollPercent(progress);
  }

  useEffect(() => {
    updateScrollProgress();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, [])


  return(
    <header className={cx('header')}>
      <HeaderProgress progress={scrollPercent}/>
      <h1 className={cx('blind')}>1bins blog</h1>
      <div className={cx('container', { pageMoved: isPageMoved })}>
        <HeaderNav/>
        <HeaderAdditional/>
      </div>
    </header>
  )
}