import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard/VideoCard.component';

const GridContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: center;
  flex-flow: wrap;
  margin-top: 7rem;
`;

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
