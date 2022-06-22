import React from 'react';
import FeaturedItem from './FeaturedItem';

const Featured = () => {
  const featuredList = [
    {
      image:
        'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?cs=srgb&dl=pexels-pixabay-460672.jpg&fm=jpg',
      title: 'London',
      content: '1189 properties ...',
    },
    {
      image:
        'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?cs=srgb&dl=pexels-quintin-gellar-313782.jpg&fm=jpg',
      title: 'New York',
      content: '3289 properties ...',
    },
    {
      image:
        'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?cs=srgb&dl=pexels-pixabay-2363.jpg&fm=jpg',
      title: 'Paris',
      content: '1789 properties ...',
    },
  ];
  return (
    <div className='flex justify-between gap-6'>
      {featuredList.map((list) => (
        <FeaturedItem list={list} key={list.title} />
      ))}
    </div>
  );
};

export default Featured;
