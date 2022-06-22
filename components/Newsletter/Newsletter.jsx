import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className='p-6 flex gap-12 border mt-12 bg-slate-50'>
      <FaEnvelopeOpenText className='h-32 w-32 text-orange-400' />
      <div className='space-y-8'>
        <h1 className='text-4xl font-extrabold'>
          Join ou nexsletter and earn 10%{' '}
        </h1>
        <h3 className='text-2xl font-bold'>
          If you join our newsletter, you can earn 10% on your first trip with
          booking.com
        </h3>
        <div className='flex gap-4'>
          <input type='text' name='' id='' className='w-full py-4' />
          <button className='w-64 py-2 px-4 border text-late-800 border-blue-900 hover:bg-blue-800 hover:text-white'>
            Join Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
