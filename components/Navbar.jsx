import Link from 'next/link';
import React from 'react';
import { FaBed, FaCarSide, FaPlaneDeparture, FaTaxi } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='w-full bg-blue-900'>
      <div className='max-w-7xl h-32 mx-auto text-white flex items-center justify-between'>
        <Link href={'/'}>
          <span className='font-semibold uppercase cursor-pointer text-2xl'>
            Booking.com
          </span>
        </Link>
        <nav className='flex font-semibold text-lg uppercase gap-6'>
          <button className='py-2 px-4 border border-blue-50'>Login</button>
          <button className='py-2 px-4 border border-blue-50'>Register</button>
        </nav>
      </div>
      <div className='max-w-7xl mx-auto text-white space-y-16  relative pb-12'>
        <ul className='flex items-center gap-12 text-xl font-semibold'>
          <Link href={'/hotels'}>
            <a className='flex items-center gap-3 bg-blue-700 py-3 px-4 cursor-pointer'>
              <FaBed />
              <span>Stays</span>
            </a>
          </Link>
          <li className='flex items-center gap-3'>
            <FaPlaneDeparture />
            <span>Rent</span>
          </li>
          <li className='flex items-center gap-3'>
            <FaCarSide />
            <span>Departures</span>
          </li>
          <li className='flex items-center gap-3'>
            <FaTaxi />
            <span>Transportation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
