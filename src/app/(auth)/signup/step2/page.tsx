"use client";
import { Button } from "@/components/ui/button";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdNavigateNext } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import z from "zod";
import { required } from "zod/v4-mini";

const formSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(11, { message: "Phone number must be at least 11 digits" })
    .max(11, { message: "Phone number must not exceed 11 digits" })
    .regex(/^(?:\+?88)?01[3-9]\d{8}$/, { message: "Enter a valid Bangladeshi phone number" }),
});

const Step2Page = () => {
  const [phone, setPhone] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  const handleFormSubmit = (data: any) => {
    console.log(data);
    form.reset(); //Form has been clear after submit the form.
  };

  return (
    <div>
      <div className="w-96 mx-auto border-1 border-red-400 rounded-lg py-4 px-6 mt-8">
        <h1 className="text-center font-semibold text-2xl "> Step 2</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <PhoneInput country={"bd"} 
                        value={field.value}
                        onChange={field.onChange}
                        inputProps={{
                            name: field.name,
                            required: true
                        }}
                    />
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

            <Button className="w-full mt-4 cursor-pointer flex items-center" type="submit">
              Next <MdNavigateNext size={30} className="mt-1" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Step2Page;
