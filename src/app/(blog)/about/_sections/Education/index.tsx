import style from './educationSection.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

export const EducationSection = () => {
  return(
    <section className={cx('section', 'section-education')}>
      <h3>Education</h3>
      <div className={cx('education-container')}>
        <p className={cx('title')}>우송대학교</p>
        <p className={cx('major')}>외식조리전공 글로벌한식조리학과</p>
        <p className={cx('grade')}>3.91 / 4.5</p>
        <p className={cx('date')}>
          2014 - 2019
          <span>(3학년 중퇴)</span>
        </p>
      </div>
    </section>
  )
}