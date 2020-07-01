import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import Navbar from './components/common/Navbar'
import './App.css';
import Menu from './components/menu';
import AboutUs from './components/menu/AboutUs';
import Edit from './components/menu/Edit'
{
{/* <img src={logo} className="App-logo" alt="logo" />
        <Message messageObject  = {messageObject}/>
        {/* color="blue" message = "My SECOND React Component" */}
        {/* {students.map((student,index) => 
          {
            return <Welcome key={index} name={student}/>
          })} */}
        {/* <Welcome name = "David"/> */}
        {/* state = "NJ" */} 
}
function App() {
  // let students = ['student1', 'student2', 'student3']
  // var messageObject = {}
  // messageObject.color = "blue"
  // messageObject.message = "this is text"  
  // console.log(messageObject)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/edit">
            <p>This is where restaurant owners will be 
              able to edit their menus.
            </p>
            <Edit />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/">
            <h1>Welcome to Our Website!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;





