import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <Card  className="m-5 container shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <h2>{name} </h2>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <h3>Price {price}</h3>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button>
          Checkout
          <Link to="/checkout" className="w-100"></Link>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Service;
