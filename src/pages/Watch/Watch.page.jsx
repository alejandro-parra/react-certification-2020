import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header.component';
import { useYoutubeListFetcher } from '../../utils/hooks/useYoutube';
import Loading from '../../components/Loading/Loading.component';
import WatchVideoView from '../../components/WatchVideoView/WatchVideoView.component';
import { stringlifyDate } from '../../utils/fns';

const WatchPage = () => {
  const history = useHistory();
  const location = useLocation();
  const isFirstRender = useRef(false);
  const [searchString, setSearch] = useState(
    location.state ? location.state.searchString : ''
  );
  if (!location.state.currentVideo) {
    navigateHome();
  }
  const { videoList, loadNewVideos, loading } = useYoutubeListFetcher(
    location.state.currentVideo.id,
    'relatedVideos'
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
    loadNewVideos(video.id, 'relatedVideos');
  };

  const navigateHome = () => {
    history.push({
      pathname: '/',
      state: {
        searchString: '',
      },
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      const timer = setTimeout(() => {
        history.push({
          pathname: '/',
          state: {
            searchString,
          },
        });
      }, 800);
      return () => clearInterval(timer);
    }
    isFirstRender.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  // useEffect(() => {
  //   if (history.action === 'POP') {
  //     loadNewVideos(location.state.currentVideo.id, 'relatedVideos');
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
      <Header items={[]} image="" handleInput={handleSearch} homeClick={navigateHome} />
      <WatchVideoView
        videoId={location.state.currentVideo.id}
        title={location.state.currentVideo.title}
        subtitle={`${location.state.currentVideo.creator} - ${stringlifyDate(
          new Date(location.state.currentVideo.creationDate)
        )}`}
        description={location.state.currentVideo.description}
        videoList={videoList}
        clickHandler={handleCardClick}
      />
    </>
  );
};

export default WatchPage;
