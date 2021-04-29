import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import VideoGrid from './VideoGrid.component';
import mockVideos from '../../data/mock-videos.json';
import DefaultLayout from '../DefaultLayout/DefaultLayout.component';
import { createVideoCardModel } from '../../utils/hooks/useYoutube';
import AuthProvider from '../../providers/Auth';
import AppContainer from '../App/App.styled';
import GlobalStateProvider from '../../state/GlobalStateProvider';
import theme from '../../utils/theme';

describe('Video Grid', () => {
  it('renders properly with mock videos', () => {
    const videoList = createVideoCardModel({ ...mockVideos }, []);
    const result = create(
      <GlobalStateProvider>
        <ThemeProvider theme={theme.light}>
          <AppContainer>
            <AuthProvider>
              <DefaultLayout>
                <VideoGrid videos={videoList} clickHandler={() => {}} />
              </DefaultLayout>
            </AuthProvider>
          </AppContainer>
        </ThemeProvider>
      </GlobalStateProvider>
    ).toJSON();
    expect(result).toMatchSnapshot();
  });
});
