'use client';

import style from './skillsSection.module.scss';
import classnames from 'classnames/bind';
import {useState} from "react";
import {skills} from "@/data/about/skills";
import Image from "next/image";
import {SkillList} from "../../components/SkillList";

const cx = classnames.bind(style);

interface skillTabs {
  type: string;
  label: string;
}

export const SkillsSection = () => {
  // ** state
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // ** variables
  const tabs: skillTabs[] = [
    { type: "lang", label: "Languages" },
    { type: 'framework', label: 'Framework' },
    { type: 'state', label: '상태관리' },
    { type: 'style', label: '스타일링' },
    { type: 'env', label: '환경 및 배포' },
  ];

  const handleActiveTab = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab(null);
      return;
    }
    setActiveTab(tab);
  }

  return(
    <section className={cx('section', 'section-skills')}>
      <h3>Skills</h3>
      <div className={cx('tabs-box')}>
        <ul className={cx('tabs')}>
          {tabs.map((tab, index) => (
            <li
              key={`tab-${index}`}
              className={cx({'active': activeTab === tab.type})}
              onClick={() => handleActiveTab(tab.type)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className={cx('skill-list-box')}>
        <SkillList
          skills={skills}
          activeTab={activeTab}
        />
      </div>
    </section>
  )
}