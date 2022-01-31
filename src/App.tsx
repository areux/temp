import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppHeader from './header/Header';
import { useState } from 'react';

import './i18n/config';
import { useTranslation } from 'react-i18next';
import { Divider, Container, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './components/Hooks/useToken';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Login from './components/Login/Login';
import CC from './components/cards/ApiTestCard';
import Home from './components/Home';
import { setAuth, unsetAuth } from './actions';
import { connect } from 'react-redux';

const fc = (): React.ReactElement => <div></div>;
const Home2 = () => {
  return (
    <CC />
  )
}

function App({ dispatch }: any) {
  const { token, setToken } = useToken();
  console.log("token: ", token);
  // if (!token) {
  //   console.log('here');
  //   dispatch(unsetAuth());
  //   return <Login setToken={setToken} />
  // } else {
  //   dispatch(setAuth());
  // }
  return (
    <div className="App">
      <AppHeader children={fc()} />
      {/* <Container disableGutters={true}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
      {/* </Container> */}
      <Box mt={4}>
        <Divider orientation="horizontal">
        </Divider>
      </Box>
      <ContactUs />
    </div>
  );
}

export default connect()(App);
