import React from 'react';
import Container from '../../components/Container';
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyType/PropertyList';
import MainLayout from '../../layouts/MainLayout';

const Hotels = () => {
  return (
    <MainLayout>
      <Container>
        <h1 className='text-4xl font-extrabold'>Hotels Page</h1>
      </Container>
    </MainLayout>
  );
};

export default Hotels;
