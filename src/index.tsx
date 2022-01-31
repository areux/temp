import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import rootReducer from './reducers';

import Button from '@mui/material/Button';
import { createStore } from 'redux';

const queryClient = new QueryClient();
const store = createStore(rootReducer);

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    drawer: true;
  }
}

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [
    rtlPlugin
  ],
});

const theme = createTheme({
  direction: "rtl",
  typography: {
    h1: {
      fontFamily: 'danaBold',
    },
    h2: {
      fontFamily: 'IranSansXBold',
    },
    // fontFamily: 'danaBold'
    // fontFamily: 'IranSansX'
    fontFamily: 'IRANYekanRegular'
    // fontFamily: 'IranSansXBold'
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'drawer' },
          style: {}
        }
      ]
    }
  }
})

ReactDOM.render(
  <>
    <CacheProvider value={cacheRtl}>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <React.StrictMode>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </React.StrictMode>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </CacheProvider>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
