import React from 'react'
import Home from './pages/Home'
import TopPicks from "./pages/TopPicks"
import './styles/style.css'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/top-picks" element={<TopPicks/>}/>
   </Routes>
   </BrowserRouter>
 )
}

export default App


