import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const Fidelity = () => {
  return (
    <div className='p-6 flex gap-12 border mt-12'>
      <FaGlobe className='h-32 w-32 text-orange-400' />
      <div className='space-y-8'>
        <h1 className='text-4xl font-extrabold'>Earn points and win money</h1>
        <h3 className='text-2xl font-bold'>
          connect to your account at booking.com, find the blue logo andstart
          earning pints and miles
        </h3>
        <div className='flex gap-4'>
          <button className='py-2 px-4 border text-late-800 border-blue-900 hover:bg-blue-800 hover:text-white'>
            Login
          </button>
          <button className='py-2 px-4 border text-late-800 border-blue-900 hover:bg-blue-800 hover:text-white'>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fidelity;
