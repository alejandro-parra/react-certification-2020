import styled from 'styled-components';

export const PlayerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

export const Player = styled.iframe`
  width: 100%;
`;

export const VideoTitle = styled.p`
  font-size: 1.5rem;
  text-align: start;
`;

export const VideoSubtitle = styled.p`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #00000099;
`;

export const DescriptionSection = styled.p`
  border-top: solid 1px black;
  padding-top: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
  width: 100%;
`;
