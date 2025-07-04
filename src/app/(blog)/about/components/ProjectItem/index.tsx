'use client'

import style from './projectItem.module.scss';
import classnames from 'classnames/bind';
import {Project} from "@/data/about/projects";
import {SkillList} from "@/app/(blog)/about/components/SkillList";

const cx = classnames.bind(style);

interface Props extends Project{
  onItemClick: (id: string) => void;
}

export const ProjectItem = ({
  id,
  company,
  title,
  description,
  skills,
  onItemClick
}: Props) => {
  const handleItemStyle = id.includes('s') ? 'typeA' : id.includes('c') ? 'typeB' : 'typeC';

  return(
    <div
      className={cx('project-item', handleItemStyle)}
      onClick={() => onItemClick(id)}
    >
      <p className={cx('company')}>{company}</p>
      <p className={cx('title')}>{title}</p>
      <p className={cx('description')}>{description}</p>
      <div className={cx('skill-list')}>
        <SkillList skills={skills}/>
      </div>
    </div>
  )
}