import styled from 'styled-components';

export const PlayerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

export const AspectRatioFrame = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
`;

export const AspectRatioInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Player = styled.iframe`
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: white;
  padding: 1rem;
`;

export const VideoTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 1.5rem;
  text-align: start;
`;

export const VideoSubtitle = styled.p`
  width: 100%;
  text-align: start;
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
  max-lines: 0;
`;
