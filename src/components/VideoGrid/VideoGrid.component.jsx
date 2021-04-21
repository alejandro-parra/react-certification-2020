import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { GridContainer } from './VideoGrid.styled';

const VideoGrid = ({ videos, clickHandler }) => {
  return (
    <GridContainer>
      {videos.map((video) => {
        return (
          <VideoCard
            key={video.id}
            video={video}
            mode="grid"
            clickHandler={clickHandler}
          />
        );
      })}
    </GridContainer>
  );
};

export default VideoGrid;
