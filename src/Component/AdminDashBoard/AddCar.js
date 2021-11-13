import React, {useState} from 'react';
import {Row, Col, Form, Button, Alert} from "react-bootstrap";
import SideNavBarAdmin from "./SideNavBarAdmin";

const AddCar = () => {
     const [newcar,setNewcar]=useState({});
    const [success, setSuccess] = useState(false);

    const handleOnBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newCarData = {...newcar};

        newCarData[field] = value;
        console.log(newCarData)
        setNewcar(newCarData);

    }
    const name=newcar.name;
    const img=newcar.img;
    const hp=newcar.hp;
    const price=newcar.price;
    const Model=newcar.Model;
    const category=newcar.category;
    const description=newcar.description;
    const  handleAddCar=(e)=>{
        const cardata={category,name,Model,img,description,hp,price};
        fetch('https://murmuring-tundra-70437.herokuapp.com/addcars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cardata)
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
            <Row>
                <Col md={2}>
                    <SideNavBarAdmin></SideNavBarAdmin>
                </Col>
                <Col md={10}>
                    <h3>Add new Car</h3>
                    {success && <Alert variant="success">New Car Added successfully!</Alert>}

                    <Form onSubmit={handleAddCar}>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter Category" name="category" onBlur={handleOnBlur} />

                        </Form.Group>

                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Enter car Name" name="name" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Enter car Model" name="Model" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Enter car Image Link" name="image" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Enter car description" name="description" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Enter car hp" name="hp" onBlur={handleOnBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">

                            <Form.Control type="text" placeholder="Enter car price" name="price" onBlur={handleOnBlur} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-50">
                            Add car
                        </Button>
                    </Form>



                </Col>
            </Row>

        </div>
    );
};

export default AddCar;