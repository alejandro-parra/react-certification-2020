import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useYoutubeListFetcher } from './useYoutube';

function useSearch() {
  const history = useHistory();
  const location = useLocation();
  const isFirstRender = useRef(true);
  const isMounting = useRef(true);
  const [searchString, setSearch] = useState(
    location.state ? location.state.searchString : ''
  );
  const initMode = location.state ? location.state.mode : 'search';
  const { videoList, loadNewVideos, loading } = useYoutubeListFetcher(
    initMode === 'relatedVideos' ? location.state.currentVideo.id : searchString,
    initMode
  );
  useEffect(() => {
    if (!isFirstRender.current && searchString !== '') {
      const timer = setTimeout(() => {
        history.push({
          pathname: '/',
          state: {
            searchString,
            mode: 'search',
          },
        });
        loadNewVideos(searchString, 'search');
      }, 800);
      return () => clearInterval(timer);
    }
    isFirstRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  useEffect(() => {
    if (!location.state) {
      setSearch('');
    } else if (history.action === 'POP' && !isMounting.current) {
      loadNewVideos(location.state.searchString, 'search');
    } else {
      isMounting.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return { videoList, loading, searchString, setSearch, loadNewVideos };
}
export default useSearch;
