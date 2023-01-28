import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Wrapper from '../components/wrapper/Wrapper';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Instrumental from '../pages/instrumental/Instrumental';
import Equipamiento from '../pages/equipamiento/Equipamiento';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Wrapper>
            <ReactDomRoutes>
            <Route path='/' element={<Home />} />
            <Route path='/instrumental' element={<Instrumental />} />
            <Route path='/equipamiento' element={<Equipamiento />} />
            <Route path='/about' element={<About />} />
            </ReactDomRoutes>
          </Wrapper>
        </Layout>
      </BrowserRouter>
    </>
  )
};

export default Routes