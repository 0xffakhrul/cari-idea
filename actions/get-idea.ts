"use server";

import { db } from "@/lib/db";

export async function getIdea() {
  try {
    const ideas = await db.idea.findMany();

    return ideas;
  } catch (error) {
    console.error(error);
  }
}

export async function getIdeaById(id: string) {
  try {
    const idea = await db.idea.findUnique({
      where: {
        id: id,
      },
    });

    return idea;
  } catch (error) {
    console.error(error);
  }
}
