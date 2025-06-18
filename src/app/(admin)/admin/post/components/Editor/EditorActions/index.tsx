import style from './editorActions.module.scss';
import classnames from 'classnames/bind';
import React from "react";
import {Button} from "@/components/Button";
import {FaPencil, FaTrashCan} from "react-icons/fa6";

const cx = classnames.bind(style);

interface Props {
  postId?: string;
  onPostSave: () => void;
  onPostDelete: () => void;
}

export const EditorActions = ({ postId, onPostSave, onPostDelete }: Props) => {
  return(
    <div className={cx('button-box')}>
      <Button
        className={"circle"}
        onClick={onPostSave}
      >
        <FaPencil size={18} color={"#fff"} />
      </Button>
      {
        postId &&
          <Button
              className={"circle"}
              onClick={onPostDelete}
          >
            <FaTrashCan size={18} color={"#fff"} />
          </Button>
      }
    </div>
  )
}