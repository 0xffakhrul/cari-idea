import { getIdeaById } from "@/actions/get-idea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Page = async ({ params }: { params: { id: string } }) => {
  const idea = await getIdeaById(params.id);
  console.log(idea);
  return (
    <div className="pt-10 space-y-5">
      <Link href={"/"} className="flex items-center pb-2 md:pb-8 gap-3">
        <ArrowLeft />
        Back
      </Link>
      <p className="text-3xl font-bold">{idea?.title}</p>
      <div className="flex items-center gap-4">
        <Avatar>
          {idea?.image ? (
            <AvatarImage src={idea?.image} />
          ) : (
            <AvatarFallback>CI</AvatarFallback>
          )}
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm">{idea?.firstName}</p>
          <p className="text-sm text-slate-400">{idea?.email}</p>
        </div>
      </div>
      <p className="leading-relaxed">{idea?.description}</p>
    </div>
  );
};

export default Page;
