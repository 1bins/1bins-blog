import style from './titleInput.module.scss';
import classnames from 'classnames/bind';
import React from "react";

const cx = classnames.bind(style);

interface Props {
  title: string;
  onTitleChange: (title: string) => void;
}

export const TitleInput = ({ title, onTitleChange } : Props) => {
  return(
    <div className={cx('title-box')}>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
    </div>
  )
}