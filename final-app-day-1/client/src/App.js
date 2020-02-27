import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Switch, Route } from 'react-router-dom'

import CoastersList from './components/pages/coasterList/CoasterList'
import CoasterDetails from './components/pages/coasterDetails/CoasterDetails'
import NavBar from './components/ui/NavBar'

import Signup from './components/pages/auth/signup/Signup'
import Login from './components/pages/auth/login/Login'



function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" render={() => <CoastersList />} />
        <Route path="/detalles/:id" render={match => <CoasterDetails {...match} />} />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </>

  )
}

export default App