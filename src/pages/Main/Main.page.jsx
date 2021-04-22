import React from 'react';
import { useHistory } from 'react-router';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Loading from '../../components/Loading/Loading.component';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout.component';
import useSearch from '../../utils/hooks/useSearch';

const MainPage = () => {
  const history = useHistory();
  const { searchString, loading, videoList } = useSearch();

  const handleCardClick = (video) => {
    history.push({
      pathname: `/watch/${video.id}`,
      state: {
        searchString,
        currentVideo: video,
        mode: 'relatedVideos',
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

export default MainPage;
