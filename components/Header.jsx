import React from 'react';
import { FaPlaneDeparture, FaTaxi, FaCarSide, FaBed } from 'react-icons/fa';
import Search from './Search';

const Header = () => {
  return (
    <div className='w-full bg-blue-900 py-20'>
      <div className='max-w-7xl mx-auto text-white space-y-16  relative'>
        <ul className='flex items-center gap-12 text-xl font-semibold'>
          <li className='flex items-center gap-3 bg-blue-700 py-3 px-4'>
            <FaBed />
            <span>Stays</span>
          </li>
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
        {/* close links */}
        <div className='hero space-y-12 py-6 text-white'>
          <h1 className='text-white text-6xl font-extrabold'>
            Find your next stay
          </h1>
          <h3 className='text-white text-3xl'>
            Search deals on hotels, homes, and much more...
          </h3>
        </div>
        {/* close hero */}
        <Search />
        {/* close search */}
      </div>
    </div>
  );
};

export default Header;
