import React from 'react'

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero


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
