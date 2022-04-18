import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import './services.css'



const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="services">
      <h1 className="mt-5 my-0 text-center">My Services</h1>

      <div className="services-container my-3">
        {services.map((service) => <Service
        key={service.id}
        service={service}
        ></Service>
          
        )}
      </div>
    </div>
  );
};

export default Services;
