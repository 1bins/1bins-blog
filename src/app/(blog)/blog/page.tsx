'use client';

import {supabase} from "@/lib/supabase";
import style from './blog.module.scss';
import classnames from 'classnames/bind';
import {PostList} from "@/app/(blog)/blog/components/PostList";
import {PostCategory} from "@/app/(blog)/blog/components/PostCategory";
import {useEffect, useState} from "react";
import {PostData} from "@/types";
import {SkeletonList} from "@/components/Skeleton";

const cx = classnames.bind(style);

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) {
        setPosts(data);
        setIsLoading(false);
      }
    })();
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(posts.filter((post) => post.category === selectedCategory))
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedCategory, posts]);

  return (
    <div className={cx('container')}>
      <PostCategory
        selectedCategory={selectedCategory}
        onSelectedCategoryChange={setSelectedCategory}
      />
      {
        isLoading ?
          <SkeletonList count={6}/>
          :
          <PostList posts={filteredPosts} />
      }
    </div>
  );
}
