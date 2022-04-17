import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices]= useState([])
    useEffect( ()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services'>
        
            <h1 className='mt-5 mb-0'>My Services</h1>
            <CardGroup>
            {
                services.map(service=> <Service
                key={service.id}
                service={service}
                ></Service>)
            }

            </CardGroup>
            
        </div>
    );
};

export default Services;