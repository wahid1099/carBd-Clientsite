import React from 'react';
import {Redirect, Route} from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import {Spinner} from "react-bootstrap";

const AdminRoute = ({children,...rest}) => {
    const { user, admin, isLoading } = UseAuth();

    if (!admin || isLoading ){
        return <Spinner animation="border" />;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;