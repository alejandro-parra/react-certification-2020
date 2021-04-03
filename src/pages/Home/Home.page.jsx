import React, { useState, useEffect } from 'react';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Header from '../../components/Header/Header.component';
import { useYoutubeListFetcher } from '../../utils/hooks/useYoutube';
import WatchVideoView from '../../components/WatchVideoView/WatchVideoView.component';
import Loading from '../../components/Loading/Loading.component';
import { stringlifyDate } from '../../utils/fns';

function HomePage() {
  const [viewMode, setViewMode] = useState('search');
  const [searchString, setSearchString] = useState('');
  const [currentVideo, setCurrentVideo] = useState({
    id: '',
    title: '',
    creationDate: '',
    creator: '',
    thumbImage: '',
    description: '',
  });
  const { videoList, loadNewVideos, loading } = useYoutubeListFetcher(
    searchString,
    viewMode
  );

  const handleSearch = (event) => {
    console.log(event.target.value);
    const searchTerm = event.target.value;
    setSearchString(searchTerm);
  };

  const handleCardClick = (videoId) => {
    console.log(videoId);
    const video = videoList.filter((videoElement) => videoElement.id === videoId)[0];
    setCurrentVideo(video);
    setViewMode('relatedVideos');
    loadNewVideos(video.id, 'relatedVideos');
  };

  useEffect(() => {
    console.log('search excecuted');
    if (searchString !== '') {
      const timer = setTimeout(() => {
        console.log('timer fired');
        setViewMode('search');
        loadNewVideos(searchString, 'search');
      }, 800);
      return () => clearInterval(timer);
    }
  }, [searchString]);

  if (loading) {
    return (
      <>
        <Header items={[]} image="" handleInput={handleSearch} />
        <Loading />
      </>
    );
  }
  return (
    <>
      <Header items={[]} image="" handleInput={handleSearch} />
      {viewMode === 'search' ? (
        <VideoGrid videos={videoList} clickHandler={handleCardClick} />
      ) : (
        <WatchVideoView
          videoId={currentVideo.id}
          title={currentVideo.title}
          subtitle={`${currentVideo.creator} - ${stringlifyDate(
            new Date(currentVideo.creationDate)
          )}`}
          description={currentVideo.description}
          videoList={videoList}
          clickHandler={handleCardClick}
        />
      )}
    </>
  );
}

export default HomePage;
