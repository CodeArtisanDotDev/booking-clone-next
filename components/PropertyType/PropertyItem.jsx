import React from 'react';

const PropertyItem = ({ property }) => {
  return (
    <div className='w-1/5 relative'>
      <img src={property.image} className='h-full object-cover' alt='' />
      <div className='absolute bottom-0 text-white p-2'>
        <h1 className='text-2xl font-bold'>{property.title}</h1>
        <p className='text-xl font-semibold'>{property.content}</p>
      </div>
    </div>
  );
};

export default PropertyItem;
