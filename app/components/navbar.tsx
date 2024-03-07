"use client";

import { SignedIn, UserButton, auth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center pt-8 border-b border-slate-300 border-opacity-30 pb-8">
      <a
        href=""
        onClick={() => router.back()}
        className="flex items-center gap-3"
      >
        <Image alt="logo" height={50} width={50} src="/logoci.svg" />
        <span className="hidden md:block text-2xl font-bold uppercase">
          Cari Idea
        </span>
      </a>
      <div className="space-x-5 md:text-xl font-semibold flex items-center">
        <Link
          href={"/about"}
          className="hidden md:block hover:underline transition duration-150 ease-in-out"
        >
          About
        </Link>
        <button
          className="bg-slate-400 px-3 py-2 md:px-5 md:py-3 rounded-md text-black hover:bg-[#616467] transition duration-200 flex items-center gap-2"
          onClick={() => router.push("/idea/create")}
        >
          Add Idea!
          <ArrowRight height="18" width="18" />
        </button>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
