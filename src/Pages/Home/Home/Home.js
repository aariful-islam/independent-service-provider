

import "./Home.css";
import banner1 from "../../../images/homeBanner.PNG";

import Services from "../Services/Services/Services";
import { Carousel } from "react-bootstrap";

const Home = () => {
  
  return (
 
    <div>
      <Carousel>
     
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
