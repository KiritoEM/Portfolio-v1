import React from "react";
import Logo from "./../assets/J.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar_content d-flex">
        <div className="navbar_logo d-flex">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="title">
            <h1>JohanEmades</h1>
          </div>
        </div>

        <div className="navbar_toggle d-flex justify-content-end">
          <ul className="d-flex">
            <li className="d-flex active"><FontAwesomeIcon icon={faHome} className="icone" />  HOME</li>
            <li className="d-flex"><FontAwesomeIcon icon={faEnvelope} className="icone" /> TECHNOS</li>
            <li className="d-flex"><FontAwesomeIcon icon={faEnvelope} className="icone" /> PROJECTS</li>
            <li className="d-flex contact"><FontAwesomeIcon icon={faEnvelope} className="email_icone" /> CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
