import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import image1 from "./../assets/react.png";
import image2 from "./../assets/node.jpg";
import image3 from "./../assets/MERN.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const handleHover = () => {
    setOpen(!open);
  };

  const handleHover1 = () => {
    setOpen1(!open1);
  };

  const handleHover2 = () => {
    setOpen2(!open2);
  };

  const mouseLeave = () => {
    setOpen(false);
  };
  const mouseLeave1 = () => {
    setOpen1(false);
  };

  const mouseLeave2 = () => {
    setOpen2(false);
  };

  return (
    <div className="services">

        <div className="row" id="row1">
          <div className="col-12">
            <div className="title text-center">
              <h2 className="d-flex text-center justify-content-center">
                {" "}
                <div className="spinner"></div> IT solutions
              </h2>
              <h1>I always search the best IT Solutions</h1>
              <p>
                I propose for all my projects an interactive interface and a
                dynamic Serverdide for a best experiences for my apps{" "}
              </p>
            </div>
          </div>
        </div>


      <div className="row gx-5" id="row2">
        <div className="  col-4">
          <div className="box">
            <div className="row">
              <div className="col-12">
                <div className="box_img">
                  <img src={image1} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div
                  className={`box_content ${open ? "open" : "close"}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={mouseLeave}
                >
                  <div className="main-title  text-center">
                    <h1>An interactive Frontend</h1>
                    <div className={`lig ${open ? "lig_open" : "lig_close"}`}></div>
                  </div>
                  <div className="desc mt-3  text-center">
                    <p className="truncate">
                      I always try to give dynamic renderings to each project
                      that I carry out I generally useReact js and Typescript js
                      for a reactive project
                    </p>
                    <button className="btn">Book my technos <FontAwesomeIcon icon={faCode} className="icone" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  col-4">
          <div className="box">
            <div className="row">
              <div className="col-12">
                <div className="box_img">
                  <img src={image2} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div
                  className={`box_content ${open1 ? "open" : "close"}`}
                  onMouseEnter={handleHover1}
                  onMouseLeave={mouseLeave1}
                >
                  <div className="main-title text-center">
                    <h1>An efficient serverside</h1>
                    <div className={`lig ${open1 ? "lig_open" : "lig_close"}`}></div>
                  </div>
                  <div className="desc mt-3  text-center">
                    <p className="truncate">
                      Personally I like when the backend of my apps are very
                      dynamic whether it is node js with html or with react.
                      That's Why I choose Node js , for me it was the most fast
                      serverside langage
                    </p>
                    <button className="btn">Book my technos <FontAwesomeIcon icon={faCode} className="icone" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  col-4">
          <div className="box">
            <div className="row">
              <div className="col-12">
                <div className="box_img">
                  <img src={image3} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div
                  className={`box_content ${open2 ? "open" : "close"}`}
                  onMouseEnter={handleHover2}
                  onMouseLeave={mouseLeave2}
                >
                  <div className="main-title  text-center">
                    <h1>Dynamic fullstack App</h1>
                    <div className={`lig ${open2 ? "lig_open" : "lig_close"}`}></div>
                  </div>
                  <div className="desc mt-3  text-center">
                    <p className="truncate">
                      For a dynamic web app I use MERN Stack for better
                      performance of my app, React js to ensure dynamic
                      rendering and node js for a better serverside and MongoDB
                    </p>
                    <button className="btn">Book my technos <FontAwesomeIcon icon={faCode} className="icone" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
