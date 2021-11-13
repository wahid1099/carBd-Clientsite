import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Alert, Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import UseAuth from "../Hooks/UseAuth";

const PlaceOrderPage = () => {
    const {carId}=useParams();
    const [placeorder,setplaceOrder]=useState({});
    const [isLoading,setIsloading]=useState(true);
    const[userdetails,setUserdetails]=useState('');
    const [success, setSuccess] = useState(false);

    const {user}=UseAuth();
    useEffect(()=>{
        fetch(`https://murmuring-tundra-70437.herokuapp.com/cars/${carId}`)
            .then(res=>res.json())
            .then(data=>{
                setplaceOrder(data)
                setIsloading(false)
            });
    },[]);
    // console.log(placeorder);
    const{_id,name,img,Model,hp,price,category,description}=placeorder || {}


    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newuserdata={...userdetails};
        newuserdata[field]=value;
        setUserdetails(newuserdata);

    }
    const useremail=user.email;
    const username=user.displayName;
    const adress=userdetails.adress;
    const phone=userdetails.phone;

    const carbought={name,img,Model,hp,category,price,useremail,username,adress,phone};
    const handleplaceorder = e => {

        fetch('https://murmuring-tundra-70437.herokuapp.com/buycar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carbought)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                }
            })


        e.preventDefault();
    }

    if (isLoading){
        return <Spinner animation="border" />;
    }


    return (
        <div>
            <h1>Buy Your Dream Car Today</h1>
            <hr/>
           <Container className="mb-5">
               <Row>
                   <Col md={6} sm={12} className="text-start">
                       <img src={img} className="img-fluid h-50" />
                       <hr/>
                       <h3>Car:{name}</h3>
                       <h3>Model:{Model}</h3>
                       <h3>Hp:{hp}hp</h3>
                       <h3>Car type:{category}</h3>
                       <p>Details:<small>{description}</small></p>

                   </Col>
                   <Col md={6} sm={12}>
                       <h3>Delivery details</h3>
                       <Form onSubmit={handleplaceorder}>
                           <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                               <Form.Control type="email" placeholder="Enter email" name="email"  defaultValue={user.email} />

                           </Form.Group>
                           <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                               <Form.Control type="text" placeholder="Enter name"  name="name"  defaultValue={user.displayName} />

                           </Form.Group>
                           <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                               <Form.Control type="text" placeholder="Enter Phone Number"  name="phone"  onBlur={handleOnBlur}/>

                           </Form.Group>
                           <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                               <Form.Control type="text" placeholder="Enter Adress"   name="adress" onBlur={handleOnBlur}/>

                           </Form.Group>
                           <Button variant="success"  type="submit">Place Order</Button>
                       </Form>
                       {success && <Alert variant="success">Order Pllace successfully!</Alert>}



                   </Col>

               </Row>

           </Container>

            
        </div>
    );
};

export default PlaceOrderPage;