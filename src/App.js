import './App.css';
import React, {useState} from 'react'
import Navbar from './mycomponents/Navbar';
import News from './mycomponents/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [progress, setprogress] = useState(0)

  const apikey= process.env.REACT_APP_NEWS_API_KEY

  return (
    <>
    <Router>
    <Navbar/>   
    <LoadingBar color='#f11946' progress={progress}/>
    <Switch>
          <Route exact path="/"><News key="general" apikey={apikey} country="in" pagesize={12} category="general" setProgress={setprogress}/></Route> 
          <Route exact path="/Business"><News key="business" apikey={apikey} country="in" pagesize={12} category="business" setProgress={setprogress}/></Route> 
          <Route exact path="/Entertainment"><News key="entertainment" apikey={apikey} country="in" pagesize={12} category="entertainment" setProgress={setprogress}/></Route> 
          <Route exact path="/Health"><News key="health" apikey={apikey} country="in" pagesize={12} category="health" setProgress={setprogress}/></Route> 
          <Route exact path="/Science"><News key="science" apikey={apikey} country="in" pagesize={12} category="science" setProgress={setprogress}/></Route> 
          <Route exact path="/Sports"><News key="sports" apikey={apikey} country="in" pagesize={12} category="sports" setProgress={setprogress}/></Route> 
          <Route exact path="/Technology"><News key="technology" apikey={apikey} country="in" pagesize={12} category="technology" setProgress={setprogress}/></Route> 
        </Switch>
    </Router>
    </>
  );
}

export default App;
