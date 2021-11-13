import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import footerbgimg from '../../Image/footerbg.jpg';
import { BsFillPhoneFill,BsPhone } from "react-icons/bs";
import { RiMailAddLine,RiFacebookBoxFill,RiTwitterFill,RiYoutubeFill ,RiWhatsappFill} from "react-icons/ri";
import logo from "../../Image/logo.png";
import './foooter.css';
const Footer = () => {

    const footerbg = {
        background: `url(${footerbgimg})`,
        backgroundSize:'cover',
      paddingBottom:'90px',
        paddingTop:'50px,' ,
        marginTop:'50px'


    }
    return (
        <div style={footerbg} className="mt-5">
            <Container>
            <Row >
                <Col md={6} sm={12}><h1 className="text-white text-start mt-3">Contact Us Now!</h1></Col>
                <Col md={6} sm={12} className="mt-4">
                    <Button variant="danger"><BsPhone/>(+12) 345 678 910</Button>
                    <Button variant="danger" className="ms-3"><RiMailAddLine/> CarBd@gmail.com</Button>
                </Col>
            </Row>

                <Row className="pt-5">
                    <Col md={4} sm={6}>

                        <img src={logo} className="float-start "/><br/><br/>
                        <p className="text-white-50 text-start">
                            Any questions? Let us know in store at 625 Gloria Union, California, United Stated or call us on (+1) 96 123 8888
                        </p>
                        <div className="float-start">
                            <RiFacebookBoxFill className="icon"/>
                            <RiTwitterFill className="icon"/>
                            <RiYoutubeFill className="icon"/>
                            <RiWhatsappFill className="icon"/>

                        </div>
                    </Col>
                    <Col md={2} sm={6} className="text-start">
                        <h3 className="text-white">Infomation</h3>
                        <h6 className="text-white pt-1"> Purchase</h6>
                        <h6 className="text-white pt-1">  Payemnt</h6>
                        <h6 className="text-white pt-1">  Shipping</h6>
                        <h6 className="text-white pt-1"> Return</h6>
                    </Col>
                    <Col md={2} sm={6} className="text-start">
                        <h3 className="text-white">Top Brand</h3>
                        <h6 className="text-white pt-1"> BMW</h6>
                        <h6 className="text-white pt-1">Chevrolet</h6>
                        <h6 className="text-white pt-1">Ferrari</h6>
                        <h6 className="text-white pt-1">Audi</h6>
                    </Col>

                    <Col md={4} sm={6}>
                        <h2 className="float-start text-white">Subcribe to our Newsletter</h2>
                        <Form>
                            <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>
                        </Form>
                        <Button variant="outline-danger">Subscribe </Button>

                    </Col>

                </Row>
                <h5 className="text-white float-start mt-4">Copyright ©2021 All rights reserved | by Abdul Wahid</h5>
            </Container>
            
        </div>
    );
};

export default Footer;