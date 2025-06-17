'use client';

import {useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";
import {PostCategory} from "@/app/(admin)/admin/post/components/PostCategory";
import {PostTable} from "@/app/(admin)/admin/post/components/PostTable";
import {PostButton} from "@/app/(admin)/admin/post/components/PostButton";
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
    <div className={cx('container', 'list-container')}>
      <div className={cx('left-side')}>
        <PostCategory
          selectedCategory={selectedCategory}
          onSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className={cx('right-side')}>
        <PostTable posts={filterdPosts} />
        <PostButton />
      </div>
    </div>
  )
}