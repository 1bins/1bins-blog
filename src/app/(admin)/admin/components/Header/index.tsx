import style from './adminHeader.module.scss';
import classnames from 'classnames/bind';
import {AdminHeaderLogo} from "@/app/(admin)/admin/components/Header/HeaderLogo";
import {AdminHeaderMenu} from "@/app/(admin)/admin/components/Header/HeaderMenu";

const cx = classnames.bind(style);

export const AdminHeader = () => {
  return(
    <div className={cx('header')}>
      <AdminHeaderLogo/>
      <header>
        <AdminHeaderMenu/>
      </header>
    </div>
  )
}