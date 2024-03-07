"use client";

import { SignedIn, UserButton, auth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center pt-8 border-b border-slate-300 border-opacity-30 pb-8">
      <a href="" onClick={() => router.back()}>
        Logo
      </a>
      <div className="space-x-8 md:text-xl font-semibold flex items-center">
        <a href="" className="hidden md:block">
          About
        </a>
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
