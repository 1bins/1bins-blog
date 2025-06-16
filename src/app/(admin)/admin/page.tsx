import style from './admin.module.scss';
import classnames from 'classnames/bind';
import { FaUser, FaLock } from "react-icons/fa";

const cx = classnames.bind(style);

export default function AdminPage() {

  return(
    <div className={cx('container')}>
      <div className={cx('login-form')}>
        <div className={cx('input-box')}>
          <FaUser color="#999" />
          <input
            type="text"
            name="userId"
            placeholder="관리자 ID를 입력하세요"
            required
          />
        </div>
        <div className={cx('input-box')}>
          <FaLock color="#999" />
          <input
            type="password"
            name="userPw"
            placeholder="패스워드를 입력하세요"
            required
          />
        </div>
        <button type="button">로그인하기</button>
      </div>
    </div>
  )
}