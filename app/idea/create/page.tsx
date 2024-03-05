"use client";

// const formSchema = z.object({
//   title: z.string().min(1, {
//     message: "Please enter a title.",
//   }),
//   description: z.string().min(1, {
//     message: "Please enter a description.",
//   }),
// });

import { create } from "@/actions/create-idea";
import { z } from "zod";

const Page = () => {
  return (
    <div>
      <form action={create}>
        <input type="text" name="title" id="title" />
        <input type="text" name="description" id="description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
