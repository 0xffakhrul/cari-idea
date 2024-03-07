import { db } from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/card";
import Link from "next/link";
import { getIdea } from "@/actions/get-idea";
import Image from "next/image";

export default async function Home() {
  const ideas = await getIdea();
  return (
    <main className="min-h-screen flex flex-col">
      <div className="pt-20  space-y-12">
        <p className="text-4xl text-center md:text-6xl font-bold ">
          Assorted ideas for the technicals.
        </p>
        <p className="max-w-3xl text-center mx-auto text-lg md:text-2xl font-medium text-slate-300 text-opacity-70 leading-relaxed">
          Got a tech concept? Developers are ready to bring it to life. Join our
          community and turn ideas into reality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {ideas?.map((idea) => (
            <Card
              key={idea.id}
              id={idea.id}
              title={idea.title}
              description={idea.description}
              userId={idea.userId}
              firstName={idea?.firstName}
              lastName={idea?.lastName}
              email={idea?.email}
              image={idea?.image}
            ></Card>
          ))}
        </div>
      </div>
    </main>
  );
}
