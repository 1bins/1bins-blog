import style from './postCategory.module.scss';
import classname from 'classnames/bind';
import {Categories} from "@/configs/configs";

const cx = classname.bind(style);

interface Props {
  selectedCategory: string | null;
  onSelectedCategoryChange: (selectedCategory: string | null) => void;
}

export const PostCategory = ({
  selectedCategory,
  onSelectedCategoryChange,
}: Props ) => {
  return(
    <div className={cx('post-category-box')}>
      <ul>
        <li
          className={cx({'active': selectedCategory === null})}
          onClick={() => onSelectedCategoryChange(null)}
        >전체보기</li>
        {Categories.map((category, idx) => (
          <li
            key={`category${idx}`}
            className={cx({'active': selectedCategory === category})}
            onClick={() => onSelectedCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}