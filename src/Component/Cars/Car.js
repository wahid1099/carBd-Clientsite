import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Car = (prpos) => {
    const{_id,name,img,Model,hp,price,category,description}=prpos.car;
    return (

            <Col>
                <Card className="border-0">
                    <Card.Img variant="top" src={img} className="img-fluid" style={{height:'200px'}} />
                    <Card.Body>

                        <Card.Title>-{name}-</Card.Title>
                        <Card.Text >
                           <p className="text-start">{description?.slice(0,200)}....read more</p>
                        </Card.Text>
                        <h4 className="text-start">Model:{Model}</h4>


                        <div className="d-flex"><h5 className="me-2">Price:{price}</h5> |<h5 className="ms-2 me-2">{hp}hp</h5>|<h5 className="ms-2 me-2">{category}</h5></div>

                       <Link to={`/car/${_id}`}>
                           <Button variant="outline-dark" className="float-start">Buy Now</Button>
                       </Link>

                    </Card.Body>
                </Card>
            </Col>

    );
};

export default Car;