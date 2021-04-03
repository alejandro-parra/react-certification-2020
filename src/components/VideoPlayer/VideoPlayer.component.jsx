import React from 'react';
import {
  PlayerContainer,
  Player,
  VideoTitle,
  VideoSubtitle,
  DescriptionSection,
  AspectRatioFrame,
  AspectRatioInnerWrapper,
} from './VideoPlayer.styled';

const VideoPlayer = ({ videoId, title, subtitle, description }) => {
  const role = 'youtube-video';
  return (
    <PlayerContainer>
      <AspectRatioFrame>
        <AspectRatioInnerWrapper>
          <Player
            role={role}
            frameBorder="0"
            id="ytplayer"
            type="text/html"
            title={title}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          />
        </AspectRatioInnerWrapper>
      </AspectRatioFrame>
      <VideoTitle>{title}</VideoTitle>
      <VideoSubtitle>{subtitle}</VideoSubtitle>
      <DescriptionSection>{description}</DescriptionSection>
    </PlayerContainer>
  );
};

export default VideoPlayer;
