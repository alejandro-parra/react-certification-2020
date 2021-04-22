import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { stringlifyDate } from '../../utils/fns';
import {
  GridCard,
  ListCard,
  AspectRatioFrame,
  ThumbnailImage,
  InfoContainer,
  Title,
  Creator,
  Subtitle,
  LikeButton,
  RedLikeIcon,
} from './VideoCard.styled';
import { useAuth } from '../../providers/Auth';
import { useGlobalState } from '../../state/GlobalStateProvider';

const VideoCard = ({ video, clickHandler, mode }) => {
  const { dispatch } = useGlobalState();
  const { authenticated } = useAuth();

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

  const cardContent = (
    <>
      <AspectRatioFrame>
        <ThumbnailImage src={video.thumbImage} alt={video.title} />
      </AspectRatioFrame>
      <InfoContainer>
        <Title>{video.title}</Title>
        <Creator>{video.creator}</Creator>
        <Subtitle>{stringlifyDate(new Date(video.creationDate))}</Subtitle>
        {authenticated ? (
          <LikeButton onClick={handleLikeClick}>
            {video.favorited ? <RedLikeIcon /> : <FavoriteBorderIcon />}
          </LikeButton>
        ) : null}
      </InfoContainer>
    </>
  );
  if (mode === 'grid') {
    return (
      <GridCard onClick={() => clickHandler(video)} role="button">
        {cardContent}
      </GridCard>
    );
  }
  return (
    <ListCard onClick={() => clickHandler(video)} role="button">
      {cardContent}
    </ListCard>
  );
};

export default VideoCard;
