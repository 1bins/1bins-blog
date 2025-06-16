'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import style from './admin.module.scss';
import classnames from 'classnames/bind';
import { FaUser, FaLock } from "react-icons/fa";

const cx = classnames.bind(style);

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('⚠ 이메일 또는 비밀번호를 확인하세요')
    } else {
      router.push('/admin');
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  }

  return(
    <div className={cx('container')}>
      <form onSubmit={handleLogin}>
        <div className={cx('login-form')}>
          <div className={cx('input-box')}>
            <FaUser color="#999" />
            <input
              type="text"
              name="userId"
              placeholder="관리자 ID를 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={cx('input-box')}>
            <FaLock color="#999" />
            <input
              type="password"
              name="userPw"
              placeholder="패스워드를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={onKeyDown}
              required
            />
          </div>
          <button type="submit">로그인하기</button>
        </div>
      </form>
    </div>
  )
}