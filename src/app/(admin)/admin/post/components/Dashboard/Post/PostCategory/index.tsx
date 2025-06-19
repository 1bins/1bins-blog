'use client';

import style from './PostCategory.module.scss';
import classnames from 'classnames/bind';
import {Categories} from "@/configs/configs";

const cx = classnames.bind(style);

interface Props {
  selectedCategory: string | null;
  onSelectedCategory: (category: string | null) => void;
}

export const PostCategory = ({ selectedCategory, onSelectedCategory }: Props) => {

  return(
    <div className={cx('category-wrap')}>
      <ul>
        <li
          className={cx({ active: selectedCategory === null })}
          onClick={() => onSelectedCategory(null)}
        >
          전체보기
        </li>
        {Categories.map((category, idx) => (
          <li
            key={`category-${idx}`}
            className={cx({'active': selectedCategory === category})}
            onClick={() => onSelectedCategory(category)}
          >{category}</li>
        ))}
      </ul>
    </div>
  )
}