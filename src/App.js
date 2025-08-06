// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoute from "./components/route/Route";
import Header from "./components/Header";
import Home from './components/pages/Home';
import ScrollToAnchor from "./components/ScrollToAnchor";
import AuthProvider from "./components/hooks/AuthProvider";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import React from "react";
// import * as ScrollMagic from 'scrollmagic';
// import gsap,{ TweenMax, Power2, TimelineLite, TweenLite, TimelineMax, Linear } from "gsap";
// import { useGSAP } from "@gsap/react";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = { color: "white" };
    //     this.controller = new ScrollMagic.Controller();
    // }

    componentDidMount() {

    }

    render() {
      return (
            <>
                {/*<Helmet>*/}
                {/*    <meta charSet="utf-8" />*/}
                {/*    <title>{process.env.REACT_APP_NAME}</title>*/}
                {/*    <link rel="shortcut icon" href="../public/favicon.png" />*/}
                {/*</Helmet>*/}
                <Router>
                    <ScrollToAnchor/>
                    <AuthProvider>
                        <Header/>
                        <Routes>
                            <Route path='/' exact element={<Home/>} />
                            <Route element={<PrivateRoute />}>
                            </Route>
                            <Route path='/sign-in' element={<SignIn/>} />
                            <Route path='/sign-up' element={<SignUp/>} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </>
        );
    }
}

export default App;
