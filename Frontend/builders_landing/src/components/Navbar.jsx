import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex '>
    <div className='text-base font-semibold items-center flex-1 '>
    <button className=' mx-6 py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-400 hover:bg-zinc-100 hover:text-black'>Work</button>
    <button className='mx-6'>About</button>
    <button className='mx-6 bg-gradient-to-r from-amber-300 via-cyan-400 to-indigo-400 inline-block text-transparent bg-clip-text'>Contact</button>
    </div>
    </div>
  )
}

export default Navbar