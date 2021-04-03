import React from 'react';
import { WatchContainer } from './WatchVideoView.styled';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import VideoList from '../VideoList/VideoList.component';

const WatchVideoView = ({ videoId, title, subtitle, description, videoList }) => {
  return (
    <WatchContainer>
      <VideoPlayer videoId={videoId} title={title} subtitle={subtitle} description={description}/>
      <VideoList videos={videoList} />
    </WatchContainer>
  );
};

export default WatchVideoView;