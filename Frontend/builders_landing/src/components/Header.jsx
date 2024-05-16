import React, { useEffect, useState } from 'react'
import headergraphic from '../assets/headergraphic.jpg'
import buildershublogo from '../assets/BHL2T.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Live from '../assets/live.gif'
import './Header.css'

const Header = () => {
  const [builderCount,setBuilderCount] = useState(0)

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://discord.com/api/v9/invites/hWa4dXGZEY?with_counts=true&with_expiration=true")
          setBuilderCount(response.data.approximate_member_count)
        } catch (error) {
          console.error("Error fetching the data",error)
        }
      }
      fetchData()
  },[])

  return (
    <div className='flex flex-col justify-center items-center h-screen mb-24 max-sm:mb-0 md:max-xl:mb-0'>
      <div className='max-w-5xl flex flex-col items-center z-[1]'>
        <img src={buildershublogo} alt="builders" className="w-60 h-86 object-cover my-10 mt-48 hover:animate-pulse hover:cursor-pointer max-[480px]:w-[13rem] max-[480px]:mt-16 max-[380px]:mt-[15rem]"/>
    <h1  className="bg-gradient-to-b from-white via-slate-200 to-slate-300 inline-block text-transparent bg-clip-text text-8xl font-bold font-Inter leading-none max-[480px]:text-5xl md:max-xl:text-6xl md:max-xl:mb-4 ">
    We Build Stuff<br></br>
    We are Builders Hub.
    </h1>
    <p className='text-3xl leading-normal my-5 text-gray-300 font-DMSans font-normal max-[480px]:w-[22rem] max-[480px]:text-2xl'>We are a community of builders and we believe in building projects to completion. 
      We collaborate to make the building experience better, faster and more enjoyable.</p></div>
    <Link to='https://discord.gg/kcVk6aHP' className='z-[2]'><button className='ring-2 ring-neutral-300 rounded-lg py-3 px-16 font-Inter font-semibold text-base md:max-xl:mb-8 z-[2]  hover:bg-zinc-100 hover:text-black hover:cursor-pointer'>Join Us</button></Link>
    <div className='flex justify-center items-center'>
      <div class="blob red"></div>
      <h2 className='text-2xl  leading-normal my-5 text-gray-300 font-DMSans font-bold max-[480px]:w-[16rem] max-[480px]:text-2xl'>Builders Count : {builderCount} </h2>
    </div>
    </div>

    
  )
}

export default Header