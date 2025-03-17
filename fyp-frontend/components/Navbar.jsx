'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
const[nav,setnav]=useState(false)


const handlenav=()=>{
    setnav(!nav)
}


  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>

            <div className='cursor-pointer'>
                <Link href='/'>
                <h1>Logo</h1>
                </Link>
            </div>

                <div className='hidden sm:flex'> 

                    <ul className='hidden sm:flex '>

                    <Link href="/">   
                        <li class='headeritems'>Home</li> </Link>
                    <Link href="user">   
                        <li class='headeritems'>Users</li></Link>
                    <Link href="prediction">   
                        <li class='headeritems'>Predictions</li></Link>
                    <Link href="alerts">   
                        <li class='headeritems'>Alerts</li></Link>
                    </ul>
                 </div>
                 <div onClick={handlenav} className='sm:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}    />
                 </div>
         </div>
         {/* <div>
            
         </div> */}

    </nav>
  )
}

export default Navbar
