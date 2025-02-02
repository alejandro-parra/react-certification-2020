import styled from 'styled-components';

const Loading = styled.div`
  background-color: #000000cc;
  p {
    color: white;
  }
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export default Loading;
