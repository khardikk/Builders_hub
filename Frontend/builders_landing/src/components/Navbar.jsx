import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex '>
    <div className='text-base font-semibold items-center flex-1 '>
    <button className='py-2 my-2 bg-zinc-900 px-3.5 rounded-lg border-stone-500 ring-1 ring-gray-600'>Work</button>
    <button className='mx-6'>About</button>
    <button className='mx-6'>Contact</button>
    </div>
    </div>
  )
}

export default Navbar