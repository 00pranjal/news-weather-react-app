import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import Weather from './components/Weather'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div id="content">
          <div id='newsContent'>
            <Navbar />
            <div id="news">
              <Routes>
                <Route path='/' element={<News key='a' category="general" API_key="97fa96a62fdb4dabaa564190b62bd48d" />}></Route>
                <Route path='/business' element={<News key='b' category="business" API_key="97fa96a62fdb4dabaa564190b62bd48d" />}></Route>
                <Route path='/entertainment' element={<News key='c' category="entertainment" API_key="97fa96a62fdb4dabaa564190b62bd48d" />}></Route>
                <Route path='/health' element={<News key='d' category="health" API_key="97fa96a62fdb4dabaa564190b62bd48d" />}></Route>
                <Route path='/science' element={<News key='e' category="science" API_key="97fa96a62fdb4dabaa564190b62bd48d" />}></Route>
                <Route path='/sports' element={<News key='f' category="sports" API_key="97fa96a62fdb4dabaa564190b62bd48d" />}></Route>
                <Route path='/technology' element={<News key='g' category="technology" API_key="97fa96a62fdb4dabaa564190b62bd48d" />}></Route>
              </Routes>
            </div>
          </div>
          <div id="weatherContent">
            <Weather apiKey="357bec433a37b225287710887b023a41" />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}