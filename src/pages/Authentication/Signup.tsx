import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {
  return (
    <div>
       <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 lg:mt-28">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <Image
            className="w-auto h-7 sm:h-8"
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
        Welcome Back
              </h1>

        <p className="mt-1 text-center text-gray-900 font-bold dark:text-gray-400">
          Signup
        </p>

        <form>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Username"
              aria-label="Username"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="number"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            
            <Button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize cursor-pointer w-full">
              Sign In
            </Button>
          </div>
          <div className='w-full  mt-4'>
          <Button variant={"ghost"} className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-sm cursor-pointer text-white mt-2'><FcGoogle /> Sign in with Google</Button>


          <Button variant={"ghost"} className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-sm cursor-pointer text-white mt-2'><FaGithub /> Sign in with Github</Button>

          <Button variant={"ghost"} className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-sm cursor-pointer text-white mt-2'><BsFacebook/> Sign in with Facebook</Button>

        </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Signup