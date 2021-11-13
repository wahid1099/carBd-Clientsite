import React, {useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Alert, Button, Form} from "react-bootstrap";

const AddReview = () => {
    const {user}=UseAuth();
    const [success, setSuccess] = useState(false);

    const[review,setReview]=useState({});
    const handleOnBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = {...review};

        newReviewData[field] = value;
        console.log(newReviewData)
        setReview(newReviewData);

    }
     const username=user.displayName;
    const userEmail=user.email;
    const description=review.description;
    const rating=review.rating;


    const  handleAddReview=(e)=>{
        const reviewdata={username,userEmail,description,rating};
        fetch('https://murmuring-tundra-70437.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    e.target.reset();
                    setSuccess(true);
                }
            })
        e.preventDefault();


    }


    return (
        <div>
             <h3>Add a Review</h3>
            <Form onSubmit={handleAddReview}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your Name" name="name"  defaultValue={user.displayName} />
               </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Email" name="email"  defaultValue={user.email} />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Review" name="description" onBlur={handleOnBlur}  as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Rating 1 to 5" name="rating"  onBlur={handleOnBlur} />
                </Form.Group>
                <Button type="submit">Submit Review</Button>
                {success && <Alert variant="success">Review added successfully!</Alert>}

            </Form>
            
        </div>
    );
};

export default AddReview;