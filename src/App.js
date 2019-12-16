import React, {useState, useEffect} from 'react';
import Home from './pages/Home'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Login from './pages/Login'
import NavBar from './components/NavBar';
import Forgot from './pages/Forgot';
import Post from './pages/Post'
import Event from './pages/Event'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditPost from './pages/EditPost';
import EditEvent from "./pages/EditEvent"


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
    const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/getuser`,{
        headers: {
          Authorization: `Token ${token}`
        }
    });
    if (resp.ok){
      const data = await resp.json()
      localStorage.setItem('token', token)
      setCurrentUser(data)
      console.log(data)
    } else {
      localStorage.clear('token')
      setCurrentUser(null)
    }
    setLoaded(true)
  }
  // if (!loaded) return <h1>loading</h1>
  return (
    <div className="App">
      <NavBar currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>
      <Switch> 
        <Route exact path="/" render={()=> <Home />}/>
        <Route path="/forgot" render={()=> <Forgot/>}/>
        <Route path="/login" render ={()=> <Login setCurrentUser={setCurrentUser}/>}/>
        {/* <Route path="/post" render ={()}=> <Post/>}/> */}
        <Route path="/post/edit/:id" render = {()=><EditPost currentUser = {currentUser}/>}/>
        <Route exact path ="/edit/:id/event" render={()=><EditEvent currentUser = {currentUser}/>}/>
        <Route path="/event" render={()=><Event currentUser={currentUser}/>}/>
        <Route path="/upload-post" render={()=> <Post currentUser = {currentUser}/>}/>
      </Switch>
    </div>
  );
}

export default App;