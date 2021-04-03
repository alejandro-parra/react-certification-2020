import React from 'react';
import { stringlifyDate } from '../../utils/fns';
import {
  GridCard,
  AspectRatioFrame,
  ThumbnailImage,
  InfoContainer,
  Title,
  Creator,
  Subtitle,
} from './VideoCard.styled';

const VideoCard = ({ title, creator, thumbImage, creationDate, clickHandler}) => {
  return (
    <GridCard onClick={clickHandler}>
      <AspectRatioFrame>
        <ThumbnailImage src={thumbImage} alt={title} />
      </AspectRatioFrame>
      <InfoContainer>
        <Title>{title}</Title>
        <Creator>{creator}</Creator>
        <Subtitle>{stringlifyDate(new Date(creationDate))}</Subtitle>
      </InfoContainer>
    </GridCard>
  );
};

export default VideoCard;
