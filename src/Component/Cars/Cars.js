import React, {useEffect, useState} from 'react';
import {Button, Container, Row, Spinner} from "react-bootstrap";
import Car from "./Car";
import {Link} from "react-router-dom";

const Cars = () => {
    const [cars,setCar]=useState([]);
    const [isLoading,setIsloading]=useState(true);

    useEffect(()=>{
        fetch('https://murmuring-tundra-70437.herokuapp.com/cars')
            .then(res=>res.json())
            .then(data=>{
                setCar(data)
                setIsloading(false)
            });
    },[]);
    if (isLoading){
        return <Spinner animation="border" />;
    }
    return (
        <Container>
            <hr/>
            <h2 className="mt-4">Best Cars To Buy</h2>

            <Row xs={1} md={3} className="g-4">
                {
                    cars.slice(0,6).map(car=><Car
                    key={car._id}
                    car={car}>

                    </Car>)
                }
            </Row>

            <Link to="/allcars"><Button className=" w-50" variant="outline-danger">Explore Cars</Button></Link>
            <hr/>

        </Container>
    );
};

export default Cars;