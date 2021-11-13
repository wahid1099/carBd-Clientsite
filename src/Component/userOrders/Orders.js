import React, {useState} from 'react';
import {Alert, Button, Modal, Toast} from "react-bootstrap";
import {ToastContainer,toast} from "react-toastify";

const Orders = (props) => {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);

    const notify = () => toast("Wow so easy !");
    const handleShow = () => setShow(true);
    const{_id,name,img,price,Model,username,useremail,adress,phone}=props.orders;
    const handleClose = () => setShow(false);

    const handleDelete = () => {
        fetch(`https://murmuring-tundra-70437.herokuapp.com/delteOrder/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setShow(false);

                    setSuccess(true);



                }
            });

    };


    return (
<>
    {success && <Alert variant="success">Order Cancel successfully!</Alert>}
            <tr>



                <td>{_id}</td>
                <td>{name}</td>
                <td><img src={img} style={{width:'70px',height:'40px'}}/></td>
                <td>{price}</td>
                <td>{Model}</td>
                <td>{phone}</td>
                <td>{adress}</td>
                <td><Button variant="danger"  onClick={handleShow}>Cancel Order</Button></td>
            </tr>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               No
            </Button>
            <Button variant="primary" onClick={handleDelete}>
                Yes
            </Button>
        </Modal.Footer>
    </Modal>
    </>


    );
};

export default Orders;