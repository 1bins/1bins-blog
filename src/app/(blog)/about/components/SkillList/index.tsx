import style from './skillList.module.scss';
import classnames from 'classnames/bind';
import {SkillItem} from "@/app/(blog)/about/components/SkillItem";
import {Skill} from "@/data/about/skills";

const cx = classnames.bind(style);

interface Props {
  skills: Skill[];
  activeTab?: string | null;
}

export const SkillList = ({ skills, activeTab = null }: Props) => {
  return(
    <ul className={cx('skills')}>
      {skills.map((skill, idx) => (
        <SkillItem
          key={`skill-${idx}`}
          type={skill.type}
          name={skill.name}
          img={skill.img}
          activeTab={activeTab}
        />
      ))}
    </ul>
  )
}