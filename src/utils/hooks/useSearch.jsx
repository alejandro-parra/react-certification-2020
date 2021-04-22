import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useYoutubeListFetcher } from './useYoutube';

function useSearch() {
  const history = useHistory();
  const location = useLocation();
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [isMounting, setIsMounting] = useState(true);
  const [searchString, setSearch] = useState(
    location.state ? location.state.searchString : ''
  );
  const [searchQuery, setQuery] = useState(
    location.state.mode === 'relatedVideos' || location.state.mode === 'favorites'
      ? location.state.currentVideo.id
      : searchString
  );

  const { videoList, loadNewVideos, loading } = useYoutubeListFetcher(
    searchQuery,
    location.state.mode
  );

  useEffect(() => {
    if (isFirstRender && searchQuery !== '') {
      const timer = setTimeout(() => {
        history.push({
          pathname: '/',
          state: {
            searchQuery,
            mode: 'search',
          },
        });
        loadNewVideos(searchQuery, 'search');
      }, 800);
      return () => clearInterval(timer);
    }
    if (isFirstRender) {
      loadNewVideos(searchString, 'search');
    }
    setIsFirstRender(true);
  }, [searchString, isFirstRender]);
  useEffect(() => {
    if (!location.state) {
      setSearch('');
    }
    if (history.action === 'POP' && !isMounting) {
      loadNewVideos(location.state.searchString, 'search');
    } else {
      setIsMounting(false);
    }
  }, [location, history, isMounting]);
  return { videoList, loading, searchString, setSearch };
}
export default useSearch;
