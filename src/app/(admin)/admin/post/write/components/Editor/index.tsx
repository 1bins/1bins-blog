'use client';

import React, {useEffect, useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import {Button} from "@/components/Button";
import {CategoryBox} from "@/app/(admin)/admin/post/write/components/CategoryBox";
import { FaPencil } from "react-icons/fa6";
import {supabase} from "@/lib/supabase";
import {useRouter} from "next/navigation";
import style from './editor.module.scss';
import classnames from 'classnames/bind';
import {PostData} from "@/types";

const cx = classnames.bind(style);

interface Props {
  postId?: string;
}

export default function Editor({ postId }: Props) {
  // ** state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  // ** variables
  const router = useRouter();
  const handleSubmit = async () => {
    if (postId) {
      const { error } = await supabase
        .from('posts')
        .update({ title, content, category })
        .eq('id', Number(postId));

      if (error) {
        console.error(error);
        alert('⚠ 글 저장 실패');
      } else {
        alert('글이 성공적으로 수정되었습니다 😊')
        router.replace('/admin/post');
      }
    } else {
      const { error } = await supabase
        .from('posts')
        .insert([
          {
            title,
            content,
            category,
          }
        ]);

      if (error) {
        console.error(error);
        alert('⚠ 글 저장 실패');
      } else {
        alert('글이 성공적으로 저장되었습니다 😊')
        router.replace('/admin/post');
      }
    }
  };

  useEffect(() => {
    if (!postId) return;

    (async() => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', Number(postId));

      if (error || !data || data.length === 0) {
        alert('존재하지 않는 페이지입니다');
        router.back();
        return null;
      } else {
        const post: PostData = data[0];
        setTitle(post.title ?? '');
        setContent(post.content ?? '');
        setCategory(post.category ?? '');
      }
    })();
  }, [postId, router])

  return (
    <div className={cx('container')}>
      <CategoryBox
        category={category}
        setCategory={setCategory}
      />
      <div className={cx('title-box')}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={cx('editor-box')}>
        <MDEditor
          value={content}
          onChange={(val) => setContent(val || '')}
          style={{minHeight: '100%'}}
        />
      </div>
      <div className={cx('button-box')}>
        <Button
          className={"circle"}
          onClick={handleSubmit}
        >
          <FaPencil size={18} color={"#fff"} />
        </Button>
      </div>
    </div>
  );
}
