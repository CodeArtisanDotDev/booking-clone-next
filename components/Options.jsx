import React from 'react';

const Options = ({ options, setOptions }) => {
  const handleOption = (name, opereation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opereation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className='w-full absolute top-[86px] bg-white text-slate-600 border space-y-2'>
      <div className='flex items-center justify-between p-3'>
        <span className='text-lg font-semibold'>Adults</span>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => handleOption('adult', 'd')}
            disabled={options.adult <= 1}
            className='py-2 px-4 bg-blue-800 text-white border border-blue-50'
          >
            -
          </button>
          <span className='font-semibold'>{options.adult}</span>
          <button
            onClick={() => handleOption('adult', 'i')}
            className='py-2 px-4 bg-blue-800 text-white border border-blue-50'
          >
            +
          </button>
        </div>
      </div>{' '}
      <div className='flex items-center justify-between p-3'>
        <span className='text-lg font-semibold'>Children</span>
        <div className='flex items-center gap-4'>
          <button className='py-2 px-4 bg-blue-800 text-white border border-blue-50'>
            -
          </button>
          <span className='font-semibold'>1</span>
          <button className='py-2 px-4 bg-blue-800 text-white border border-blue-50'>
            +
          </button>
        </div>
      </div>{' '}
      <div className='flex items-center justify-between p-3'>
        <span className='text-lg font-semibold'>Rooms</span>
        <div className='flex items-center gap-4'>
          <button className='py-2 px-4 bg-blue-800 text-white border border-blue-50'>
            -
          </button>
          <span className='font-semibold'>1</span>
          <button className='py-2 px-4 bg-blue-800 text-white border border-blue-50'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
