import React, { useEffect, useRef } from 'react';
import Couv from "./../assets/MERN_couv.jpg";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Zoom } from "react-awesome-reveal";


const Welcoming_page:React.FC = () => {

    const typewriterRef = useRef<any | null>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      typewriterRef.current
        .typeString("GeeksForGeeks")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Welcomes You")
        .start();
    }
  }, []);

  return (
    <div className="welcoming">
      <div className="welcoming_content d-flex">
        <div className="row gx-5">
          <div className="col-6">
            <div className="desc">
              <Zoom>
                <div className="row">
                  <div className="col-12">
                    <div className="title">
                      <h1>
                        Welcome to MY <span>PORTFOLIO</span>
                      </h1>
                      <h2>
                        <Typewriter
                          options={{
                            loop: true, // Active la boucle
                          }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("I'm a Javascript Developer")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("I'm fascinated by new technologies")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("I search best IT solutions")
                              .start();
                          }}
                        />
                      </h2>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="description">
                      <p>
                        I'm a Javascript fullstack Developer, I am looking for
                        efficiency, effectiveness of all my programs , I'm using
                        mostly for dynamic Web App{" "}
                        <b> REACT JS and TYPESCRIPT JS</b> for frontend and{" "}
                        <b>NODE JS </b> for serverside{" "}
                      </p>
                      <div className="button ">
                        <button className="btn">More details </button>
                        <button className="btn mx-4">Book my Resume</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
          <div className="col-6">
            <div className="triangle">
              <div className="content">
                 <img src={Couv} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcoming_page;

