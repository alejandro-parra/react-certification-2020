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
  background-color: ${(props) => props.theme.dropdown.imageBackground};
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 1.5rem;
`;

export const MenuItem = styled.p`
  color: ${(props) => props.theme.dropdown.menuItem.color};
  background-color: ${(props) => props.theme.dropdown.menuItem.backgroundColor};
  border-bottom: 1px solid ${(props) => props.theme.dropdown.menuItem.borderBottomColor};
  padding: 0.5rem;
  text-align: start;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.dropdown.menuItem.hoverBackground};
  }
`;
