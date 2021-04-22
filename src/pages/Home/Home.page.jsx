import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../../state/GlobalStateProvider';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Header from '../../components/Header/Header.component';
import { useYoutubeListFetcher } from '../../utils/hooks/useYoutube';
import WatchVideoView from '../../components/WatchVideoView/WatchVideoView.component';
import Loading from '../../components/Loading/Loading.component';
import { stringlifyDate } from '../../utils/fns';

function HomePage() {
  const [viewMode, setViewMode] = useState('search');
  const { state, dispatch } = useGlobalState();
  const [currentVideo, setCurrentVideo] = useState({
    id: '',
    title: '',
    creationDate: '',
    creator: '',
    thumbImage: '',
    description: '',
  });
  const { videoList, loadNewVideos, loading } = useYoutubeListFetcher(
    state.searchTerm,
    viewMode
  );

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    dispatch({ type: 'CHANGE_SEARCH', payload: searchTerm });
  };

  const handleCardClick = (videoId) => {
    const video = videoList.filter((videoElement) => videoElement.id === videoId)[0];
    setCurrentVideo(video);
    setViewMode('relatedVideos');
    loadNewVideos(video.id, 'relatedVideos');
  };

  const navigateHome = () => {
    setViewMode('search');
    loadNewVideos('', 'search');
  };

  useEffect(() => {
    if (state.searchTerm !== '') {
      const timer = setTimeout(() => {
        setViewMode('search');
        loadNewVideos(state.searchTerm, 'search');
      }, 800);
      return () => clearInterval(timer);
    }
  }, [state.searchTerm]);

  if (loading) {
    return (
      <>
        <Header items={[]} image="" handleInput={handleSearch} homeClick={navigateHome} />
        <Loading />
      </>
    );
  }
  return (
    <>
      <Header items={[]} image="" handleInput={handleSearch} homeClick={navigateHome} />
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
