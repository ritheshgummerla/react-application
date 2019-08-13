import React, { Component } from 'react';
import { Router, Route, } from "react-router-dom";
import { history } from "./history/history";
import Dashboard from "./dashboard";
import MemberHome from "../hc360/member360/pages/home";
import ProviderHome from "../hc360/provider360/pages/home"
import Login from "./login"
import Layout from './layout';
class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/member" component={MemberHome} />
                <Route exact path="/provider" component={ProviderHome} />
            </Router>
        );
    }
}

export default Routes;