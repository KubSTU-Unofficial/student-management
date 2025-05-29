import { z } from "zod";
import LoginForm from "@/components/LoginForm";
import { formSchema } from "@/components/formSchema";
import { redirect } from "next/navigation";

export default async function Home() {


  return (
    <div className="bg-accent h-screen flex items-center justify-center">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

async function onSubmit(values: z.infer<typeof formSchema>) {
  'use server'
  console.log(values)
  redirect("/manage")
}