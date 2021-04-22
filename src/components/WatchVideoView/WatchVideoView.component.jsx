import React from 'react';
import { WatchContainer } from './WatchVideoView.styled';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import VideoList from '../VideoList/VideoList.component';

const WatchVideoView = ({ video, videoList, clickHandler }) => {
  return (
    <WatchContainer>
      <VideoPlayer video={video} />
      <VideoList videos={videoList} clickHandler={clickHandler} />
    </WatchContainer>
  );
};

export default WatchVideoView;
