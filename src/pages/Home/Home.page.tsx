import React from 'react';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import Header from '../../components/Header/Header.component';
import { useYoutubeListFetcher } from './../../utils/hooks/useYoutube';
import SearchType from '../../model/SearchType';

function HomePage() {
  const { videoList, loading } = useYoutubeListFetcher('wizeline', SearchType.searchTerm);

  return (
    <>
      <Header items={[]} image="" />
      <VideoGrid videos={videoList} />
    </>
  );
}

export default HomePage;
