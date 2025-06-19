'use client';

import {ReactNode, useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from "@/lib/supabase";

export const AdminAuth = ({
  children
} : {
  children: ReactNode
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert('⚠ 로그인이 필요합니다');
        router.push('/login');
      } else {
        setIsAuthed(true);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return(
      <p>인증 확인 중...</p>
    )
  }

  if (!isAuthed) {
    return null;
  }

  return(
    <>
      {children}
    </>
  )
}