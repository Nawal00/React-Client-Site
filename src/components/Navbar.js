import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return(
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
      <a className="navbar-brand js-scroll-trigger" href="#top"><span className="tit">Singhpora</span> <p className="cons">Consulting</p></a>
      <a className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-danger"></i>
      </a>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link js-scroll-trigger">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link js-scroll-trigger">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link js-scroll-trigger">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
