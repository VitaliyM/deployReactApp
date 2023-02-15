import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
import Page3 from './page3/Page3';

function Main() {
  return (
    <div>
        <Routes>
            <Route path='/page1' element={ <Page1 /> } />
            <Route path='/page2' element={ <Page2 /> } />
            <Route path='/page3' element={ <Page3 /> } />
        </Routes>
    </div>
  )
}

export default Main