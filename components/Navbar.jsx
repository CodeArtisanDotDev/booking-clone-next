import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full bg-blue-900'>
      <div className='max-w-7xl h-32 mx-auto text-white flex items-center justify-between'>
        <span className='font-semibold text-lg uppercase'>Booking.com</span>
        <nav className='flex font-semibold text-lg uppercase gap-6'>
          <button className='py-2 px-4 border border-blue-50'>Login</button>
          <button className='py-2 px-4 border border-blue-50'>Register</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
