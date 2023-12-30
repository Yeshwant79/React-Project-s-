import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component1/Home';
// import Movie from './Component1/Movie';
import SingleMovie from './Component1/SingleMovie';
import Error from './Component1/Error';

function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>} />
          {/* <Route path ="/movie" element={<Movie/>}/> */}
          <Route path ="/movie/:id" element={<SingleMovie/>}/>
          <Route path ="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
