import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { GridContainer } from './VideoGrid.styled';

const VideoGrid = ({ videos, clickHandler }) => {
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
            clickHandler={clickHandler}
            videoId={id}
            mode="grid"
          />
        );
      })}
    </GridContainer>
  );
};

export default VideoGrid;
