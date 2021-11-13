import React from 'react';
import {Col, Nav, Row} from "react-bootstrap";
import SideNavBarAdmin from "./SideNavBarAdmin";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from "../../PrivateRoute/AdminRoute";
import MakeAdmin from "./MakeAdmin";
import AddCar from "./AddCar";
import ManageCars from "./ManageCars";
import ManageUserOrders from "./ManageUserOrders";
const DashBoardHome = () => {

    let { path, url } = useRouteMatch();

    return (
        <>
            <Row>
                <Col md={2} className="text-start bg-black">
                    <h3 className="text-white">Dashboard</h3>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link as={Link} to={`${url}`}>Dashboard</Nav.Link>
                        <Nav.Link as={Link}  to={`${url}/makeAdmin`}>MAKE ADMIN</Nav.Link>
                        <Nav.Link as={Link}  to={`${url}/addcar`}>ADD CARS</Nav.Link>
                        <Nav.Link as={Link}  to={`${url}/managecar`}>
                            MANAGE CARS
                        </Nav.Link>
                        <Nav.Link as={Link}  to={`${url}/manageorders`}>
                            MANAGE ORDERS
                        </Nav.Link>


                    </Nav>
                </Col>
                <Col md={8}>
                    <h3>Hello Admin Welcome to Dashboard</h3>
                    <Switch>

                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addcar`}>
                            <AddCar></AddCar>

                        </AdminRoute>
                        <AdminRoute path={`${path}/managecar`}>
                            <ManageCars></ManageCars>

                        </AdminRoute>
                        <AdminRoute path={`${path}/manageorders`}>
                            <ManageUserOrders></ManageUserOrders>

                        </AdminRoute>
                    </Switch>
                </Col>
            </Row>


        </>
    );
};

export default DashBoardHome;