import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './Components/Pages/SearchPage'
import Init from './Components/Init'

function App() {
  return (
    <Router>
      <Init>
        <div className='app'>
          <div className='app-wrapper'>
            <Switch>
              <Route exact path='/'>
                <SearchPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Init>
    </Router>
  )
}

export default App
