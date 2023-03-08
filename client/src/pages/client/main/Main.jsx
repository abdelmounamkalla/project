import React from 'react'
import Hero from '../../../component/landing/Hero'
import Navbar from '../../../component/landing/Navbar'


const Main = () => {
  return (
    <div className='bg-purple h-screen'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Main