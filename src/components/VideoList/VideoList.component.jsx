import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { ListContainer } from './VideoList.styled';

const VideoList = ({ videos, clickHandler }) => {
  return (
    <ListContainer>
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
            mode="list"
          />
        );
      })}
    </ListContainer>
  );
};

export default VideoList;
