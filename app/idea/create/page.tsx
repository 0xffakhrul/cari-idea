"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "@/actions/create-idea";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter a title.",
  }),
  description: z.string().min(1, {
    message: "Please enter a description.",
  }),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  return (
    <div className="pt-10">
      <Link href={"/"} className="flex items-center pb-8 gap-3">
        {" "}
        <ArrowLeft />
        Back
      </Link>
      <p className="text-4xl font-bold tracking-wide pb-6">
        Have an awesome idea? Let's hear it!
      </p>
      <Form {...form}>
        <form action={create} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="PetaKandar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  {/* <Input
                    placeholder="A list of best Nasi Kandar places around Malaysia."
                    {...field}
                  /> */}
                  <Textarea
                    placeholder="A list of best Nasi Kandar places around Malaysia."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="bg-slate-400 rounded-md px-4 py-2 text-sm text-black font-medium"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
