import apiKey from '../../data/apiKey';
import { createVideoCardModel, fullURL } from './useYoutube';
import mockVideos from '../../data/mock-videos.json';

describe('create video list', () => {
  it('erases the channel item and only leaves videos', () => {
    const videos = createVideoCardModel(mockVideos);
    expect(videos.length).toBe(mockVideos.items.length - 1);
  });
  it('renames new keys of the object', () => {
    // in this example we'll use the etag that transforms to 'id';
    const videos = createVideoCardModel(mockVideos);
    expect(videos[0].id).toBe(mockVideos.items[1].id.videoId);
  });
});

describe('full URL function', () => {
  it('returns correct search URL', () => {
    const expected = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=test&type=video&key=${apiKey}`;
    const result = fullURL('test', 'search');
    expect(result).toContain(expected);
  });

  it('returns correct relatedVideo URL', () => {
    const expected = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&relatedToVideoId=test&type=video&key=${apiKey}`;
    const result = fullURL('test', 'relatedVideo');
    expect(result).toContain(expected);
  });
});
