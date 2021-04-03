import { useState, useEffect } from 'react';
import axios from 'axios';
import apiKey from '../../data/apiKey';
import mockVideos from '../../data/mock-videos.json';

const fullURL = (query, searchType) => {
  if (searchType === 'search') {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=${apiKey}`;
  }
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&relatedToVideoId=${query}&type=video&key=${apiKey}`;
};

export const createVideoCardModel = (responseData) => {
  return responseData.items
    .filter(({ id }) => {
      return id.kind === 'youtube#video';
    })
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
      };
    });
};

export const useYoutubeListFetcher = (query, searchType) => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadNewVideos = async (newQuery, newType) => {
    console.log(newQuery);
    console.log(newType);
    setLoading(true);
    try {
      // const data = { ...mockVideos };
      const response = await axios.get(fullURL(newQuery, newType));
      const data = { ...response.data };
      setVideoList(createVideoCardModel(data));
      setLoading(false);
    } catch (err) {
      const data = { ...mockVideos };
      setVideoList(createVideoCardModel(data));
      setLoading(false);
      console.log(`Error while fetching data: ${err}`);
    }
  };

  useEffect(() => {
    loadNewVideos(query, searchType);
  }, []);

  return { videoList, loadNewVideos, loading };
};
