import React from 'react';
import Profile1 from "./../assets/p2.jpg";
import Profile2 from "./../assets/p1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Zoom } from "react-awesome-reveal";

const About = () => {
    return (
      <div className="about">
        <div className="row gx-5" id="row">
          <div className="col-5">
            <div className="image">
              <div className="profil">
                <img src={Profile1} alt="" />
                <img src={Profile2} alt="" />
              </div>
            </div>
          </div>

          <div className="col-7">
            <div className="content">
              <Zoom>
                <div className="row">
                  <div className="col-12">
                    <div className="title d-flex">
                      <div className="spinner"></div>
                      <h2>About me</h2>
                    </div>

                    <div className="main-title">
                      <h1 className="mt-0">
                        I am looking for the responsiveness of my web apps
                      </h1>
                    </div>
                  </div>

                  <div className="col-12 mt-3">
                    <div className="desc">
                      <p>
                        I'm <b> Emadisson Nirina Johannès Loick </b> and I'm 18
                        years old. I'm a <b>Javascript Fullstack developer</b>{" "}
                        and mostly I use modern technologies to make my
                        applications efficient, fast and dynamic . I have a
                        minimum of experience in web development because now I'm
                        in License 1 and I will pass in License 2 in next year.
                        Now , I study in ISPM Antsobolo where I discover and
                        learn new thing about IT development.
                      </p>

                      <button className="btn">
                        <FontAwesomeIcon icon={faFile} className="-mx-2 icon" />{" "}
                        Book my Resume
                      </button>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
