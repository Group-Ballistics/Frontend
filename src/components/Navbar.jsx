import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 shadow-lg py-3 px-32 flex justify-around items-center text-blue-600 w-full  fixed top-0'>

      <Link to="/" >
        <div className='flex justify-around gap-4'>

          <span className='font-semibold text-lg flex items-center gap-3 '>
            Logo

          </span><span className='font-semibold text-lg flex items-center gap-3 '>
            name

          </span>

        </div>

      </Link>

      <div className='flex items-center gap-5 text-black'>
        <Link to="/" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-200 transition duration-300' >Home</Link>
        <Link to="/about" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-200 transition duration-300' >About</Link>
        <Link to="/" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-200 transition duration-300' >Home</Link>
        <Link to="/" className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-200 transition duration-300' >Home</Link>


      </div>
    </nav>
  )
}

export default Navbar
