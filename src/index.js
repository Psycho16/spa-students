import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import GeometriaWoff2 from './assets/Geometria-Regular.woff2';
import GeometriaWoff from './assets/Geometria-Regular.woff';
import GeometriaTtf from './assets/Geometria-Regular.ttf';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
    font-family: 'Geometria';
    src: local('Geometria Regular'), local('Geometria-Regular'),
        url(${GeometriaWoff2}) format('woff2'),
        url(${GeometriaWoff}) format('woff'),
        url(${GeometriaTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  body {
    font-family: 'Geometria';
  }
`;
const theme = {
  colors: {
    primary: '#000000',
    secondary: '#49C2E8',
  },
  media: {
    phone: '(max-width: 600px)',
  },
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
