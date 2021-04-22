import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading.component';
import WatchVideoView from '../../components/WatchVideoView/WatchVideoView.component';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout.component';
import useSearch from '../../utils/hooks/useSearch';

const WatchFavoritesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { searchString, loading, videoList } = useSearch();

  const handleCardClick = (video) => {
    history.push({
      pathname: `/watch/favorites/${video.id}`,
      state: {
        searchString,
        currentVideo: video,
        mode: 'favorites',
      },
    });
  };

  return (
    <DefaultLayout>
      {loading && <Loading />}
      {!loading && (
        <WatchVideoView
          video={location.state.currentVideo}
          videoList={videoList}
          clickHandler={handleCardClick}
        />
      )}
    </DefaultLayout>
  );
};

export default WatchFavoritesPage;
