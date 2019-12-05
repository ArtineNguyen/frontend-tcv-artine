import React, {useState} from 'react';
import Home from './pages/Home'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Login from './pages/Login'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/" render={()=> <Home />}/>
        <Route path="/login" render ={()=> <Login setCurrentUser={setCurrentUser}/>}/>
      </Switch>
    </div>
  );
}

export default App;
