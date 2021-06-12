import React from 'react';
import { MainContainer, BarInput, SearchPlaceholder } from './Searchbar.styled';

const Searchbar = ({ setSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  };

  return (
    <MainContainer>
      <BarInput placeholder="Busca un video" onChange={handleSearch} />
      <SearchPlaceholder />
    </MainContainer>
  );
};

export default Searchbar;
