import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Routes from './components/Routes';

function App() {
  return (
    <>
      <ReactNotification />
      <Routes />
    </>
  );
}

export default App;
