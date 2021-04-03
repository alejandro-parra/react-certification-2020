import { createVideoCardModel } from './useYoutube';
import mockVideos from '../../data/mock-videos.json';

describe('create video list', () => {
  it('erases the channel item and only leaves videos', () => {
    const videos = createVideoCardModel(mockVideos);
    expect(videos.length).toBe(mockVideos.items.length - 1);
  });
  it('renames new keys of the object', () => {
    // in this example we'll use the etag that transforms to 'id';
    const videos = createVideoCardModel(mockVideos);
    expect(videos[0].id).toBe(mockVideos.items[1].etag);
  });
});
