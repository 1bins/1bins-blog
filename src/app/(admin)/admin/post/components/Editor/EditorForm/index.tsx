'use client';

import style from './editorForm.module.scss';
import classnames from 'classnames/bind';
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {CategorySelector} from "@/app/(admin)/admin/post/components/Editor/CategorySelector";
import {TitleInput} from "@/app/(admin)/admin/post/components/Editor/TitleInput";
import {EditorContent} from "@/app/(admin)/admin/post/components/Editor/EditorContent";
import {EditorActions} from "@/app/(admin)/admin/post/components/Editor/EditorActions";
import {supabase} from "@/lib/supabase";
import {PostData} from "@/types";

const cx = classnames.bind(style);

interface Props {
  postId?: string;
}

export const EditorForm = ({ postId }: Props) => {
  // ** state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  // ** variables
  const router = useRouter();
  const handlePostSave = async () => {
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

  const handlePostDelete = async () => {
    if (!postId) return;

    const confirmDelete = window.confirm('정말 이 글을 삭제하시겠습니까?');

    if (!confirmDelete) return;

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', Number(postId));

      if (error) {
        console.error(error);
        alert('⚠ 글 삭제 실패');
      } else {
        alert('글이 삭제되었습니다 😊')
        router.replace('/admin/post');
      }
  }

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

  return(
    <div className={cx('container')}>
      <CategorySelector
        category={category}
        onCategoryChange={setCategory}
      />
      <TitleInput
        title={title}
        onTitleChange={setTitle}
      />
      <EditorContent
        content={content}
        onContentChange={setContent}
      />
      <EditorActions
        postId={postId}
        onPostSave={handlePostSave}
        onPostDelete={handlePostDelete}
      />
    </div>
  )
}