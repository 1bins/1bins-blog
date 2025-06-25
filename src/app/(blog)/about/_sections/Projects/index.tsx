'use client';

import style from './projectsSection.module.scss';
import classnames from 'classnames/bind';
import {projects} from "@/data/about/projects";
import {ProjectItem} from "@/app/(blog)/about/components/ProjectItem";
import {useModal} from "@/hooks/useModal";
import {Modal} from "@/components/Modal";
import MarkdownPreviewClient from "@/app/(blog)/blog/post/[postId]/MarkdownPreviewClient";

const cx = classnames.bind(style);

export const ProjectSection = () => {
  const { isOpen, modalOpen, modalClose } = useModal();

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
            modalOpen={modalOpen}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={modalClose}>
        <MarkdownPreviewClient source={""}/>
      </Modal>
    </section>
  )
}