"use client";

import { useEffect, useState } from "react";
import { HeaderNav } from '@/components/header/HeaderNav';
import { HeaderAdditional } from "@/components/header/HeaderAdditional";
import style from './header.module.scss';
import classnames from 'classnames/bind';
import {HeaderProgress} from "@/components/header/HeaderProgress";

const cx = classnames.bind(style);

export const Header = () => {
  const [isPageMoved, setIsPageMoved] = useState<boolean>(false);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const totalScroll = scrollHeight - innerHeight;
      const progress = (scrollY / (scrollHeight - innerHeight)) * 100;

      setIsPageMoved(scrollY > 30);
      setScrollPercent(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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