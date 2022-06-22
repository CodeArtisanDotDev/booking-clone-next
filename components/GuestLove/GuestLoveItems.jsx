import React from 'react';

const GuestLoveItems = ({ guestFav }) => {
  return (
    <div className='w-1/4'>
      <img src={guestFav.image} className='h-full object-cover' alt='' />
      <div className='text-slate-900 p-2 space-y-3'>
        <h1 className='text-2xl font-bold'>{guestFav.title}</h1>
        <h3 className='text-xl font-semibold'>{guestFav.price} €</h3>
        <div className='flex items-center gap-4 '>
          <button className='py-2 px-4 text-white bg-blue-800'>
            {guestFav.rating}
          </button>
          <div className=' flex gap-3'>
            <span>Excellent</span>
            <span>3200 experiences</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestLoveItems;
