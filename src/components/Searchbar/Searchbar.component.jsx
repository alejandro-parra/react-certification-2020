import React from 'react';
import useSearch from '../../utils/hooks/useSearch';
import { MainContainer, BarInput, SearchPlaceholder } from './Searchbar.styled';

const Searchbar = () => {
  const { setSearch } = useSearch();
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
