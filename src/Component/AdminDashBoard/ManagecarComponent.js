import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";

const ManagecarComponent = (props) => {
    const {name,img,Model,hp,category,price,_id}=props.cars;

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        fetch(`https://murmuring-tundra-70437.herokuapp.com/deletecar/${_id}`, {
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
            {success && <Alert variant="success">Car deleted successfully!</Alert>}

            <tr>

                <td>{_id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{Model}</td>
                <td><Button variant="danger" onClick={handleShow}>Delete</Button></td>

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
            </tr>
        </>
    );
};

export default ManagecarComponent;