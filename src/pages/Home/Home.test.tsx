import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from './Home.page';

import mockVideos from '../../data/mock-videos.json';

describe('HomePage UI', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
