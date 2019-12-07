import React, {useState, useEffect} from 'react';
import Home from './pages/Home'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Login from './pages/Login'
import NavBar from './components/NavBar';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getUser()
    window.history.replaceState({}, document.title, window.location.pathname);
  }, [])
  const getUser = async () =>{
    const local = localStorage.getItem("token");
    const accessToken =
    window.location.search.split("=")[0] === "?api_key"
      ? window.location.search.split("=")[1]
      : null;
      const token = local || accessToken
      console.log(token)
    const resp = await fetch("https://127.0.0.1:5000/getuser",{
        headers: {
          Authorization: `Token ${token}`
        }
    });
    if (resp.ok){
      const data = await resp.json()
      console.log('pls work')
      localStorage.setItem('token', token)
      setCurrentUser(data)
    } else {
      localStorage.clear('token')
      setCurrentUser(null)
    }
    setLoaded(true)
  }
  if (!loaded) return <h1>loading</h1>
  return (
    <div className="App">
      <NavBar currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>
      <Switch> 
        <Route exact path="/" render={()=> <Home />}/>
        <Route path="/login" render ={()=> <Login setCurrentUser={setCurrentUser}/>}/>
      </Switch>
    </div>
  );
}

export default App;