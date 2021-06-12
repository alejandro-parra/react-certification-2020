import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import mockVideos from '../../data/mock-videos.json';
import DefaultLayout from '../DefaultLayout/DefaultLayout.component';
import { createVideoCardModel } from '../../utils/hooks/useYoutube';
import AuthProvider from '../../providers/Auth';
import AppContainer from '../App/App.styled';
import GlobalStateProvider from '../../state/GlobalStateProvider';
import theme from '../../utils/theme';
import VideoPlayer from './VideoPlayer.component';

describe('Video Player', () => {
  it('renders properly with first video', () => {
    const videoList = createVideoCardModel({ ...mockVideos }, []);
    const result = create(
      <GlobalStateProvider>
        <ThemeProvider theme={theme.light}>
          <AppContainer>
            <AuthProvider>
              <DefaultLayout>
                <VideoPlayer video={videoList[0]} />
              </DefaultLayout>
            </AuthProvider>
          </AppContainer>
        </ThemeProvider>
      </GlobalStateProvider>
    ).toJSON();
    expect(result).toMatchSnapshot();
  });
});
