import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import { Provider } from 'react-redux'; //Redux
import store from './store'; //Redux


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
