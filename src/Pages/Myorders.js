import React, {useEffect, useState} from 'react';
import UseAuth from "../Hooks/UseAuth";
import {Table} from "react-bootstrap";
import Orders from "../Component/userOrders/Orders";

const Myorders = () => {
    const [myorders,setOrder]=useState([]);
    const {user}=UseAuth();
    const [success, setSuccess] = useState(false);


    useEffect(()=>{
        fetch(`https://murmuring-tundra-70437.herokuapp.com/carorderd?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                setOrder(data)

            })

    },[]);

    console.log(myorders);

    return (
        <div>
            <h3 className="mt-4">Your Order History</h3>

            <Table striped bordered hover>
                <thead>
                <tr>

                    <th>Order Id</th>
                    <th>Car Name</th>
                    <th>Car Img</th>
                    <th>Price</th>
                    <th>Model</th>
                    <th>Phone</th>
                    <th>Adress</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    myorders.map(orders=><Orders
                    key={orders._id}
                    orders={orders}>

                    </Orders>)
                }
                </tbody>
            </Table>

        </div>
    );
};

export default Myorders;