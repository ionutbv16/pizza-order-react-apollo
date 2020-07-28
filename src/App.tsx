import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import apolloClient from './graphql/apolloClient';
import AppRouter from './AppRouter';
import {BACKGROUND_IMAGE} from './config';

const AppWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background-image: url(./${BACKGROUND_IMAGE});
`;

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
