'use client';

import {useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";
import {AdminTitleIndex} from "@/components/AdminTitle";
import {PostCategory} from "@/app/(admin)/admin/post/components/Dashboard/Post/PostCategory"
import {PostTable} from "@/app/(admin)/admin/post/components/Dashboard/Post/PostTable";
import {PostButton} from "@/app/(admin)/admin/post/components/Dashboard/Post/PostButton";
import {PostData} from "@/types";
import style from './post.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

export default function Page() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [filterdPosts, setFilterdPosts] = useState<PostData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) {
        setPosts(data);
        setFilterdPosts(data);
      }
    })();
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      setFilterdPosts(posts.filter(post => post.category === selectedCategory));
    } else {
      setFilterdPosts(posts);
    }
  }, [selectedCategory, posts]);

  return(
    <section className={cx('container', 'list-container')}>
      <AdminTitleIndex
        title={"Board"}
        description={"블로그 게시글 관리"}
      />
      <div className={cx('table-box')}>
        <PostCategory
          selectedCategory={selectedCategory}
          onSelectedCategory={setSelectedCategory}
        />
        <PostTable posts={filterdPosts} />
      </div>
      <PostButton />
    </section>
  )
}