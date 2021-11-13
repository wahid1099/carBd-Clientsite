import React, {useEffect, useState} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import SideNavBarAdmin from "./SideNavBarAdmin";
import ManagecarComponent from "./ManagecarComponent";

const ManageCars = () => {

    const [managecar,setmanageCar]=useState([]);

    useEffect(()=>{
        fetch('https://murmuring-tundra-70437.herokuapp.com/cars')
    .then(res=>res.json())
            .then(data=>{
                setmanageCar(data)
            })
    },[])
    console.log(managecar);
    return (
        <div>
            <Row>
                <Col md={2}>
                    <SideNavBarAdmin></SideNavBarAdmin>
                </Col>
                <Col md={10}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Car Name</th>
                            <th>Car Price</th>
                            <th>Car Model</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            managecar.map(car=><ManagecarComponent
                                key={car._id}
                                cars={car}>

                                </ManagecarComponent>
                            )
                        }


                        </tbody>
                    </Table>


                </Col>
            </Row>
        </div>
    );
};

export default ManageCars;