import React from 'react';
import mockVideos from '../../data/mock-videos.json';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Header from '../../components/Header/Header.component'

function HomePage() {
  let videoList = mockVideos.items.filter(({id}) => {
     return id.kind === 'youtube#video' 
    }).map(({etag, snippet}) => {
    return {
      id: etag,
      title: snippet.title,
      creationDate: snippet.publishedAt,
      creator: snippet.channelTitle,
      thumbImage: snippet.thumbnails.high.url ?? snippet.thumbnails.medium.url ?? snippet.thumbnails.default.url
    }
  });
  

  return (
    <>
      <Header/>
      <VideoGrid videos={videoList}/>
    </>
  );
}

export default HomePage;
