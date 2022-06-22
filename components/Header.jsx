import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <div className='w-full bg-blue-900 py-20 -mt-10'>
      <div className='max-w-7xl mx-auto text-white space-y-16  relative'>
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
