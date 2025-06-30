'use client';

import style from './projectsSection.module.scss';
import classnames from 'classnames/bind';
import {useState} from "react";
import {ProjectDetail, projectDetails, projects} from "@/data/about/projects";
import {ProjectItem} from "@/app/(blog)/about/components/ProjectItem";
import {useModal} from "@/hooks/useModal";
import {Modal} from "@/components/Modal";
import MarkdownPreviewClient from "@/app/(blog)/blog/post/[postId]/MarkdownPreviewClient";
import {SkillList} from "@/app/(blog)/about/components/SkillList";
import { RiShareBoxLine } from "react-icons/ri";

const cx = classnames.bind(style);

export const ProjectSection = () => {
  // ** states
  const { isOpen, modalOpen, modalClose } = useModal();
  const [modalData, setModalData] = useState<ProjectDetail>();

  // ** variables
  const handleItemClick = (id: string) => {
    modalOpen();
    setModalData(projectDetails.find(project => project.id === id));
  }

  return(
    <section className={cx('section', 'section-projects')}>
      <h3>Projects</h3>
      <div className={cx('project-list-box')}>
        {projects.map(project => (
          <ProjectItem
            key={project.id}
            id={project.id}
            company={project.company}
            title={project.title}
            description={project.description}
            skills={project.skills}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={modalClose}>
        {
          modalData && (() => {
            const { company, date, title, description, skills, homepage, data } = modalData;

            return(
              <div className={cx('modal-box')}>
                <div className={cx('title-box')}>
                  <div className={cx('flex')}>
                    <p className={cx('company')}>{company}</p>
                    <p className={cx('date')}>{date}</p>
                  </div>
                  <p className={cx('title')}>{title}</p>
                  <p className={cx('description')}>{description}</p>
                  <div className={cx('skill-list')}>
                    <SkillList skills={skills}/>
                  </div>
                  {homepage &&
                      <a className={cx('homepage')} href={homepage} target="_blank" title="새 탭으로 열기">
                        사이트 바로가기 <RiShareBoxLine size={16} />
                      </a>
                  }
                </div>
                <div className={cx('content-box')}>
                  <MarkdownPreviewClient source={data}/>
                </div>
              </div>
            );
          })()
        }
      </Modal>
    </section>
  )
}