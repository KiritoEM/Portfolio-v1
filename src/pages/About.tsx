import React from 'react';
import Profile from "./../assets/profile.jpg";

const About = () => {
    return (
      <div className="about">
        <div className="row gx-5" id="row">

        <div className="col-6">
            <div className="image">
              <div className="bg-canva">
                <div className="profil">
                      <img src={Profile} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
             <h1>LSS</h1>
          </div>

        
        </div>
      </div>
    );
};

export default About;