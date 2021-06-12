import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { EmptyMessage, GridContainer } from './VideoGrid.styled';

const VideoGrid = ({ videos, clickHandler }) => {
  return (
    <GridContainer>
      {videos.length === 0 ? (
        <EmptyMessage>Actualmente no hay videos favoritos en tu cuenta.</EmptyMessage>
      ) : (
        videos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              video={video}
              mode="grid"
              clickHandler={clickHandler}
            />
          );
        })
      )}
    </GridContainer>
  );
};

export default VideoGrid;
