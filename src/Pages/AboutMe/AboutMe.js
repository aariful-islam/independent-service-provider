import React from "react";
import image from "../../images/Formal photo.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-sm-12 d-flex align-items-center">
          <div>
            <h1>
              Hi,I am <span>Ariful Islam</span>
            </h1>
            <p>
              I'm Competitive programmer and problem solver. Always I love to
              take challenges and try to solve them in a easy way.I'm trying to
              build my carrer as a web developer.
            </p>
            <p>
              Now I'm doing a course on complete web development with jhaknar
              mahabub. I'm doing hard work last 4 months. I completely focus on
              this course. I'm doing my daily works on time. I do study minimum
              6-8 hours regularly. I'm just focusing on web development. With
              this hard work I hope I can reach my goal insha-allah.
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 ">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
