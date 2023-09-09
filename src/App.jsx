import './App.css'
import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {

  // state = {
  //   progress : 0
  // }

  const [progress, setProgress] = useState(0)

  
  // constructor(){
  //   super();
  //   state = {
  //     mode : "dark",
  //     setMode : setMode,
  //     toggleMode : toggleMode,
  //   }
  // }

  const [mode, setMode] = useState("light")

   const toggleMode = () => {    
      
    if (mode === "dark") {   
      setMode("light");
      document.body.style.backgroundColor = "#EEEDED";  
    
    } else {   
      setMode("dark");
      document.body.style.backgroundColor = "#2B2730"; 
    }
  };
  
 
    return (
      <div>
        <Router>
           <NavBar mode={mode} toggleMode={toggleMode} />
           <LoadingBar
        color='#f11946'
        progress={progress}
     
      />
         
    <Routes>
    
          <Route exact path="/" element={<News mode={mode} setProgress={setProgress}  key='home' pageSize={6} category="general"/>}>
          </Route>
          <Route exact path="/business" element={<News mode={mode} setProgress={setProgress} key='business' pageSize={6} category="business"/>}>
          </Route>
          <Route exact path="/entertainment" element={<News mode={mode} setProgress={setProgress} key='entertainment' pageSize={6} category="entertainment"/>}>
          </Route>
          <Route exact path="/health" element={<News mode={mode} setProgress={setProgress} key='health' pageSize={6} category="health"/>}>
          </Route>
          <Route exact path="/science" element={<News mode={mode} setProgress={setProgress} key='science' pageSize={6} category="science"/>}>
          </Route>
          <Route exact path="/sports" element={<News mode={mode} setProgress={setProgress} key='sports' pageSize={6} category="sports"/>}>
          </Route>
          <Route exact path="/technology" element={<News mode={mode} setProgress={setProgress} key='technology' pageSize={6} category="technology"/>}>
          </Route>

        </Routes>
        </Router>
        
      </div>
      
    )
  
}
export default App;



