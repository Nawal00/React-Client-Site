import React from 'react'

const Home = () => {

  return(
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div>
          <h1>Software Engineering Contractor</h1>
          <p className="lead">Powered by knowledge | Driven by passion</p>
        </div>
      </div>

      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="sub-header">Services</h2>
            </div>
          </div>
          <div
            className="row text-center"
            data-aos="fade-up"
            data-aos-delay="10000"
          >
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="far fa-handshake fa-stack-1x fa-inverse"></i>
              </span>
              <h4>Consulting</h4>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-database fa-stack-1x fa-inverse"></i>
              </span>
              <h4>Expertise in Oracle</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-laptop-code fa-stack-1x fa-inverse"></i>
              </span>
              <h4>System Integration</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="approach">
        <div className="row">
          <div className="col-md-6 txt">
            <h2 className="sub-header">Our Approach</h2>
            <p>We go back to basics, deliver results with remarkable agility, ensuring clients extract optimum and sustainable returns from their IT (middleware in particular) investment.</p>
            <p>Our key differentiators go beyond in-depth technology knowledge. They include a sound academic grounding rounded by real world industry application.</p>
            <p>We call it the <span className="qote">"Nimble Efficient Agile way!"</span></p>
          </div>
          <div className="col-md-6 img">
            <img src="../assets/consult.jpeg" alt="work" />
          </div>
        </div>
      </section>

      <section id="about" className="container card" data-aos="zoom-out">
        <div>
          <h2> Why choose us? </h2>
          <p>
            We provide boutique software development and consultancy services specialising in application development, SOA, microservices and systems integration across industry sectors.
          </p>
          <p>
            We guide organisations on their digital  transformation.
          </p>
        </div>
      </section>

      <section id="clients">
        <h2 className="sub-header text-center"> Our Clients </h2>
        <div
          className="row client-img"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
        >
          <div className="col-sm-3">
            <img src="../assets/oracle.png" alt="oracle logo" />
          </div>
          <div className="col-sm-3">
            <img src="../assets/apache.png" alt="apache logo" />
          </div>
          <div className="col-sm-3">
            <img src="../assets/github.png" alt="apache logo" />
          </div>
          <div className="col-sm-3">
            <img src="../assets/ws02.png" alt="apache logo" />
          </div>
          <div className="col-sm-3">
            <img src="../assets/mulesoft.png" alt="apache logo" />
          </div>
          <div className="col-sm-12 text-center manyMore">
            <p> Any many more...</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className=" text-center">
        <div className="carousel slide" data-ride="carousel">
          <h3> Testimonials </h3>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <p> "Masterful..." - Project Manager at a retail client</p>
            </div>
            <div className="carousel-item">
              <p> "One of a kind..." - Head of IT at a SME</p>
            </div>
            <div className="carousel-item">
              <p> "\I had the pleasure of working with Siphpora Consulting. They were professional, passionate about their work, and a delightful solutions provider!..." - Director </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Home
