import react from "react";
import NAVBAR from "./NAVBAR";
import HOME from './pages/HOME.js'
import ABOUT from './pages/ABOUT.js'
import CONTACT from './pages/CONTACT.js'
import PROJECTS from './pages/PROJECTS.js'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className = "blue-glass-overlay"></div>
        <NAVBAR /> 
        <Router>
          <Switch>
            <Route exact path = "/" component = {HOME}/>
            <Route exact path = "/pages/PROJECTS.js" component = {PROJECTS}/>
            <Route exact path = "/pages/ABOUT.js" component = {ABOUT} />
            <Route exact path = "/pages/CONTACT.js" component = {CONTACT} /> 
          </Switch>
        </Router>
    </>
  );
}

export default App;
