import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { ListContainer } from './VideoList.styled';

const VideoList = ({ videos, clickHandler }) => {
  return (
    <ListContainer>
      {videos.map((video) => {
        return (
          <VideoCard
            key={video.id}
            video={video}
            mode="list"
            clickHandler={clickHandler}
          />
        );
      })}
    </ListContainer>
  );
};

export default VideoList;
