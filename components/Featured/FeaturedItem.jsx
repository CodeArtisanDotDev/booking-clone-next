import React from 'react';

const FeaturedItem = ({ list }) => {
  return (
    <div className='w-1/3  text-slate-800 space-y-4 relative'>
      <img src={list.image} alt='' className='h-full object-cover' />
      <div className='absolute bottom-0 text-white px-4 shadow-sm pb-2 '>
        <h1 className='text-2xl font-bolder'>{list.title}</h1>
        <p className='text-lg font-bold'>{list.content}</p>
      </div>
    </div>
  );
};

export default FeaturedItem;
