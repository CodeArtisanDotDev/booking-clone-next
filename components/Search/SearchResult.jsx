import React from 'react';

const SearchResult = ({ date, options, destination }) => {
  console.log(date);
  return (
    <div className='sticky top-10 bg-orange-400 text-slate-700 p-6 rounded-lg'>
      <h1 className='text-4xl font-semibold'>Search</h1>
      <div className='mt-8 space-y-2'>
        <h3 className='text-xl font-semibold'>Destination</h3>
        <input
          type='text'
          name=''
          id=''
          className='w-full py-3'
          defaultValue={destination}
        />
      </div>{' '}
      <div className='mt-8 space-y-4'>
        <h3 className='text-xl font-semibold'>Check-in Date</h3>
        <p type='text' name='' id='' className='w-full py-3 bg-white'>
          {`from ${new Date(date[0].startDate).toLocaleDateString(
            'fr-FR'
          )} to ${new Date(date[0].endDate).toLocaleDateString('fr-FR')}`}
        </p>
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
          <input
            type='text'
            name=''
            id=''
            className='w-full py-3'
            defaultValue={options.adult}
          />
        </div>
        <div className='flex justify-between'>
          <span className='w-full'>Children</span>
          <input
            type='text'
            name=''
            id=''
            className='w-full py-3'
            defaultValue={options.children}
          />
        </div>
        <div className='flex justify-between'>
          <span className='w-full'>Romm</span>
          <input
            type='text'
            name=''
            id=''
            className='w-full py-3'
            defaultValue={options.rooms}
          />
        </div>
      </div>
      <div className='btn py-4 px-6 w-full bg-blue-700 text-white text-center text-xl'>
        Search
      </div>
    </div>
  );
};

export default SearchResult;
