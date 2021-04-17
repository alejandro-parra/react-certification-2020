import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const MainContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 2px 8px rgba(18, 45, 69, 0.1);
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

  &::placeholder {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchPlaceholder = styled(SearchIcon)`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
`;
