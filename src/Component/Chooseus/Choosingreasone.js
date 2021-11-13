import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { RiCheckFill } from "react-icons/ri";
import aboutpic from '../../Image/about-pic.jpg';
const Choosingreasone = () => {
    return (
        <div className="pt-5 mb-4">
            <Container>
                <Row >
                    <Col md={6} sm={12}  >
                        <h2 className="pt-2 float-start mb-4">Why People Choose Us</h2><br/><br/><br/>
                        <h5 className="text-start">Duis aute irure dolorin reprehenderits volupta velit dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.
                        </h5>
                        <h6  className="text-start pt-3"><RiCheckFill/> Best Service in country</h6>
                        <h6  className="text-start pt-2"><RiCheckFill/> 24/7 Customer Support</h6>
                        <h6  className="text-start pt-2"><RiCheckFill/> Free Servicing for 1 year</h6>
                        <h6  className="text-start pt-2"><RiCheckFill/> Low cost Servicing</h6>
                        <h6  className="text-start pt-2"><RiCheckFill/> Low cost insurance policy</h6>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src={aboutpic} className="img-fluid"/>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Choosingreasone;