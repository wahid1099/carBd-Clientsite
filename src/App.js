import logo from './logo.svg';
import './App.css';
import Menu from "./Component/Navbar/Menu";
import Carousal from "./Component/Carousal/Carousal";
import Footer from "./Component/Footer/Footer";
import Choosingreasone from "./Component/Chooseus/Choosingreasone";
import OurFeutures from "./Component/Feutures/OurFeutures";
import Aboutus from "./Component/Aboutus/Aboutus";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import CarsServicePage from "./Pages/CarsServicePage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";
import LogIn from "./PrivateRoute/LogIn";
import AuthProvider from "./Context/AuthProvider";
import RegisterPage from "./Pages/RegisterPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Myorders from "./Pages/Myorders";
import DashBoardHome from "./Component/AdminDashBoard/DashBoardHome";
import MakeAdmin from "./Component/AdminDashBoard/MakeAdmin";
import AddCar from "./Component/AdminDashBoard/AddCar";
import ManageCars from "./Component/AdminDashBoard/ManageCars";
import Payment from "./Component/PlaceorderComponent/Payment";
import AddReview from "./Component/Review/AddReview";

function App() {
  return (
    <div className="App">





<AuthProvider>
        <BrowserRouter>
            <Menu></Menu>
            <Switch>
                <Route exact path="/">
                    <HomePage></HomePage>
                </Route>
                <Route exact path="/home">
                    <HomePage></HomePage>
                </Route>

                <Route exact path="/about">
                    <AboutUsPage></AboutUsPage>
                </Route>
                <Route exact path="/contact">
                    <ContactUsPage></ContactUsPage>
                </Route>
                <Route exact path="/allcars">
                    <CarsServicePage></CarsServicePage>
                </Route>
                <Route exact path="/login">
                    <LogIn></LogIn>
                </Route>
                <Route exact path="/register">
                    <RegisterPage></RegisterPage>
                </Route>
                <PrivateRoute exact path="/myorders">
                    <Myorders></Myorders>
                </PrivateRoute>
                <PrivateRoute  path="/dashboard">
                    <DashBoardHome></DashBoardHome>
                </PrivateRoute>
                <PrivateRoute  path="/payment">
                    <Payment></Payment>
                </PrivateRoute>
                <PrivateRoute  path="/adreview">
                    <AddReview></AddReview>
                </PrivateRoute>
                <PrivateRoute  path="/car/:carId">
                    <PlaceOrderPage></PlaceOrderPage>
                </PrivateRoute>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
</AuthProvider>
    </div>
  );
}

export default App;
