import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Header from '../../components/Header/Header.component';
import { useYoutubeListFetcher } from '../../utils/hooks/useYoutube';
import Loading from '../../components/Loading/Loading.component';

const MainPage = () => {
  const history = useHistory();
  const location = useLocation();
  const isFirstRender = useRef(false);
  const [searchString, setSearch] = useState(
    location.state ? location.state.searchString : ''
  );
  const { videoList, loadNewVideos, loading } = useYoutubeListFetcher(
    searchString,
    'search'
  );

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
  };

  const handleCardClick = (videoId) => {
    const video = videoList.filter((videoElement) => videoElement.id === videoId)[0];
    history.push({
      pathname: `/watch/${video.id}`,
      state: {
        searchString,
        currentVideo: video,
      },
    });
  };

  const navigateHome = () => {
    setSearch('');
  };

  useEffect(() => {
    if (isFirstRender.current && searchString !== '') {
      const timer = setTimeout(() => {
        history.push({
          pathname: '/',
          state: {
            searchString,
          },
        });
        loadNewVideos(searchString, 'search');
      }, 800);
      return () => clearInterval(timer);
    }
    if (isFirstRender.current) {
      loadNewVideos(searchString, 'search');
    }
    isFirstRender.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  // useEffect(() => {
  //   if (history.action === 'POP') {
  //     loadNewVideos(location.state.searchString, 'search');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.state]);

  if (loading) {
    return (
      <>
        <Header handleInput={handleSearch} homeClick={navigateHome} />
        <Loading />
      </>
    );
  }
  return (
    <>
      <Header handleInput={handleSearch} homeClick={navigateHome} />
      <VideoGrid videos={videoList} clickHandler={handleCardClick} />
    </>
  );
};

export default MainPage;
