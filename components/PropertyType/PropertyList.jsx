import React from 'react';
import PropertyItem from './PropertyItem';

const PropertyList = () => {
  const propertyType = [
    {
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg',
      title: 'Hotels',
      content: '1189 hotels ...',
    },
    {
      image:
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg',
      title: 'Appartments',
      content: '3289 hotels ...',
    },
    {
      image:
        'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg',
      title: 'Resorts',
      content: '1789 hotels ...',
    },
    {
      image:
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg',
      title: 'Villas',
      content: '1789 hotels ...',
    },
    {
      image:
        'https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?cs=srgb&dl=pexels-pixabay-314937.jpg&fm=jpg',
      title: 'Cabins',
      content: '1789 hotels ...',
    },
  ];
  return (
    <div className='mt-12 space-y-4 z-0'>
      <h1 className='text-3xl font-bold'>Browse by property type</h1>
      <div className='flex gap-2'>
        {propertyType.map((property) => (
          <PropertyItem property={property} key={property.title} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
