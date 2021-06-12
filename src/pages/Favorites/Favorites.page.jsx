import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Loading from '../../components/Loading/Loading.component';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout.component';
import useSearch from '../../utils/hooks/useSearch';
import { useGlobalState } from '../../state/GlobalStateProvider';

const FavoritesPage = () => {
  const history = useHistory();
  const { dispatch } = useGlobalState();
  const { searchString, loading, videoList, setSearch } = useSearch();
  useEffect(() => {
    dispatch({ type: 'SET_SEARCH_FUNCTION', payload: setSearch });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {!loading && <VideoGrid videos={videoList} clickHandler={handleCardClick} />}
    </DefaultLayout>
  );
};

export default FavoritesPage;
