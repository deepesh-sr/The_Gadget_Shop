import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  // creating a visible state variable
  const [visible , setVisible] = useState(false);
  return (
    <div className='flex justify-between py-5 items-center font-medium'>
      <img src="src/assets/thegadgetshop-high-resolution-logo-transparent.png" alt="Thegadgetshop." className='w-40' />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/collection"} className={"flex flex-col items-center gap-1"}>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src="src/assets/search-solid.svg" className='w-5 cursor-pointer' alt="search-icon" />

        <div className='group relative'>
          <img src="src/assets/user-solid.svg" className='w-5 cursor-pointer' alt="profile-icon" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to={"/cart"} className='relative'>
          <img src="src/assets/cart-shopping-solid.svg" alt="cart" className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-amber-800 text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>

        <img onClick={()=>{setVisible(true)}} src="src/assets/bars-solid.svg" alt="menu-icon" className='w-5 cursor-pointer sm:hidden'/>
      </div>

    {/* Sidebar for small screen */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>{setVisible(false)}} className='flex item-center gap-4 p-3 curson-pointer'>
            <img className='h-4 rotate-[-180]' src="src/assets/circle-chevron-down-solid.svg" alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>{setVisible(false)}} className={'py-2 pl-6 border'} to={'/'}>HOME</NavLink>
          <NavLink onClick={()=>{setVisible(false)}} className={'py-2 pl-6 border'} to={'/collection'}>COLLECTION</NavLink>
          <NavLink onClick={()=>{setVisible(false)}} className={'py-2 pl-6 border'} to={'/about'}>ABOUT</NavLink>
          <NavLink onClick={()=>{setVisible(false)}} className={'py-2 pl-6 border'} to={'/contact'}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
