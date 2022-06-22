import React from 'react';
import GuestLoveItems from './GuestLoveItems';

const GuestLoveList = () => {
  const guestLovedHomes = [
    {
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg',
      title: 'Santiago Bernabeu hotes',
      price: 230,
      rating: 8,
    },
    {
      image:
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg',
      title: 'Maxx Royal resort',
      price: 320,
      rating: 7.9,
    },
    {
      image:
        'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg',
      title: 'Viking Suites',
      price: 190,
      rating: 8.9,
    },
    {
      image:
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg',
      title: 'Lotus Orka Beach',
      price: 320,
      rating: 8.7,
    },
  ];
  return (
    <div className='mt-12 space-y-4 z-0'>
      <h1 className='text-3xl font-bold'>Homes guests love</h1>
      <div className='flex gap-2'>
        {guestLovedHomes.map((guestFav) => (
          <GuestLoveItems guestFav={guestFav} key={guestFav.title} />
        ))}
      </div>
    </div>
  );
};

export default GuestLoveList;
