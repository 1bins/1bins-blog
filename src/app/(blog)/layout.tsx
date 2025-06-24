import {ReactNode} from "react";
import style from './layout.module.scss';
import classNames from "classnames/bind";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";

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
     <Footer />
   </>
 )
}