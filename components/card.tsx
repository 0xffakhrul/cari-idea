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
  const fullName = `${firstName} ${lastName}`.trim();
  return (
    <div className="rounded-md border border-slate-300 border-opacity-30 p-6 space-y-2">
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-slate-300 text-opacity-70">{description}</p>
      <p className="text-slate-300 text-opacity-70 text-sm pt-5">
        by {fullName}
      </p>
    </div>
  );
};

export default Card;
