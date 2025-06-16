'use client';

import { useRouter } from 'next/navigation';
import {useEffect} from "react";

export default function Page() {
  const router = useRouter();
    
  // 기능 없으므로 리다이렉트
  useEffect(() => {
    router.push('/admin/post');
  }, [])

  return(
    <div></div>
  )
}