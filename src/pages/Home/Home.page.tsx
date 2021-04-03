import React, { useState } from 'react';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Header from '../../components/Header/Header.component';
import { useYoutubeListFetcher } from './../../utils/hooks/useYoutube';
import SearchType from '../../model/SearchType';
import WatchVideoView from '../../components/WatchVideoView/WatchVideoView.component';
import Loading from '../../components/Loading/Loading.component';
import VideoCardModel from '../../model/VideoCardModel';
import { stringlifyDate } from '../../utils/fns';

function HomePage() {
  const [viewMode, setViewMode] = useState(SearchType.searchTerm);
  const [currentVideo, setCurrentVideo] = useState({
    id: "",
    title: "",
    creationDate: "",
    creator: "",
    thumbImage: "",
    description: ""
  });
  const { videoList, loadNewVideos, loading } = useYoutubeListFetcher('wizeline', viewMode);

  const handleSearch = (searchTerm: string) => {
    setViewMode(SearchType.searchTerm);
    loadNewVideos(searchTerm, SearchType.searchTerm);
  }

  const handleCardClick = (videoId: string) => {
    let video = videoList.filter(video => video.id === videoId)[0];
    setCurrentVideo(video);
    setViewMode(SearchType.relatedVideos);
    loadNewVideos(videoId, SearchType.relatedVideos);
  }

  if(loading){
    return(
      <>
      <Header items={[]} image="" />
      <Loading/>
    </>
    );
  } else {
    return (
      <>
        <Header items={[]} image="" />
        {viewMode === SearchType.searchTerm ? 
          <VideoGrid videos={videoList} clickHandler={handleCardClick}/> : 
          <WatchVideoView 
            videoId={currentVideo.id} 
            title={currentVideo.title} 
            subtitle={`${currentVideo.creator} - ${stringlifyDate(new Date(currentVideo.creationDate))}`} 
            description={currentVideo.description} 
            videoList={videoList}
            clickHandler={handleCardClick}/>
        }
      </>
    );
  }
}

export default HomePage;
