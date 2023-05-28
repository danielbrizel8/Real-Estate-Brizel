import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import Properties from './components/Properties';
import  "./components/Layout.css";
import PropertyPage from './components/PropertyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Layout/>}>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/Properties" element= {<Properties/>}></Route>
        <Route path="/Properties/:id" element= {<PropertyPage/>}></Route>
      </Route>
    </Routes>
  )
}

export default App