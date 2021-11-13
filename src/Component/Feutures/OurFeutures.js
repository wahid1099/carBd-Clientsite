import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ourserviceimg from '../../Image/enginebattery.jpg';
const OurFeutures = () => {
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row className="text-start">
                    <Col md={6} sm={12}>
                        <img src={ourserviceimg} className="img-fluid"/>
                    </Col>

                    <Col md={6} sm={12} >
                        <h5>Our Feature
                        </h5>
                        <h2>We Are a Trusted Name In Auto
                        </h2>
                        <p className="text-black-50 pe-2">Regular maintenance may seem like an unnecessary car expense, but it often involves matters that you’ll have to take care of sooner or later, and paying for them sooner will often be a less expensive undertaking. Most important is the fact that regular maintenance will helpTopfixauto Repairdubai was founded in 2011 with the goal to provide the best service in car repairs and maintenance.We offer the Services complete diagnosis, repair, maintenance ,Electrical , Mechanical, Denting Painting , Car body scratch remove, Car Body repair, Battery replacement at your location and all kind of auto complete services.
                        </p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default OurFeutures;