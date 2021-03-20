import React from 'react';
import renderer from 'react-test-renderer';
import HomePage, { createVideoList } from './Home.page';

import mockVideos from '../../data/mock-videos.json';

describe('HomePage UI', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('create video list', () => {
  it('erases the channel item and only leaves videos', () => {
    const videos = createVideoList(mockVideos);
    expect(videos.length).toBe(mockVideos.items.length - 1);
  });
  it('renames new keys of the object', () => {
    // in this example we'll use the etag that transforms to 'id';
    const videos = createVideoList(mockVideos);
    expect(videos[0].id).toBe(mockVideos.items[1].etag);
  });
});
