import React, {useEffect, useState} from 'react';
import Review from "./Review";
import {Container, Row} from "react-bootstrap";

const Reviews = () => {
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch('https://murmuring-tundra-70437.herokuapp.com/reviews')
            .then(res=>res.json())
            .then(data=>{
                setReviews(data)
            })
    },[]);

    return (
        <div>
            <Container>
            <h2>Reviews By our Customer</h2>
            <Row xs={1} md={3} className="g-4">
            {
                reviews.map(review=><Review
                key={review._id}
                review={review}>

                </Review>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default Reviews;