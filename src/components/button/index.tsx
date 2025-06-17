import style from './button.module.scss';
import classnames from 'classnames/bind';
import {ReactNode} from "react";

const cx = classnames.bind(style);

export interface BaseButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  onClick?: () => void;
  children?: ReactNode | string;
}

export const Button = ({
  type = 'button',
  className,
  onClick,
  children
}: BaseButtonProps) => {
  return(
    <button
      type={type}
      className={cx('button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}