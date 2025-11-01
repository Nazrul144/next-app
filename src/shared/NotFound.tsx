'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const router = useRouter()
  return (
    <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
      {/* Left content */}
      <div className="w-full lg:w-1/2">
        <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Sorry, the page you are looking for doesn&apos;t exist. Here are some helpful links:
        </p>

        <div className="flex flex-col sm:flex-row items-center mt-6 gap-3">
          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-full sm:w-auto px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Go back</span>
          </button>

          {/* Take Me Home Button */}
          <button
            onClick={() => router.push("/")}
            className="w-full sm:w-auto px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Take me home
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
        <Image width={500} height={500}
          className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
          src="/notFound.png"
          alt="Not found"
        />
      </div>
    </div>
  )
}

export default NotFound