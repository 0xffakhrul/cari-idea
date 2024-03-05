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
