import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <footer className={`${roboto.className} bg-gray-50`}>
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1">
            <div>
              <Image src="/logo.svg" alt="NextApp Logo" width={150} height={40} className="w-auto h-7" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                NextApp
              </h1>
            </div>
          </div>

          <div className="flex gap-4 mt-8 ">
            <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
            <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600 cursor-pointer" />
            <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700 cursor-pointer" />
            <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 cursor-pointer" />
          </div>

          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            A modern sport-focused e-commerce website where users can easily explore and purchase a wide range of sportswear,
            gear, and accessories. Built for athletes and fitness enthusiasts to find everything they need in one place.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button
              className=" cursor-pointer flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-purple-600 capitalize transition-all duration-300 transform border border-purple-400 rounded-md sm:mx-2 sm:mt-0 sm:w-auto
             hover:bg-purple-50 dark:text-purple-300 dark:border-purple-500 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
                  fill="currentColor"
                />
              </svg>
              <span className="mx-1">View Demo</span>
            </button>

            <Link
              href="/signup"
              className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize rounded-md sm:mx-2 sm:order-2 sm:w-auto
             bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
             transition-all duration-300 transform hover:scale-105 hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Get started
            </Link>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">© Copyright 2025. All Rights Reserved.</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            >
              Teams
            </a>
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
