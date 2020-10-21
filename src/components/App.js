import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MenuList from '../containers/MenuList'
import ShowMenu from '../containers/ShowMenu'

import '../styles/index.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='nav'>
          <Link to='/'>
            <h1>Menu</h1>
          </Link>
        </div>
        <Switch>
          <Route exact path='/' component={MenuList} />
          <Route exact path='/:id' component={ShowMenu} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
