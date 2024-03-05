"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { clerkClient } from "@clerk/nextjs";

const { userId } = auth();

export async function create(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (userId) {
    const user = await clerkClient.users.getUser(userId);
    const { firstName, lastName, emailAddresses, imageUrl } = user;
    console.log(firstName, lastName, emailAddresses, imageUrl);
    console.log(user);

    const primaryEmailAddress = emailAddresses[0]?.emailAddress;

    await db.idea.create({
      data: {
        title,
        description,
        userId,
        firstName,
        lastName,
        email: primaryEmailAddress,
        image: imageUrl,
      },
    });
  } else {
    console.log("something went wrong");
  }

  revalidatePath("/idea/create");
}
