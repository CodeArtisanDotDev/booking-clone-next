import React from 'react';
import Container from '../../components/Container';
import SearchList from '../../components/Search/SearchList';
import SearchResult from '../../components/Search/SearchResult';
import MainLayout from '../../layouts/MainLayout';

const Hotels = () => {
  return (
    <MainLayout>
      <Container>
        <div className='flex gap-12'>
          <div className='w-4/12'>
            <SearchResult />
          </div>
          <div className='w-8/12'>
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Hotels;
