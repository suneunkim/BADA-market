"use client";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface NavProps {
  currentUser: User | null;
}

const DeskTopNav = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/user", fetcher);

  const handleAuthentication = () => {
    if (data?.currentUser) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <div className="fixed top-0 z-10 flex h-14 w-full items-center justify-between border border-b bg-sky-200 px-10 py-3">
      <Link href="/">
        <header className="flex items-center space-x-5 text-lg font-medium text-gray-800 hover:text-sky-500">
          <img className="w-14" src="bada-market.png" alt="Logo" />
          <p>바다마켓</p>
          <p>{data?.ok ? data.currentUser.name : ""}</p>
        </header>
      </Link>
      <nav>
        <ul className="flex space-x-5">
          <Link href="/community">
            <li className="hover:text-sky-500">동네생활</li>
          </Link>
          <Link href="/chats">
            <li className="hover:text-sky-500">채팅</li>
          </Link>
          <Link href="/upload">
            <li className="hover:text-sky-500">판매하기</li>
          </Link>
          <Link href="/profile">
            <li className="hover:text-sky-500">마이페이지</li>
          </Link>
          <button onClick={handleAuthentication}>
            {data?.currentUser.email ? "로그아웃" : "로그인"}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default DeskTopNav;
