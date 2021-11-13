import React, {useState} from 'react';
import {FormControl, InputGroup, Button, Col, Row, Form, Alert} from "react-bootstrap";
import SideNavBarAdmin from "./SideNavBarAdmin";
import UseAuth from "../../Hooks/UseAuth";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = UseAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);

    }

    const handleAdminSubmit = e => {

        const user = { email };
        fetch('https://murmuring-tundra-70437.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true);
                    e.target.reset();
                }
            })

        e.preventDefault()
    }
    return (

        <div>
          <Row>
              {/*<Col md={2}><SideNavBarAdmin></SideNavBarAdmin></Col>*/}
              <Col md={10} className="mx-auto mt-5">
                  <h2 className="mt-5">Make Admin</h2>
                  <Form onSubmit={handleAdminSubmit}>



                  <InputGroup className="mb-3">
                  <FormControl
                      placeholder="Add email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onBlur={handleOnBlur}
                  />
                  <Button variant="secondary" id="button-addon2" type="submit">
                      Make Admin
                  </Button>
              </InputGroup>
                  </Form>
                  {success && <Alert variant="success">Made Admin successfully!</Alert>}


              </Col>
          </Row>
        </div>
    );
};

export default MakeAdmin;