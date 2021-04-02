import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { GridContainer } from './VideoGrid.styled';

const VideoGrid = ({ videos }) => {
  return (
    <GridContainer>
      {videos.map(({ id, title, creationDate, creator, thumbImage }) => {
        return (
          <VideoCard
            key={id}
            title={title}
            creationDate={creationDate}
            creator={creator}
            thumbImage={thumbImage}
          />
        );
      })}
    </GridContainer>
  );
};

export default VideoGrid;
