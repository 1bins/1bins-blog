import style from './introSection.module.scss';
import classnames from 'classnames/bind';
import { PiPhoneFill } from "react-icons/pi";
import { IoMail, IoLogoGithub } from "react-icons/io5";

const cx = classnames.bind(style);

export const IntroSection = () => {
  return(
    <section className={cx('section', 'section-intro')}>
      <div className={cx('intro-box')}>
        <h3>서원빈</h3>
        <p className={cx('intro-cont')}>계속 소통하고 싶은 프론트엔드 개발자</p>
        <ul className={cx('contact-point')}>
          <li>
            <PiPhoneFill size={16}/>
            <a href="tel:010-7538-0225">010.7538.0225</a>
          </li>
          <li>
            <IoMail size={16}/>
            <a href="mailto:1bin0225@gmail.com">1bin0225@gmail.com</a>
          </li>
          <li>
            <IoLogoGithub size={16}/>
            <a href="https://github.com/1bins" target="_blank" title="새 탭으로 이동">gitHub</a>
          </li>
        </ul>
      </div>
      <div className={cx('about-box')}>
        <h3>About</h3>
        <p className={cx('about-cont')}>2년 차 프론트엔드 개발자로 유저가 직접 이벤트에 참여할 수 있는 웹 서비스를 주로 개발했습니다. 프론트 개발자가 되기 전, 웹 퍼블리셔로서 웹 에이전시에서 4년간 근무했던 경험이 있습니다.
          <br/><br/>
          사용자 경험에 관심이 많아 기획 단계부터 능동적으로 아이디어를 제안하고, 기획자와 함께 다양한 <strong>인터랙션 요소</strong>를 구체화해나가는 과정을 즐깁니다. 실제로 터치 게임
          인터랙션을 개선한 결과, 사용자 참여율이 <strong>약 20%가량 상승</strong>해 실질적인 성과로 이어진 적도 있습니다.
          <br/><br/>
          기획자, 디자이너, 백엔드 개발자와 협업하며, 팀의 분위기를 이끌고 부서 간 소통을 원활히 하는 역할을 맡았습니다. 최종적으로 개발팀의 멘탈 관리와 부서 간 협업을 돕는 <strong>엔지니어링
            매니저</strong>로 도약하는 것을 목표로 하고 있습니다.</p>
      </div>
    </section>
  )
}