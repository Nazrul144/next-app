"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react"; // <-- this is missing
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email().min(6, { message: "email is too short" }),
  password: z.string().min(8, { message: "Password should be minimum 8 character" }).max(16, { message: "Password is too long" }),
});

type LoginFormData = z.infer<typeof formSchema>;

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: LoginFormData) => {
    console.log(data);
    form.reset();
  };

  //HandleGoogleLogin:
  const handleSocialLogin = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: "/"
    })
  };

  return (
    <div className="w-96 mx-auto border-1 border-gray-100 shadow-xl p-6 mt-24 rounded-lg">
      <h1 className="text-center text-sm tracking-wide">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
         <div  className="space-y-4">
         <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <Button type="button" onClick={()=>handleSocialLogin("google")} variant={"outline"} className="w-full cursor-pointer">
              <FcGoogle /> Google Login
            </Button>
            <Button type="button" onClick={()=>handleSocialLogin("github")} variant={"outline"} className="w-full cursor-pointer">
              <FaGithub /> Github Login
            </Button>
         </div>
      
            <span className="text-sm ">Don&apos;t have an account? <Link className="font-bold text-blue-500" href="/signup">Signup</Link></span>
          <Button type="submit" className=" w-full cursor-pointer mt-4 text-white capitalize rounded-md
             bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 ">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
