import styled from 'styled-components';

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: ${(props) => props.theme.header.background};
  backdrop-filter: blur(4px);
  box-shadow: 0px 2px 8px rgba(18, 45, 69, 0.2);
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Logo = styled.img`
  height: 5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 20%;
`;

export const LeftContainer = styled(Container)`
  justify-content: flex-start;
`;

export const RightContainer = styled(Container)`
  justify-content: flex-end;
`;
