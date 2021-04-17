import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileImage = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: black;
  background-image: ${(props) => props.image};
  border-radius: 1.5rem;
`;

export const MenuItem = styled.p`
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  text-align: start;

  &:hover {
    cursor: pointer;
    background-color: gray;
  }
`;
