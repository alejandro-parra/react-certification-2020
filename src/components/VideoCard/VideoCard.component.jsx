import React from 'react';
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
} from './VideoCard.styled';

const VideoCard = ({
  title,
  creator,
  thumbImage,
  creationDate,
  clickHandler,
  videoId,
  mode,
}) => {
  const cardContent = (
    <>
      <AspectRatioFrame>
        <ThumbnailImage src={thumbImage} alt={title} />
      </AspectRatioFrame>
      <InfoContainer>
        <Title>{title}</Title>
        <Creator>{creator}</Creator>
        <Subtitle>{stringlifyDate(new Date(creationDate))}</Subtitle>
      </InfoContainer>
    </>
  );
  if (mode === 'grid') {
    return <GridCard onClick={() => clickHandler(videoId)}>{cardContent}</GridCard>;
  }
  return <ListCard onClick={() => clickHandler(videoId)}>{cardContent}</ListCard>;
};

export default VideoCard;
