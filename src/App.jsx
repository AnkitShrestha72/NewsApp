import './App.css'
import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {

  
  constructor(){
    super();
    this.state = {
      mode : "light",
      setMode : this.setMode,
      toggleMode : this.toggleMode,
    }
  }

    toggleMode = () => {    
      
  
    if (this.mode === "light") {
     
      this.setMode("white");
      document.body.style.backgroundColor = "white";
    
    } else {
    
      this.setMode("dark");
      document.body.style.backgroundColor = "#272829";

    }
  };
  
  render() {
    return (
      <div>
        <Router>
           <NavBar mode={this.state.mode} toggleMode={this.state.toggleMode} />
         
    <Routes>
    
          <Route exact path="/" element={<News key='home' pageSize={6} category="general"/>}>
          </Route>
          <Route exact path="/business" element={<News key='business' pageSize={6} category="business"/>}>
          </Route>
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={6} category="entertainment"/>}>
          </Route>
          <Route exact path="/health" element={<News key='health' pageSize={6} category="health"/>}>
          </Route>
          <Route exact path="/science" element={<News key='science' pageSize={6} category="science"/>}>
          </Route>
          <Route exact path="/sports" element={<News key='sports' pageSize={6} category="sports"/>}>
          </Route>
          <Route exact path="/technology" element={<News key='technology' pageSize={6} category="technology"/>}>
          </Route>

        </Routes>
     
   
        </Router>
        
      </div>
      
    )
  }
}



