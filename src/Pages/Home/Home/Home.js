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

      <Services></Services>
    </div>
  );
};

export default Home;
