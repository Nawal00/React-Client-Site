import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import  'bootstrap/dist/css/bootstrap.css'
import './sass/style.sass'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
// import Contact from './components/Contact'


class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>

            <Route path="/projects" component={Projects} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
