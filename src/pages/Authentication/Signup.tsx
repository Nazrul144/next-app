"use client";
import { Button } from "@/components/ui/button";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username should be at least 2 characters long" })
    .max(30, { message: "Username should not exceed 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    })
    .refine((val) => !/^\d+$/.test(val), {
      message: "Username cannot be only numbers",
    })
    .refine((val) => !/^_/.test(val), {
      message: "Username cannot start with an underscore",
    }),

  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must not exceed 32 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),

  color: z.string(),
  radio: z.string().min(1, "Pick an option"),
  priority: z.string().min(1, "Select any one"),
  file: z.instanceof(File, { message: "File is required..!!" }).nullable(),
});

const Signup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      color: "",
      radio: "",
      priority: "",
      file: null,
    },
    
  });

  const handleFormSubmit = (data: any) => {
    console.log(data);
    form.reset()   //Form has been clear after submit the form.
  };

  return (
    <div className="w-96 mx-auto border-1 border-red-400 rounded-lg py-4 px-6 mt-8">
      <h1 className="text-center font-semibold text-2xl ">Signup</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} />
                </FormControl>
                <FormDescription className="sr-only">This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormDescription className="sr-only">This is your public display name.</FormDescription>
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
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription className="sr-only">This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pick Your Favorite Color</FormLabel>
                <FormControl>
                  <Input type="color" placeholder="Favorite Color" {...field} />
                </FormControl>
                <FormDescription className="sr-only">This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="radio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Your Mood</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange} defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="happy" id="option-one" />
                      <Label htmlFor="option-one">Happy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sad" id="option-two" />
                      <Label htmlFor="option-two">Sad</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormDescription className="sr-only">This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Your Priority</FormLabel>
                <FormControl>
                  <select value={field.value || "medium"} onChange={field.onChange} name="priority" id="" defaultValue="medium">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </FormControl>
                <FormDescription className="sr-only">This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>File Upload</FormLabel>
                <FormControl>
                  <Input type="file" onChange={(e) => field.onChange(e.target.files?.[0] || null)} />
                </FormControl>
                <FormDescription className="sr-only">This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full mt-4 cursor-pointer" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
