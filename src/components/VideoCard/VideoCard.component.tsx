import React from 'react';
import { stringlifyDate } from '../../utils/fns';
import {
  Card,
  AspectRatioFrame,
  ThumbnailImage,
  InfoContainer,
  Title,
  Creator,
  Subtitle,
} from './VideoCard.styled';

const VideoCard = ({ title, creator, thumbImage, creationDate }) => {
  return (
    <Card>
      <AspectRatioFrame>
        <ThumbnailImage src={thumbImage} alt={title} />
      </AspectRatioFrame>
      <InfoContainer>
        <Title>{title}</Title>
        <Creator>{creator}</Creator>
        <Subtitle>{stringlifyDate(new Date(creationDate))}</Subtitle>
      </InfoContainer>
    </Card>
  );
};

export default VideoCard;
