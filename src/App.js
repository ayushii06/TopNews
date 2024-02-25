import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey=process.env.REACT_APP_apiKey
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState(
      {progress:progress}
    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="home" pageSize={15} country="in" category="general"></News>}></Route>
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={15} country="in" category="sports"></News>}></Route>
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={15} country="in" category="entertainment"></News>}></Route>
          <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={15} country="in" category="general"></News>}></Route>
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={15} country="in" category="business"></News>}></Route>
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={15} country="in" category="health"></News>}></Route>
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={15} country="in" category="science"></News>}></Route>
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={15} country="in" category="technology"></News>}></Route>

          
        </Routes>  
  
  
        </BrowserRouter>  
      </div>
    )
  }
}
