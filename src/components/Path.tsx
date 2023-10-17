import React from 'react';
import i1 from "./../assets/day1.jpg";
import i2 from "./../assets/day2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';

const Path: React.FC = () => {
    return (
      <div className="path">
        <div className="row" id="row1">
          <div className="col-12">
            <div className="title text-center">
              <h2 className="d-flex text-center justify-content-center">
                {" "}
                <div className="spinner"></div> My studies
              </h2>
              <h1>The path that I have crossed</h1>
            </div>
          </div>
        </div>

        <div className="row " id="row2">
          <div className="col-12">
            <div className="path_content">
              <div className="row gy-5">
                <div className="col-12">
                  <div className="journey-lycee d-flex">
                    <div className="item d-flex justify-content-center align-items-center">
                      <div className="lig"></div>
                      <div className="circle1"></div>
                      <div className="circle">
                        {" "}
                        <FontAwesomeIcon icon={faGraduationCap} id="icon" />
                      </div>
                    </div>

                    <div className="content">
                      <div className="row">
                        <div className="col-5">
                          <div className="image">
                            <img src={i1} alt="" />
                          </div>
                        </div>

                        <div className="col-7">
                          <div className="desc">
                            <h1>High School grade</h1>
                            <div className="border"></div>
                            <p className="mt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maiores error tempore harum, eum
                              reprehenderit at facilis quibusdam corrupti
                              delectus id nobis totam. Hic minima quae sint
                              illum, aliquid reiciendis accusamus! Lorem ipsum
                              dolor sit amet consectetur adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="journey-univ d-flex">
                    <div className="item d-flex justify-content-center align-items-center">
                      <div className="lig"></div>
                      <div className="circle">
                        <FontAwesomeIcon icon={faUniversity} id='icon' />
                      </div>
                    </div>

                    <div className="content">
                      <div className="row">
                        <div className="col-5">
                          <div className="image">
                            <img src={i2} alt="" />
                          </div>
                        </div>

                        <div className="col-7">
                          <div className="desc">
                            <h1>University License 1</h1>
                            <div className="border"></div>
                            <p className="mt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maiores error tempore harum, eum
                              reprehenderit at facilis quibusdam corrupti
                              delectus id nobis totam. Hic minima quae sint
                              illum, aliquid reiciendis accusamus! Lorem ipsum
                              dolor sit amet consectetur adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
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

export default Path;