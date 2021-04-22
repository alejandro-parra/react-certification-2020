import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { EmptyMessage } from '../VideoGrid/VideoGrid.styled';
import { ListContainer } from './VideoList.styled';

const VideoList = ({ videos, clickHandler }) => {
  return (
    <ListContainer>
      {videos.length === 0 ? (
        <EmptyMessage>Actualmente no hay videos favoritos en tu cuenta.</EmptyMessage>
      ) : (
        videos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              video={video}
              mode="list"
              clickHandler={clickHandler}
            />
          );
        })
      )}
    </ListContainer>
  );
};

export default VideoList;
