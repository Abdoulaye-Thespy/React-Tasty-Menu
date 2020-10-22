import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MenuList from '../containers/MenuList';
import ShowMenu from '../containers/ShowMenu';
import Navbar from '../components/Navbar'

import '../styles/index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <div className='nav'></div>
        <Switch>
          <Route exact path='/' component={MenuList} />
          <Route exact path='/menu/:id' component={ShowMenu} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
