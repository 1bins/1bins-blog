import {ReactNode} from "react";
import {Header} from "@/components/user/header";
import style from './layout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function BlogLayout({
  children
}: {
  children: ReactNode
}) {
 return(
   <>
     <Header />
     <main className={cx('main')}>
       {children}
     </main>
   </>
 )
}