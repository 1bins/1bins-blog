import type {Metadata} from "next";
import style from './about.module.scss';
import classnames from 'classnames/bind';
import {IntroSection} from "@/app/(blog)/about/_sections/Intro";
import {SkillsSection} from "@/app/(blog)/about/_sections/Skills";
import {CareerSection} from "@/app/(blog)/about/_sections/Career";
import {EducationSection} from "@/app/(blog)/about/_sections/Education";
import {ProjectSection} from "@/app/(blog)/about/_sections/Projects";
import {blogDesc, blogThumbnailURL} from "@/configs/const";

const cx = classnames.bind(style);

export const metadata: Metadata = {
  title: '서원빈 | 계속 소통하고 싶은 프론트엔드 개발자',
  description: blogDesc,
  openGraph: {
    title: '서원빈 | 계속 소통하고 싶은 프론트엔드 개발자',
    description: blogDesc,
    images: [blogThumbnailURL],
  }
};

export default function AboutPage() {
  return(
    <div className={cx('container')}>
      <IntroSection />
      <SkillsSection />
      <CareerSection />
      <EducationSection />
      <ProjectSection />
    </div>
  )
}