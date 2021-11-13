import React from 'react';
import Carousal from "../Component/Carousal/Carousal";
import Aboutus from "../Component/Aboutus/Aboutus";
import OurFeutures from "../Component/Feutures/OurFeutures";
import Choosingreasone from "../Component/Chooseus/Choosingreasone";
import Cars from "../Component/Cars/Cars";
import Reviews from "../Component/Review/Reviews";

const HomePage = () => {
    return (
        <div>
            <Carousal></Carousal>
            <Aboutus></Aboutus>
            <Cars></Cars>
            <Reviews></Reviews>
            <OurFeutures></OurFeutures><br/><br/><br/>
            <Choosingreasone></Choosingreasone>
        </div>
    );
};

export default HomePage;