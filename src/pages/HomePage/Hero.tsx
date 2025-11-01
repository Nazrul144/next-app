"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Roboto } from "next/font/google";
import { useForm } from "react-hook-form";
import z from "zod";

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const formSchema = z.object({
  searchValue: z
    .string()
    .min(2, { message: "Please enter at least 2 characters to search." })
    .max(50, { message: "Search term should be less than 50 characters." }),
});
type SearchFormData = z.infer<typeof formSchema>;

const Hero = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  const handleSearch = (data: SearchFormData) => {
    console.log(data);
  };

  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/heroVideo.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container px-6 py-16 mx-auto text-center flex flex-col justify-center h-full">
          <div className="max-w-2xl mx-auto">
            {/* First Gradient */}
            <h1
              className={`${roboto.className} text-3xl lg:text-6xl bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold mb-4`}
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
            >
              Gear Up for Your Next Game
            </h1>

            {/* Second Gradient */}
            <h2
              className={`${roboto.className} text-2xl lg:text-lg bg-gradient-to-r from-green-400 via-teal-400 to-lime-400 bg-clip-text text-transparent mb-6`}
              style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
            >
              Discover the best sports equipment for football, basketball, badminton, and more. Play better, train harder, and
              elevate your game with our premium gear.
            </h2>
            <div className="w-full max-w-md mx-auto mt-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSearch)}
                  className="flex flex-col md:flex-row w-full  rounded-full border border-green-400/50 p-1 md:p-1 max-w-md mx-auto shadow-lg items-center text-black"
                >
                  <FormField
                    control={form.control}
                    name="searchValue"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Search for football, basketball, badminton..."
                            {...field}
                            className="w-full h-12 px-6 rounded-full border-none text-black bg-transparent !placeholder-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-green-400/70 transition-all duration-300 font-semibold"
                          />
                        </FormControl>
                        {/* <FormMessage /> */}
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="h-12 px-6 mt-2 md:mt-0 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300"
                  >
                    Search
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

// GlowButton.jsx
// "use client"
// import { motion } from "framer-motion"

// export default function GlowButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       className="relative px-8 py-3 font-semibold text-white bg-[#0b0b14] rounded-xl overflow-hidden"
//     >
//       <span className="relative z-10 flex items-center gap-2">
//         Browse Components →
//       </span>
//       {/* Glow border */}
//       <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-70 blur-md transition-all duration-500 group-hover:opacity-100"></span>
//       <span className="absolute inset-[2px] rounded-xl bg-[#0b0b14]"></span>
//     </motion.button>
//   )
// }
