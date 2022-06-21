import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Search = () => {
  const [date, setShowdate] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  return (
    <div className='flex bg-white text-slate-600 border-4 border-yellow-400 rounded-lg  w-full absolute -bottom-32 gap-12'>
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
      <div
        onClick={() => setShowdate(!date)}
        className='w-1/3 flex items-center gap-4 relative border-l-4 border-r-4 border-yellow-400 px-2'
      >
        <FaCalendarAlt />
        {date && (
          <>
            <span>{`${format(state[0].startDate, 'dd/MM/yyyy')} to ${format(
              state[0].endDate,
              'dd/MM/yyyy'
            )}`}</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className='w-full absolute top-[86px]'
            />
          </>
        )}
      </div>
      <div className='w-1/3 flex items-center gap-4'>
        <FaCalendarAlt />
        <input type='text' name='' id='' className='w-full py-3 border-none' />
      </div>
      <button className='py-6 px-4 flex gap-3 items-center border bg-blue-600 text-white border-slate-400'>
        <FaSearch className='w-6 h-6' />
        <span>SEARCH</span>
      </button>
    </div>
  );
};

export default Search;
