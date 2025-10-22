/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {register, handleSubmit, formState:{errors}, reset} = useForm()
  const [formData, setFormData] = useState("");

  const onSubmit = (data: any)=>{
    setFormData(data);
    reset(); 
    
  }
  console.log(formData);

  return (
    <div className="w-96 mx-auto mt-28 border-1 border-red-400 p-4 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username',{required: "Username is required"})} className="text-xl" type="text" placeholder="Enter Username" />
        <br />
        <input {...register("email", {required: "Email is required"})} className="text-xl" type="email" placeholder="Enter Email" />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        <br />
        <input {...register("phone")} className="text-xl" type="tel" placeholder="Enter Phone" />
        <br />
        <input {...register("password", {required: "Password is required"})} className="text-xl" type="password" placeholder="Enter Password" />
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;

















// <Button onClick={handleGithubLogin} variant={"ghost"} className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-sm cursor-pointer text-white mt-2'><FaGithub /> Sign in with Github</Button>
