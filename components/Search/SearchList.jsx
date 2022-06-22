import React from 'react';

const SearchList = () => {
  return (
    <div className='flex gap-4 p-2 border mb-10'>
      <div className='w-4/12'>
        <img
          src='https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?cs=srgb&dl=pexels-jimmy-chan-1458457.jpg&fm=jpg'
          alt=''
          className='h-full object-cover'
        />
      </div>
      <div className='w-8/12 flex justify-between'>
        <div className='left flex flex-col justify-between'>
          <h1 className='text-2xl text-blue-800'>Maxx Royal Resort</h1>
          <small className='text-green-700'>free cancellation</small>
          <p>500m from center</p>
          <p>2 bedroom, 1 bathroom, balcony, mini-bar</p>
          <p>Free airport taxi</p>
        </div>
        <div className='flex flex-col justify-between right'>
          <div className='flex gap-2 items-center justify-between'>
            <p>Excellent</p>
            <button className='p-2  bg-blue-800 text-white'>8.9</button>
          </div>
          <div className='flex flex-col'>
            <p className='text-2xl text-center'>230€</p>
            <button className='p-2  bg-blue-800 text-white'>
              Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
