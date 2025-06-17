'use client';

import {useState, useRef} from "react";
import {Categories} from "@/configs/configs";
import style from './categoryBox.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

interface Props {
  category: string;
  setCategory: (value: string) => void;
}

export const CategoryBox = ({ category, setCategory }: Props) => {
  // ** state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);

  // ** variables
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleOptionClicked = (category: string) => {
    setCategory(category);
    setIsDropdownOpen(false);
    setIsReadOnly(true);
  }

  const activeCategoryInput = () => {
    setIsReadOnly(false);
    setIsDropdownOpen(false);
    setCategory('');
    // setIsReadOnly 상태 변경 반영 이후에 포커스 주기 위해 setTimeout 사용
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }


  return(
    <div className={cx('category-box')}>
      <div className={cx('input-box')}>
        <input
          type="text"
          ref={inputRef}
          placeholder="카테고리를 선택해주세요"
          readOnly={isReadOnly}
          value={category}
          onClick={handleDropdownToggle}
          onChange={e => setCategory(e.target.value)}
          className={cx(isDropdownOpen && 'isDropdown')}
        />
      </div>
      <div className={cx('select-wrap', isDropdownOpen && 'isDropdown')}>
        <div className={cx('select-box')}>
          <ul>
            {Categories.map((category, idx) => (
              <li
                key={`category-${idx}`}
                onClick={() => handleOptionClicked(category)}
              >
                {category}
              </li>
            ))}
              <li
                onClick={activeCategoryInput}
              >직접입력</li>
          </ul>
        </div>
      </div>
    </div>
  )
}