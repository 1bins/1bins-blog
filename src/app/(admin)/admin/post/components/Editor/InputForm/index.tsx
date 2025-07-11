import style from './inputForm.module.scss';
import classnames from 'classnames/bind';
import React from "react";

const cx = classnames.bind(style);

interface Props {
  formValue: string;
  onFormValueChange: (title: string) => void;
  className?: string;
  placeholder: string;
}

export const InputForm = ({
  formValue,
  onFormValueChange,
  className,
  placeholder
} : Props) => {
  return(
    <div className={cx('input-box', className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={formValue}
        onChange={(e) => onFormValueChange(e.target.value)}
      />
    </div>
  )
}