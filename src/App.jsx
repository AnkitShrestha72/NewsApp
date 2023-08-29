import './App.css'
import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import About from './Components/About'
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
          <Route exact path="/about" element={<About/>}>
          </Route>
         
          <Route exact path="/" element={<News/>}>
          </Route>
        </Routes>
     
   
        </Router>
        
      </div>
      
    )
  }
}



