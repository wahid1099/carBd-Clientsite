import React, {useEffect, useState} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import Car from "../Component/Cars/Car";

const CarsServicePage = () => {
    const [allcars,setAllcars]=useState([]);
    const [isLoading,setIsloading]=useState(true);
    useEffect(()=>{
        fetch('https://murmuring-tundra-70437.herokuapp.com/cars')
            .then(res=>res.json())
            .then(data=>{
                setAllcars(data)
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
                    allcars.map(car=><Car
                        key={car._id}
                        car={car}>

                    </Car>)
                }
            </Row>
        </Container>
    );
};

export default CarsServicePage;