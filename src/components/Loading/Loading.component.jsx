import { CircularProgress } from '@material-ui/core';
import React from 'react';
import LoadingView from './Loading.styled';

const Loading = () => {
  return (
    <LoadingView>
      <CircularProgress color="secondary" />
      <p>Cargando...</p>
    </LoadingView>
  );
};

export default Loading;
