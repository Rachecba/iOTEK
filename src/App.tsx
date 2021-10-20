import React from 'react';
import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import * as Styled from './App.style'
import Header from './Components/global/header/Header';
import Home from './Components/pages/home/Home';
import SystemInfo from './Components/pages/system/SystemInfo';
import Solutions from './Components/pages/solutions/Solutions';
import Characteristics from './Components/pages/caracteristics/Characteristics';
import Platform from './Components/pages/platform/Platform';
import Contact from './Components/pages/contact/Contact';
import Footer from './Components/global/footer/Footer';
import HomeHeader from './Components/global/homeHeader/HomeHeader';
import Storys from './Components/pages/storys/Storys';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Styled.ContainerWrap>
          <Header />
          <HomeHeader />
          <Home />
          <SystemInfo />
          <Solutions />
          <Characteristics />
          <Platform />
          <Storys/>
          <Contact />
          <Footer />
        </Styled.ContainerWrap>
      </Router>
    </ThemeProvider>
  );
}

export default App;
