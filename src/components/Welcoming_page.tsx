import React, { useEffect, useRef } from 'react';
import Couv from "./../assets/screen.png";
import Typewriter from "typewriter-effect";

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
        <div className="row">
          <div className="col-5">
            <div className="desc">
              <div className="row">
                <div className="col-12">
                  <div className="title">
                    <h1>
                      Hi, I'm EMADISSON <span>JOHAN</span>
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
                      <button className="btn">More details</button>
                      <button className="btn mx-4">Book my Technos</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="triangle">
              <img src={Couv} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcoming_page;

