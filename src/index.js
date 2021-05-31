import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
