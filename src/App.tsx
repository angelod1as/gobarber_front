import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
