export default interface YoutubeSearchlistResponse {
  pageInfo: YoutubePageInfo;
  items: YoutubeVideoSearchResult[];
}

export interface YoutubePageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YoutubeVideoSearchResult {
  kind: string;
  etag: string;
  id: YoutubeId;
  snippet: YoutubeSnippet;
}

export interface YoutubeId {
  kind: string;
  channelId?: string;
  videoId?: string;
}

export interface YoutubeSnippet {
  publishTime: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: SnippetThumbnail;
  channelTitle: string;
}

export interface SnippetThumbnail {
  default: ImageInfo;
  medium?: ImageInfo;
  high?: ImageInfo;
}

export interface ImageInfo {
  url: string;
  width: number;
  height: number;
}
