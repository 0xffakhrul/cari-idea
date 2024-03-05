import { db } from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/card";

export default async function Home() {
  const ideas = await db.idea.findMany();
  return (
    <main className="min-h-screen ">
      <div className="pt-20  space-y-12">
        <p className="text-xl text-center md:text-6xl font-bold ">
          Assorted ideas for the technicals.
        </p>
        <p className="max-w-3xl text-center mx-auto text-2xl font-medium text-slate-300 text-opacity-70 leading-relaxed">
          Explore curated and handpicked goodies that enhance your workflow and
          cultivate your growth as a developer and designer.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {ideas.map((idea) => (
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
            >
              {/* Additional child components if needed */}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
