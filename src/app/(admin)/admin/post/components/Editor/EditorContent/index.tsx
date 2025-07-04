'use client';

import style from './editorContent.module.scss';
import classnames from 'classnames/bind';
import MDEditor from "@uiw/react-md-editor";
import React, {useEffect} from "react";

const cx = classnames.bind(style);

interface Props {
  content: string;
  onContentChange: (content: string) => void;
}

export const EditorContent = ({ content, onContentChange }: Props) => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return(
    <div className={cx('editor-box')}>
      <MDEditor
        value={content}
        onChange={(val) => onContentChange(val || '')}
        style={{minHeight: '100%'}}
      />
    </div>
  )
}