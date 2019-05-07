import React from 'react'

const Footer = () => {

  return(
    <footer>
      <div className="row">
        <div className="col-sm-8">
          <p className="text-muted"> Copyright © 2019 Singhpora Consulting. All rights reserved. </p>
        </div>
        <div className="col-sm-4 text-right">

          <span className="fa-stack fa-1x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <a href="#" target="_blank"><i className="fab fa-twitter fa-stack-1x fa-inverse"></i></a>
          </span>
          <span className="fa-stack fa-1x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <a href="https://www.linkedin.com/company/singhpora-technologies/about/" target="_blank"><i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i></a>
          </span>
          <span className="fa-stack fa-1x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <a href="#" target="_blank"><i className="fab fa-google-plus-g fa-stack-1x fa-inverse"></i></a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
