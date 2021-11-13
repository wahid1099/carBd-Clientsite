import React from 'react';
import Aboutus from "../Component/Aboutus/Aboutus";
import carddahsboard from '../Image/car-dashboard.jpg';
import {Col, Container, Row} from "react-bootstrap";
const AboutUsPage = () => {
    return (
        <div>
            <Aboutus></Aboutus>

            <img src={carddahsboard} className="img-fluid"/>
          <Container className="mt-5">
              <Row>
                  <Col md={6} sm={12} className="text-start">
                      <h5>Our Mission</h5>
                      <p>Now, I’m not like Robin, that weirdo from my cultural anthropology class; I think that advertising is something that has its place in our society; which for better or worse is structured along a marketplace economy. But, simply because I feel advertising has a right to exist, doesn’t mean that I like or agree with it, in its</p>
                  </Col>
                  <Col md={6} sm={12} className="text-start">
                      <h5>Our Vision</h5>
                      <p>Where do you register your complaints? How can you protest in any form against companies whose advertising techniques you don’t agree with? You don’t. And on another point of difference between traditional products and their advertising and those of the internet nature, simply ignoring internet advertising is
                      </p>
                  </Col>
              </Row>
          </Container>
        </div>
    );
};

export default AboutUsPage;