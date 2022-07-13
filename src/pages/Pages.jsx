import React from 'react';
import Home from './Home';
import { Route,Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:category' element={<Cuisine/>}/>
      <Route path='/search/:search' element={<SearchResults/>}/>
    </Routes>
  );
}

export default Pages;
