import style from './editorContent.module.scss';
import classnames from 'classnames/bind';
import MDEditor from "@uiw/react-md-editor";
import React from "react";

const cx = classnames.bind(style);

interface Props {
  content: string;
  onContentChange: (content: string) => void;
}

export const EditorContent = ({ content, onContentChange }: Props) => {
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