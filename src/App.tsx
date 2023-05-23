import React from 'react';
import { theme } from './utils/theming/theme';
import { ThemeProvider } from 'styled-components'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import Layout from './Components/template/Layout';
const Catalog = React.lazy(() => import("./Components/pages/catalog/Catalog"));

function App() {
  const Home = () => {
    return (<>
      <SystemInfo />
      <Solutions />
      <Characteristics />
      <Platform />
      <Storys />
      <Contact />
    </>)
  };

  return (
    <ThemeProvider theme={theme}>
      <Styled.ContainerWrap>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
          </Route>
        </Routes>
      </Styled.ContainerWrap>
    </ThemeProvider>
  );
}

export default App;
