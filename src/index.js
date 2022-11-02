import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeContainer from './Container/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPageContainer from './Container/Home/About';
import AllRouterWrap from './Container/Home/Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomeContainer /> */}
    {/* <AboutPageContainer/> */}
    <AllRouterWrap/>
  </React.StrictMode>
);


