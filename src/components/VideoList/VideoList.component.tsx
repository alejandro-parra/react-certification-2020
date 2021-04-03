import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import { ListContainer } from './VideoList.styled';

const VideoList = ({ videos }) => {
  return (
    <ListContainer>
        <p>Videos Similares:</p>
        {videos.map(({ id, title, creationDate, creator, thumbImage, clickHandler }) => {
        return (
            <VideoCard
            key={id}
            title={title}
            creationDate={creationDate}
            creator={creator}
            thumbImage={thumbImage}
            clickHandler={clickHandler.bind(this, id)}
            />
        );
        })}
    </ListContainer>
  );
};

export default VideoList;
