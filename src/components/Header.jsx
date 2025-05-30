import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-[#d0d0d2] p-10 flex justify-between items-center">
      <h1 className='font-bold text-5xl text-pink-600'>Header</h1>
    <nav>
        <ul className='flex gap-2'>
            <li>
              <FaCartShopping/>
            </li>
            <li>
              <FaBars/>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Header