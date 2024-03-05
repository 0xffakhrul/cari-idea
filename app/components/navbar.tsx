"use client";

import { SignedIn, UserButton, auth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center pt-8 border-b border-slate-300 border-opacity-30 pb-8">
      <a href="" onClick={() => router.back()}>
        Logo
      </a>
      <div className="space-x-8 text-xl font-semibold flex items-center">
        <a href="">About</a>
      <button
          className="bg-slate-400 px-5 py-3 rounded-md text-black"
          onClick={() => router.push("/idea/create")}
        >
          Add Idea!
        </button>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
