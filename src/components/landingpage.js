import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
        <div className="main-container">
         
            <div style={{ textAlign: 'center'}}>
              <img
                src="https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg"
                alt="avatar"
                className="avatar-img"
              />
            </div>
              

              <div className="banner-text">
                <h1>Matko Setnik</h1>
                <h4 style={{ color: "white" }}>bacc. ing. comp.</h4>

                <hr />

                <p> Frontend mobile developer </p>

                <div className="social-links">
                  <a
                    href="https://github.com/MSetnik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/matko-setnik-2b8a491aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
        
        </div>
 
    );
  }
}

export default LandingPage;
