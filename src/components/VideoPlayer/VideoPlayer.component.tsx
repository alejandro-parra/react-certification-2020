import React from 'react';
import { PlayerContainer, Player, VideoTitle, VideoSubtitle, DescriptionSection } from './VideoPlayer.styled';

const VideoPlayer = ({ videoId, title, subtitle, description }) => {
  return (
    <PlayerContainer>
        <Player role="youtube-video" frameBorder="0" id="ytplayer" type="text/html" title={title} src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}/>
        <VideoTitle>{title}</VideoTitle>
        <VideoSubtitle>{subtitle}</VideoSubtitle>
        <DescriptionSection>{description}</DescriptionSection>
    </PlayerContainer>
  );
};

export default VideoPlayer;