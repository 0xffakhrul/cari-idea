import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-5 md:py-10 border-t border-slate-300 border-opacity-30 flex items-start justify-between mt-auto">
      <p className="hidden md:block text-sm md:text-lg">
        Developed & Designed by{" "}
        <span className="font-bold text-slate-300">Fakhrul</span>{" "}
      </p>
      <div className="text-sm md:text-lg space-y-2 flex flex-col">
        <Link
          href={"https://github.com/0xffakhrul/cari-idea"}
          className="flex items-center gap-2 hover:text-slate-300 transition duration-150"
        >
          Contribute to GitHub
          <MoveUpRight width={16} height={16} />
        </Link>
        <Link
          href={"/about"}
          className="flex items-center gap-2 hover:text-slate-300 transition duration-150"
        >
          About <MoveUpRight width={16} height={16} />
        </Link>
      </div>
    </div>
  );
};
