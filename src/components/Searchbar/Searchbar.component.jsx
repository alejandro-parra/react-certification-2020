import React from 'react';
import { MainContainer, BarInput, SearchPlaceholder } from './Searchbar.styled';

const Searchbar = ({ handleInput }) => {
  return (
    <MainContainer>
      <BarInput placeholder="Busca un video" onChange={handleInput} />
      <SearchPlaceholder />
    </MainContainer>
  );
};

export default Searchbar;
