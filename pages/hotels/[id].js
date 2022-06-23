import React from 'react';
import { FaAddressCard } from 'react-icons/fa';
import Container from '../../components/Container';
import MainLayout from '../../layouts/MainLayout';

const HotelItem = () => {
  const images = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg',
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?cs=srgb&dl=pexels-pixabay-261169.jpg&fm=jpg',
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?cs=srgb&dl=pexels-pixabay-161758.jpg&fm=jpg',
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg',
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?cs=srgb&dl=pexels-pixabay-261169.jpg&fm=jpg',
    },
    {
      id: 6,
      image:
        'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?cs=srgb&dl=pexels-pixabay-161758.jpg&fm=jpg',
    },
    {
      id: 7,
      image:
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg',
    },
    {
      id: 8,
      image:
        'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?cs=srgb&dl=pexels-pixabay-261169.jpg&fm=jpg',
    },
    {
      id: 9,
      image:
        'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?cs=srgb&dl=pexels-pixabay-161758.jpg&fm=jpg',
    },
  ];
  return (
    <MainLayout>
      <Container>
        <div className='min-h-screen'>
          <header className='flex justify-between'>
            <div className='left space-y-3'>
              <h1 className='text-4xl'>Maxx Royal Resort</h1>
              <h3 className='flex gap-4 items-center'>
                <FaAddressCard /> <span> 500 m from city center</span>
              </h3>
              <h3 className='text-blue-800 text-2xl'>
                Great location, public transportation is easily accessible
              </h3>
            </div>
            <div className='right'>
              <button className='py-4 px-4 bg-blue-800 text-white'>
                Reserve or Book now!
              </button>
            </div>
          </header>
          <main className='flex gap-3 mt-20 flex-wrap'>
            {images.map((image) => (
              <div className='w-96 w-full' key={image.id}>
                <img src={image.image} alt='' className='object-cover w-full' />
              </div>
            ))}
            <Container>
              <div className='space-y-6'>
                <h1 className='text-3xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <h3 className='text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  tempora, aliquam exercitationem unde asperiores quos est
                  soluta provident eius debitis nihil voluptatibus, distinctio
                  amet deleniti consectetur libero velit aut autem.
                </p>
              </div>
            </Container>
          </main>
        </div>
      </Container>
    </MainLayout>
  );
};

export default HotelItem;
