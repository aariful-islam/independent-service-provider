import "./Home.css";
import banner1 from "../../../images/homeBanner.PNG";
import Services from "../Services/Services/Services";
import { Carousel } from "react-bootstrap";
import exercise from "../../../images/exercise.jpg";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Second slide" />

          <Carousel.Caption
            className="carousel-caption d-flex flex-column justify-content-center h-100"
            style={{ top: "0" }}
          >
            <h1 className="">
              Welcome to <span className="text-warning">workout with Arif</span>{" "}
            </h1>
            <h4>Workout with me, keep your body feet and be healthy</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="row m-5">
        <div className="col-lg-7 col-md-7-col-sm-12">
          <h1>Benefits of Exercise</h1>
          <p>
            We have all heard it many times before - regular exercise is good
            for you, and it can help you lose weight. But you are busy, you have a sedentary job, and you haven't
            yet changed your exercise habits. The good news is that it's never
            too late to start. You can start slowly, and find ways to fit more
            physical activity into your life. To get the most benefit, you
            should try to get the recommended amount of exercise for your age.
            If you can do it, the payoff is that you will feel better, help
            prevent or control many diseases, and likely even live longer
          </p>
          <h1>What are the health benefits of exercise?</h1>
          <ul>
            <li>Help you control your weight</li>
            <li>Reduce your risk of heart diseases</li>
            <li>Help your body manage blood sugar and insulin levels</li>
            <li>Help you quit smoking</li>
            <li>Improve your mental health and mood</li>
            <li>Strengthen your bones and muscles.</li>
            <li>Reduce your risk of some cancers.</li>
            <li>Improve your sleep.</li>
            
          </ul>
        </div>
        <div className="col-lg-5 col-md-7-col-sm-12 d-flex justify-content-center">
          <img className="img-fluid" src={exercise} alt="" />
        </div>
      </div>

      <Services></Services>
    </div>
  );
};

export default Home;
