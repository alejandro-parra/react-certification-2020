import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading.component';
import WatchVideoView from '../../components/WatchVideoView/WatchVideoView.component';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout.component';
import useSearch from '../../utils/hooks/useSearch';
import { useGlobalState } from '../../state/GlobalStateProvider';

const WatchPage = () => {
  const history = useHistory();
  const { dispatch } = useGlobalState();
  const location = useLocation();
  const { searchString, loading, videoList, setSearch, loadNewVideos } = useSearch();

  useEffect(() => {
    dispatch({ type: 'SET_SEARCH_FUNCTION', payload: setSearch });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSearch]);

  const handleCardClick = (video) => {
    history.push({
      pathname: `/watch/${video.id}`,
      state: {
        searchString,
        currentVideo: video,
        mode: 'relatedVideos',
      },
    });
    loadNewVideos(video.id, 'relatedVideos');
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

export default WatchPage;
