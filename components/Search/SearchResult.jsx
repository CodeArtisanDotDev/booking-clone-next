import React from 'react';

const SearchResult = () => {
  return (
    <div className='sticky top-10 bg-orange-400 text-slate-700 p-6 rounded-lg'>
      <h1 className='text-4xl font-semibold'>Search</h1>
      <div className='mt-8 space-y-2'>
        <h3 className='text-xl font-semibold'>Destination</h3>
        <input type='text' name='' id='' className='w-full py-3' />
      </div>{' '}
      <div className='mt-8 space-y-2'>
        <h3 className='text-xl font-semibold'>Check-in Date</h3>
        <input type='text' name='' id='' className='w-full py-3' />
      </div>{' '}
      <div className='mt-8 space-y-2 mb-8'>
        <h3 className='text-xl font-semibold mb-8'>Options</h3>
        <div className='flex justify-between'>
          <span className='w-full'>Min price night</span>
          <input type='text' name='' id='' className='w-full py-3' />
        </div>
        <div className='flex justify-between'>
          <span className='w-full'>Max price night</span>
          <input type='text' name='' id='' className='w-full py-3' />
        </div>
        <div className='flex justify-between'>
          <span className='w-full'>Adults</span>
          <input type='text' name='' id='' className='w-full py-3' />
        </div>
        <div className='flex justify-between'>
          <span className='w-full'>Children</span>
          <input type='text' name='' id='' className='w-full py-3' />
        </div>
        <div className='flex justify-between'>
          <span className='w-full'>Romm</span>
          <input type='text' name='' id='' className='w-full py-3' />
        </div>
      </div>
      <div className='btn py-4 px-6 w-full bg-blue-700 text-white text-center text-xl'>
        Search
      </div>
    </div>
  );
};

export default SearchResult;
