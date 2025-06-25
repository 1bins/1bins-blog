import style from './projectItem.module.scss';
import classnames from 'classnames/bind';
import {Project} from "@/data/about/projects";
import {SkillList} from "@/app/(blog)/about/components/SkillList";

const cx = classnames.bind(style);

export const ProjectItem = ({
  id,
  company,
  title,
  description,
  skills
}: Project) => {
  return(
    <div className={cx('project-item')}>
      <p className={cx('company')}>{company}</p>
      <p className={cx('title')}>{title}</p>
      <p className={cx('description')}>{description}</p>
      <div className={cx('skill-list')}>
        <SkillList skills={skills}/>
      </div>
    </div>
  )
}