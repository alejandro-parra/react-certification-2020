import { useState, useEffect } from 'react';
import axios from 'axios';
import mockVideos from '../../data/mock-videos.json';
import { useGlobalState } from '../../state/GlobalStateProvider';

const apiKey = process.env.REACT_APP_API_KEY;

export const fullURL = (query, searchType) => {
  if (searchType === 'search') {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=${apiKey}`;
  }
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&relatedToVideoId=${query}&type=video&key=${apiKey}`;
};

export const createVideoCardModel = (responseData, favorites) => {
  const favList = favorites || [];
  return responseData.items
    .filter(({ id }) => {
      return id.kind === 'youtube#video';
    })
    .filter((video) => video.snippet)
    .map(({ id, snippet }) => {
      return {
        id: id.videoId,
        title: snippet.title,
        creationDate: snippet.publishTime,
        creator: snippet.channelTitle,
        thumbImage:
          snippet.thumbnails.high.url ??
          snippet.thumbnails.medium.url ??
          snippet.thumbnails.default.url,
        description: snippet.description,
        favorited: favList.filter((fav) => fav.id === id.videoId).length === 1,
      };
    });
};

const updateFavorites = (videoList, favorites) => {
  return videoList.map((video) => {
    return {
      ...video,
      favorited: favorites.filter((fav) => fav.id === video.id).length === 1,
    };
  });
};

export const useYoutubeListFetcher = (query, searchType) => {
  const { state } = useGlobalState();
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadNewVideos = async (newQuery, newType) => {
    const favorites = state.userInfo ? state.userInfo.favorites || [] : [];
    setLoading(true);
    if (newType === 'favorites') {
      setVideoList(favorites);
      setLoading(false);
    } else {
      try {
        const response = await axios.get(fullURL(newQuery, newType));
        const data = { ...response.data };
        setVideoList(createVideoCardModel(data, favorites));
        setLoading(false);
      } catch (err) {
        const data = { ...mockVideos };
        setVideoList(createVideoCardModel(data, favorites));
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadNewVideos(query, searchType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.userInfo) {
      setVideoList(updateFavorites(videoList, state.userInfo.favorites || []));
      if (searchType === 'favorites') {
        setVideoList(state.userInfo.favorites);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return { videoList, loadNewVideos, loading };
};
