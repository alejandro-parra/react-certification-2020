import React from 'react';
// import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePage from './Home.page';

// import mockVideos from '../../data/mock-videos.json';

describe('HomePage UI', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('changes screen when clicking on a snippet', async () => {
  //   render(<HomePage />);
  //   await waitFor(() => {
  //     screen.getByRole('button');
  //   });
  //   act(() => {
  //     fireEvent.click(screen.getByRole('button')); // cards have roles of button
  //   });
  //   const role = 'youtube-video';
  //   expect(screen.getByRole(role)).toBeTruthy();
  // });
});
