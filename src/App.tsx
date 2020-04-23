import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
