import styled from 'styled-components';

const AppContainer = styled.div`
  body {
    background-color: ${(props) => props.theme.general.background};
  }
  background-color: ${(props) => props.theme.general.background};
  color: ${(props) => props.theme.general.color};
`;

export default AppContainer;
