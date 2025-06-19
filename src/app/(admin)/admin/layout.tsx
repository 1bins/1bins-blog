import style from './layout.module.scss';
import classnames from 'classnames/bind';
import {ReactNode} from "react";
import {AdminAuth} from "@/app/(admin)/admin/components/Auth";
import {AdminHeader} from "@/app/(admin)/admin/components/Header";

const cx = classnames.bind(style);

export default function AdminLayout({
  children,
} : {
  children: ReactNode
}) {
  return(
    <AdminAuth>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <AdminHeader />
        </div>
        <main className={cx('main')}>
          {children}
        </main>
      </div>
    </AdminAuth>
  )
}