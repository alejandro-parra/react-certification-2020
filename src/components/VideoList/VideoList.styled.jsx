import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 1rem;
  max-height: 150vh;
  overflow-y: scroll;

  @media (max-width: 900px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    width: 80%;
    max-height: none;
    overflow-y: hidden;
  }
`;
