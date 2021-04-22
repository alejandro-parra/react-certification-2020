import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useAuth } from '../../providers/Auth';
import { useGlobalState } from '../../state/GlobalStateProvider';
import { stringlifyDate } from '../../utils/fns';
import { LikeButton, RedLikeIcon } from '../VideoCard/VideoCard.styled';
import {
  PlayerContainer,
  Player,
  VideoTitle,
  VideoSubtitle,
  DescriptionSection,
  AspectRatioFrame,
  AspectRatioInnerWrapper,
  VideoDetailsContainer,
} from './VideoPlayer.styled';

const VideoPlayer = ({ video }) => {
  const { authenticated } = useAuth();
  const { dispatch } = useGlobalState();
  const role = 'youtube-video';

  const handleLikeClick = (event) => {
    event.stopPropagation();
    if (!video.favorited) {
      dispatch({
        type: 'ADD_FAVORITE',
        payload: video,
      });
    } else {
      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: video.id,
      });
    }
  };
  return (
    <PlayerContainer>
      <AspectRatioFrame>
        <AspectRatioInnerWrapper>
          <Player
            role={role}
            frameBorder="0"
            id="ytplayer"
            type="text/html"
            title={video.title}
            src={`https://www.youtube.com/embed/${video.id}?autoplay=0`}
          />
        </AspectRatioInnerWrapper>
      </AspectRatioFrame>
      <VideoDetailsContainer>
        <VideoTitle>{video.title}</VideoTitle>
        <VideoSubtitle>{`${video.creator} - ${stringlifyDate(
          new Date(video.creationDate)
        )}`}</VideoSubtitle>
        <DescriptionSection>{video.description}</DescriptionSection>
        {authenticated ? (
          <LikeButton onClick={handleLikeClick}>
            {video.favorited ? <RedLikeIcon /> : <FavoriteBorderIcon />}
          </LikeButton>
        ) : null}
      </VideoDetailsContainer>
    </PlayerContainer>
  );
};

export default VideoPlayer;
