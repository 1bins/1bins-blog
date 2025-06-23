'use client';

import {ReactNode, useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import {supabase} from "@/lib/supabase";

export const AdminAuth = ({
  children
} : {
  children: ReactNode
}) => {
  // ** state
  const [isLoading, setIsLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  // ** variables
  const router = useRouter();
  useEffect(() => {
    const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setAuthed(true);
        setIsLoading(false);
      } else {
        alert('로그인이 필요합니다')
        router.push('/login');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setAuthed(true);
      } else {
        alert('로그인이 필요합니다')
        router.push('/login');
      }
      setIsLoading(false);
    })

    return () => {
      subscription.unsubscribe();
    };
  },[]);

  return(
    <>
      {children}
    </>
  )
}