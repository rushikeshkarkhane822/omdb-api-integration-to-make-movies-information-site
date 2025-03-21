import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import 'flowbite';
import Nav from './components/Nav'
import Trending from './components/Trending'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom';
import { Result } from 'postcss';
import Results from './components/Results';
import MovieDetails from './components/MovieDetails';
function App() {
  const getmoviesstart = async ()=>{
    const getm = await axios.get('https://www.omdbapi.com/?apikey=[your api key]&s=a')
  }

  return (
<>
<Nav></Nav>

<Routes>
  <Route path="/" element={<><Search></Search><Trending></Trending></>} index></Route>
  <Route path="/results/:term/:type?" element={<Results></Results>}></Route>
  <Route path="/movie/:title/" element={<MovieDetails></MovieDetails>}></Route>
</Routes>
</>
  )
}

export default App