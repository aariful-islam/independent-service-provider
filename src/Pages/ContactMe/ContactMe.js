import React from 'react';
import { Button, Form } from 'react-bootstrap';


const ContactMe = () => {
    return (
        <div>
            <div className='row bg-light mt-5 m-5'>
                <div className='col-4 p-5'>
                    <h1>Address</h1>
                    <h4>Mirpur-1,Dhaka-1216</h4>
                </div>
                <div className='col-4 p-5'>
                    <h1>Contact Number</h1>
                    <h4>01xxxxxxx</h4>
                </div>
                <div className='col-4 p-5'>
                    <h1>Gmail</h1>
                    <h4>arif@gmail.com</h4>

                </div>

            </div>
            <h1 className='text-center'>Get in touch</h1>

            <Form className="w-50 mx-auto my-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tell me your queries</Form.Label> <br />
          <textarea type="textArea" rows={5}required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
        </div>
    );
};

export default ContactMe;