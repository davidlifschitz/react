import React, { useState,createContext } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import * as firebase from 'firebase'
import Navbar from './components/common/Navbar'
import Menu from './components/menu';
import Counter from './components/common/Counter'
import Edit from './components/menu/Edit'
import Join from './components/common/Join'
import Login from './components/common/Login'
import configFirebase from './config'
// import AboutUs from './components/menu/AboutUs';
import './App.css';

/* 
<img src={logo} className="App-logo" alt="logo" />
  * <Message messageObject  = {messageObject}/>
  * color="blue" message = "My SECOND React Component" 
  * {students.map((student,index) => 
  *  {
  *    return <Welcome key={index} name={student}/>
  *  })} 
  * <Welcome name = "David"/>
  * state = "NJ" 
  * let students = ['student1', 'student2', 'student3']
  * var messageObject = {}
  * messageObject.color = "blue"
  * messageObject.message = "this is text"  
  * console.log(messageObject)
  */  
 firebase.initializeApp(configFirebase)

 export const AuthContext = createContext(null)
  function App() {
    const [isLoggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState(null)
  return (

    <Router>
      <div className="App">
        <AuthContext.Provider value={{isLoggedIn,setLoggedIn,userName,setUserName}}>
        <Navbar />
        <Switch>
        <Route exact path="/">
            <h1>Welcome to Our Website!</h1>
          </Route>
          <Route path="/menu" component = {Menu}/>
          <Route path= "/counter" component = {Counter} /> 
          <Route path="/edit">
            {isLoggedIn
            ? <Edit />
            : <Login/>
            }
          </Route>
          {/* <Route path="/aboutUs">
            <AboutUs />
          </Route> */}
          <Route path="/login" component = {Login} />
          <Route path="/Join" component = {Join}/>
        </Switch>
        </AuthContext.Provider>        
      </div>
    </Router>
  );
}

export default App;





