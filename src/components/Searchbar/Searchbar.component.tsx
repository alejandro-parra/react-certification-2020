import React from 'react';
import { MainContainer, BarInput, SearchPlaceholder } from './Searchbar.styled';

const Searchbar = () => {
  return (
    <MainContainer>
      <BarInput placeholder="Busca un video" />
      <SearchPlaceholder />
    </MainContainer>
  );
};

export default Searchbar;
