import Footer from '@/shared/Footer'
import Navbar from '@/shared/Navbar'
import React from 'react'

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <div className='w-7xl mx-auto mt-20 min-h-dvh px-2 lg:px-0'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default CommonLayout