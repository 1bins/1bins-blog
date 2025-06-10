import style from './header.module.scss';
import classnames from 'classnames/bind';
import {TbSun} from "react-icons/tb";
import {FiGithub} from "react-icons/fi";

const cx = classnames.bind(style);

export const HeaderAdditional = () => {
  return(
    <div className={cx('add-wrap')}>
      <ul>
        <li className={cx('dark')}>
          <button type="button">
            <TbSun size="18" color="#000" />
          </button>
        </li>
        <li className={cx('github')}>
          <a href="https://github.com/1bins" target="_blank" title="새 탭으로 열기">
            <FiGithub size="18" color="#000" />
          </a>
        </li>
      </ul>
    </div>

  )
}