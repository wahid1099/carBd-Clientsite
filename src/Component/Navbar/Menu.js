import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Button, Dropdown} from "react-bootstrap";
import logo from '../../Image/logo.png';
import {Link} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {FaUserAlt, MdLogin} from "react-icons/all";
const Menu = () => {
    const {user,logout,admin}=UseAuth();

    return (
<div>
    <Navbar collapseOnSelect expand="lg"  variant="light">
        <Container>
            <Navbar.Brand href="#home"><img src={logo}/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link  as={Link} to="/about">About us</Nav.Link>
                    <Nav.Link  as={Link} to="/allcars">Cars</Nav.Link>

                    <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>



                    {user.accessToken ?
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FaUserAlt/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {user?.accessToken  &&  <span className="text-primary ms-3"><strong>Hello {user.displayName } </strong> </span>  }
                                {user?.accessToken && !admin &&     <Dropdown.Item as={Link} to="/myorders">My Orders</Dropdown.Item>}
                                {user?.accessToken && !admin &&     <Dropdown.Item as={Link} to="/payment">Payment</Dropdown.Item>}
                                {user?.accessToken && !admin &&     <Dropdown.Item as={Link} to="/adreview">Reviews</Dropdown.Item>}
                                {user?.accessToken && admin &&     <Dropdown.Item as={Link} to="/dashboard">DashBoard</Dropdown.Item>}
                                <Nav.Link href="#deets"  className="text-black" as={Link} to="/logout"><Button variant="danger" onClick={logout}>Log Out</Button></Nav.Link>
                            </Dropdown.Menu>

                        </Dropdown> : <Nav.Link href="#deets" className="text-black" as={Link} to="/login"><Button variant="danger"><MdLogin/>LogIn</Button></Nav.Link>



                    }




                </Nav>


            </Navbar.Collapse>
        </Container>
    </Navbar>

</div>
    );
};

export default Menu;