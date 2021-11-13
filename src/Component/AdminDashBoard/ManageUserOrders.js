import React, {useEffect, useState} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import SideNavBarAdmin from "./SideNavBarAdmin";
import ManagecarComponent from "./ManagecarComponent";
import AlluserOrders from "./AlluserOrders";

const ManageUserOrders = () => {
    const [allorders,setAllorders]=useState([]);

    useEffect(()=>{
        fetch('https://murmuring-tundra-70437.herokuapp.com/allorder')
            .then(res=>res.json())
            .then(data=>{
                setAllorders(data)
            })
    },[])
    return (
        <div>
     <h3>All orders</h3>
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
                            <th>User Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allorders.map(order=><AlluserOrders
                                    key={order._id}
                                    order={order}>

                                </AlluserOrders>
                            )
                        }


                        </tbody>
                    </Table>


                </Col>
            </Row>
        </div>
    );
};

export default ManageUserOrders;