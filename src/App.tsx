import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/Pages/SearchPage'
import Init from './components/Init'

const App: React.FC<React.ReactNode> = () => {
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
