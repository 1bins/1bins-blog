import style from './careerSection.module.scss';
import classnames from 'classnames/bind';
import {careers} from "@/data/about/careers";
import {SkillList} from "@/app/(blog)/about/components/SkillList";

const cx = classnames.bind(style);

export const CareerSection = () => {
  return(
    <section className={cx('section', 'section-career')}>
      <h3>Work Experience</h3>
      <div className={cx('career-list-box')}>
        {careers.map((career, idx) => (
          <div
            key={`career-${idx}`}
            className={cx('career-item-box')}
          >
            <div className={cx('title-box')}>
              <p className={cx('title')}>{career.company}</p>
              <p className={cx('description')}>{career.description}</p>
              <p className={cx('timeline')}>{career.timeline}</p>
            </div>
            <div className={cx('skill-box')}>
              <SkillList skills={career.skills} />
            </div>
            <div className={cx('career-cont-box')}>
              <ul className={cx('career-cont-list')}>
                {career.list.map((content, idx) => (
                  <li
                    key={`career-cont-${idx}`}
                  >{content}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}