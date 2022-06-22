import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import Options from './Options';

const Search = () => {
  const [date, setShowdate] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    rooms: 1,
  });
  const handleOption = (name, opereation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opereation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className='flex z-10 bg-white text-slate-600 border-4 border-yellow-400 rounded-lg  w-full absolute -bottom-32 gap-12'>
      <div className='w-1/3 flex items-center gap-4 px-2'>
        <FaCalendarAlt />
        <input
          type='text'
          name=''
          id=''
          className='w-full py-3 border-none'
          placeholder='where are you going'
        />
      </div>
      {/* input desgtination */}
      <div
        onClick={() => setShowdate(!date)}
        className='w-1/3 flex items-center gap-4 relative border-l-4 border-r-4 border-yellow-400 px-2'
      >
        <FaCalendarAlt />
        <>
          <span>{`${format(state[0].startDate, 'dd/MM/yyyy')} to ${format(
            state[0].endDate,
            'dd/MM/yyyy'
          )}`}</span>
          {date && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className='w-full absolute top-[86px]'
            />
          )}
        </>
      </div>
      {/* input date range */}
      <div className='w-1/3 flex items-center gap-4 relative'>
        <FaCalendarAlt />
        <span onClick={() => setShowOptions(!showOptions)}>
          {`${options.adult} adults - ${options.children} children - ${options.rooms} room(s)`}
        </span>
        {showOptions && (
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
                <button
                  disabled={options.children <= 1}
                  onClick={() => handleOption('children', 'd')}
                  className='py-2 px-4 bg-blue-800 text-white border border-blue-50'
                >
                  -
                </button>
                <span className='font-semibold'>{options.children}</span>
                <button
                  onClick={() => handleOption('children', 'i')}
                  className='py-2 px-4 bg-blue-800 text-white border border-blue-50'
                >
                  +
                </button>
              </div>
            </div>{' '}
            <div className='flex items-center justify-between p-3'>
              <span className='text-lg font-semibold'>Rooms</span>
              <div className='flex items-center gap-4'>
                <button
                  disabled={options.rooms <= 1}
                  onClick={() => handleOption('rooms', 'd')}
                  className='py-2 px-4 bg-blue-800 text-white border border-blue-50'
                >
                  -
                </button>
                <span className='font-semibold'>{options.rooms}</span>
                <button
                  onClick={() => handleOption('rooms', 'i')}
                  className='py-2 px-4 bg-blue-800 text-white border border-blue-50'
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* input Options */}
      <button className='py-6 px-4 flex gap-3 items-center border bg-blue-600 text-white border-slate-400'>
        <FaSearch className='w-6 h-6' />
        <span>SEARCH</span>
      </button>
      {/* search button */}
    </div>
  );
};

export default Search;
