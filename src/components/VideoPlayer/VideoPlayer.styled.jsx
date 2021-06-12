import styled from 'styled-components';

export const PlayerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 1rem;
  }
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${(props) => props.theme.videoPlayer.background};
  padding: 1rem;
  button {
    display: none;
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    cursor: pointer;
    button {
      display: inline-block;
    }
  }
`;

export const VideoTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 1.5rem;
  text-align: start;
  font-weight: 700;
`;

export const VideoSubtitle = styled.p`
  width: 100%;
  text-align: start;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.videoPlayer.subtitle};
`;

export const DescriptionSection = styled.p`
  border-top: solid 1px ${(props) => props.theme.videoPlayer.descriptionBorder};
  padding-top: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
  width: 100%;
  max-lines: 0;
`;
