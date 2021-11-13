import React from 'react';
import {Carousel,Container} from "react-bootstrap";
import './carousal.css';
const Carousal = () => {
    return (
        <Container>
            <Carousel className="p-5 w-100 ">
                <Carousel.Item>
                    <img
                        className="d-block slider-img"
                        src="https://i.ibb.co/fd0YV61/foardmustang.jpg"
                        alt="Forad Mustang"
                    />
                    <Carousel.Caption>
                        <h3>FORD MUSTANG</h3>
                        <p>There’s nothing like the sound of a stampede.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block slider-img"
                        src="https://i.ibb.co/fDW1gk4/2020-Toyota-Corolla.jpg"
                        alt="TOYOTA COROLA"
                    />

                    <Carousel.Caption>
                        <h3>TOYOTA COROLLA</h3>
                        <p>Sleek and sharp, Corolla SE Nightshade Edition is designed to match your sense of style.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block slider-img"
                        src="https://i.ibb.co/bLFYCyd/hondacivic.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>HONDA CIVIC</h3>
                        <p>Honda Civic is a good compact car. Kicking off the model's 11th generation.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Carousal;