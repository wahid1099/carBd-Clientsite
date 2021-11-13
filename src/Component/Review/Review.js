import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import { BsFillPersonFill } from "react-icons/bs";
import './review.css';
const Review = (props) => {
    const{username,userEmail,description,rating}=props.review;
    const initialrating=parseInt(rating);
    return (
        <Col>
            <Card className="text-start">
                <Card.Body>
                    <BsFillPersonFill style={{width:'50px',height:'50px'}}/>

                    <Card.Title>Client Name :{username}</Card.Title>
                    <Card.Text >

                        <p className="text-start">{description?.slice(0,200)}....read more</p>
                        <Rating   initialRating={initialrating} readonly
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"></Rating>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;