import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const MainContainer = styled.div`
  background: ${(props) => props.theme.searchBar.background};
  border: 1px solid ${(props) => props.theme.searchBar.borderColor};
  box-shadow: 0px 2px 8px ${(props) => props.theme.searchBar.boxShadow};
  backdrop-filter: blur(2px);
  padding: 0.6rem;
  border-radius: 10px;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BarInput = styled.input`
  width: 95%;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${(props) => props.theme.searchBar.inputPlaceholder};
  &::placeholder {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchPlaceholder = styled(SearchIcon)`
  color: ${(props) => props.theme.searchBar.inputPlaceholder};
  font-size: 1.2rem;
`;
