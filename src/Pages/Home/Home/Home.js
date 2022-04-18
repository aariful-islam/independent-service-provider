import React, { useState } from "react";

import "./Home.css";
import banner1 from "../../../images/homeBanner.PNG";
import banner2 from "../../../images/banner.jpg"
import Services from "../Services/Services/Services";
import { Carousel, Container } from "react-bootstrap";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
 
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center h-100" style={{top:"0"}}>
          <h1 className="">Welcome to <span className="text-warning">workout with Arif</span> </h1>
          <h4>Workout with me, keep your body feet and be healthy</h4>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>










      {/* <Container>
        <div className="row mt-5">
          <div className="col-6">
            <h1>
              <span className="m-5 me-3">Welcome to </span> <br />
              <span className="text-primary">Workout with ARIF</span>{" "}
            </h1>
            <p>
              Hi dear, I'm a professional gym trainer. I can be your personal gym trainer
            </p>
          </div>
          <div className="col-6">
            <img className="img-fluid" src={banner} alt="" />
          </div>
        </div>
      </Container> */}
      

      <Services></Services>
    </div>
  );
};

export default Home;
