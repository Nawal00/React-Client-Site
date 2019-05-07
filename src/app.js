import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import  'bootstrap/dist/css/bootstrap.css'
import './sass/style.sass'

import Home from './components/Home'
import Navbar from './components/Navbar'


class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
