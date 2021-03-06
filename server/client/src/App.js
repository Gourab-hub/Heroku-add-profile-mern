import React, { createContext,useReducer   } from 'react'
import Home from './components/Home';
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import ErrorPage from './components/Errorpage';
import Logout from './components/Logout';

import "../src/App.css"
import {reducer, initialState} from "../src/reducer/UseReducer"


//contextapi
export const UserContext = createContext();




const Routing = () => {
  return (
  <Switch>

  <Route exact path="/">
    <Home />
  </Route>


  <Route path="/about">
    <About />
  </Route>


  <Route path="/contact">
    <Contact />
  </Route>


  <Route path="/login">
    <Login />
  </Route>


  <Route path="/signup">
    <Signup />
  </Route>


  <Route path="/logout">
    <Logout />
  </Route>

  <Route >
    <ErrorPage />
  </Route>

</Switch>
)
}



const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <>
      <UserContext.Provider value={{state,dispatch}} >

        <Navbar />
        <Routing/>
        </UserContext.Provider>

    </>
  )
}

export default App
