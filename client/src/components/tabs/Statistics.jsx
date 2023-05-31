import React from 'react'
import './Statistics.css'

const Statistics = () => {
  return (
    <>
      <section id="services">
      <div className="container">
        <h1>Our Services</h1>
        <div className="row services">
          <div className="col-md-4 text-center">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h3>20+</h3>
            <p>Schools Listed</p>
          </div>

          <div className="col-md-4 text-center">
            <div className="icon">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <h3>50+</h3>
            <p>Schools Viewed</p>
          </div>

          <div className="col-md-4 text-center">
            <div className="icon">
              <i className="fa fa-truck"></i>
            </div>
            <h3>100+</h3>
            <p>Parents Served</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Statistics
