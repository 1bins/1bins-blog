'use client';

import style from './modal.module.scss';
import classnames from 'classnames/bind';
import {ReactNode} from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const cx = classnames.bind(style);

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ( {
  isOpen,
  onClose,
  children
}: Props ) => {
  if (!isOpen) return null;

  return(
    <div className={cx('modal-container')}>
      <div
        className={cx('modal-bg')}
        onClick={onClose}
      ></div>
      <div className={cx('modal-box')}>
        <button
          type="button"
          onClick={onClose}
          className={cx('btn-close')}
        >
          <IoCloseCircleSharp size={24}/>
        </button>
        {children}
      </div>
    </div>
  )
}