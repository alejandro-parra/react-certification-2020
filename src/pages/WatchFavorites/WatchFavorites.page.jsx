import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading.component';
import WatchVideoView from '../../components/WatchVideoView/WatchVideoView.component';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout.component';
import useSearch from '../../utils/hooks/useSearch';
import { useGlobalState } from '../../state/GlobalStateProvider';

const WatchFavoritesPage = () => {
  const history = useHistory();
  const { dispatch } = useGlobalState();
  const location = useLocation();
  const { searchString, loading, videoList, setSearch } = useSearch();

  useEffect(() => {
    console.log('setting setter in context');
    dispatch({ type: 'SET_SEARCH_FUNCTION', payload: setSearch });
  }, [setSearch]);

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
