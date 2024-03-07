import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type IdeaProps = {
  id: string;
  title: string;
  description: string;
  userId?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  image?: string | null;
};

export const Card = ({
  id,
  title,
  description,
  userId,
  firstName,
  lastName,
  email,
  image,
}: IdeaProps) => {
  const fullName = `${firstName}  ${lastName ? lastName : ""}`.trim();
  return (
    <Link href={`/idea/${id}`}>
      <div className="rounded-lg h-full w-full flex flex-col justify-between bg-black hover:bg-zinc-900 border border-slate-300 cursor-pointer hover:border-slate-100 transition-colors duration-150 border-opacity-30 p-6 ">
        <div className="space-y-3">
          <p className="font-bold text-2xl">{title}</p>
          <p className="text-slate-300 text-opacity-70 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="pt-3">
          <p className="text-slate-300 text-opacity-70 text-sm pt-5">
            by {fullName}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
