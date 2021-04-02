import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiKey from './../../data/apiKey';
import YoutubeSearchlistResponse from '../../model/YoutubeModels';
import VideoCardModel from '../../model/VideoCardModel';
import SearchType from '../../model/SearchType';

const fullURL = (query: string, searchType: SearchType) => {
  if (searchType === SearchType.searchTerm) {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${apiKey}`;
  } else {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&relatedToVideoId=${query}&type=video&key=${apiKey}`;
  }
};

export const createVideoCardModel = (responseData: YoutubeSearchlistResponse) => {
  return responseData.items
    .filter(({ id }) => {
      return id.kind === 'youtube#video';
    })
    .map(({ etag, snippet }) => {
      const card: VideoCardModel = {
        id: etag,
        title: snippet.title,
        creationDate: snippet.publishTime,
        creator: snippet.channelTitle,
        thumbImage:
          snippet.thumbnails.high.url ??
          snippet.thumbnails.medium.url ??
          snippet.thumbnails.default.url,
      };
      return card;
    });
};

export const useYoutubeListFetcher = (query: string, searchType: SearchType) => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await axios.get(fullURL(query, searchType));
        let data = response.data as YoutubeSearchlistResponse;
        setVideoList(createVideoCardModel(data));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(`Error while fetching data: ${err}`);
      }
    };
    fetchData();
  }, [query]);

  return { videoList, loading };
};
