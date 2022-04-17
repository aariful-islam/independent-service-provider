import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import banner from '../../../images/banner.jpg'
import Services from "../Services/Services";

const Home = () => {
  return (
   
    //   <Container className="banner">
    //     <h1 className="banner-text text-light">Welcome to 
    //     <br />
    //     <span>Workout with ARIF</span>
    //     </h1>
    //   </Container>
    <div>
         <div className="row">
        <div className="col-5">
            <h1>Welcome to Workout with ARIF</h1>

            
        </div>
        <div className="col-6">
            <img className="img-fluid" src={banner} alt="" />


        </div>

    </div>
        <Services></Services>
    </div>
   
    
    
  );
};

export default Home;
