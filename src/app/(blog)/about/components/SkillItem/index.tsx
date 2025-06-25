import style from './skillItem.module.scss';
import classnames from 'classnames/bind';
import {Skill} from "@/data/about/skills";
import Image from "next/image";

const cx = classnames.bind(style);

interface Props extends Skill {
  activeTab?: string | null;
}

export const SkillItem = ({
  type,
  name,
  img,
  activeTab
}: Props) => {
  const isBlur = activeTab !== type && activeTab !== null;

  return(
    <li
      className={cx('skill-item', {'blur': isBlur})}
    >
      <Image
        src={`/about/skill/${img}`}
        width={60}
        height={60}
        alt={`${name} 아이콘`}
      />
      <p className={cx('skill-name')}>{name}</p>
    </li>
  )
}