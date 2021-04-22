import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 98%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: flex-start;
  flex-flow: wrap;
  margin-top: 7rem;
`;

export const EmptyMessage = styled.p`
  padding: 3rem;
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;
