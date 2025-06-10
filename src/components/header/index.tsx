import Link from 'next/link';

import style from './header.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(style);


export const Header = () => {
  return(
    <header>
      <h1 className={cx('blind')}>1bins blog</h1>
      <div className={cx('nav-wrap')}>
        <nav>
          <ul>
            <li>
              <Link href="/blog">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}