import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import {Spinner} from "react-bootstrap";
import UseAuth from "../Hooks/UseAuth";


const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=UseAuth();
    if (isLoading){
        return <Spinner animation="border" />;
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;