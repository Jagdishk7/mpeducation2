import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="page-heading">About Us</h1>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About us</span>
                  <h2>We are Creative Tech Enthusiast working since 2019</h2>
                </div>
                <div className="text">
                  In present situation of world, ICOESS is commited to provide
                  adative services & solutions to our cusomers. ICOESS helps
                  businesses thrive in a world defined by disruption and fueled
                  by transformative technology.
                </div>

                <div className="btn-box">
                  <a
                    href="https://icoesolution.com/"
                    target="_blank"
                    className="theme-btn btn-style-one"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>ICOESS</h2>
                  <span>Software & Services</span>
                </div>
                <figure className="image-1">
                  <a href="https://icoesolution.com/" className="lightbox-image" data-fancybox="images">
                    <img
                      title="icoess"
                      src="assets/SoftwareInstitutes/icoess.jpg"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            
          <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div>
          <div className="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div className="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div className="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div className="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
