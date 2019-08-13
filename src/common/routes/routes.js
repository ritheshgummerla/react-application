import React, { Component } from 'react';
import { Route, } from "react-router-dom";
import Login from "../login/login";
import {PrivateRoute}  from "../login/auth";
import routeConfig from "./routeConfig"

class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" component={Login} />
                {routeConfig.map((route, i) => (
              <PrivateRoute key={route} {...route} />
            ))}
            </React.Fragment>
        );
    }
}

export default Routes;









// import React, { Component } from 'react';
// import { Route, } from "react-router-dom";
// import Dashboard from "./dashboard";
// import MemberHome from "../hc360/member360/pages/home";
// import ProviderHome from "../hc360/provider360/pages/home";
// import Test from "../hc360/provider360/pages/Test";
// import Login from "./login/login";
// import {PrivateRoute}  from "./login/auth"

// class Routes extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Route exact path="/" component={Login} />
//                 <PrivateRoute  exact path="/dashboard" component={Dashboard} />
//                 <Route exact path="/login" component={Login} />
//                 <PrivateRoute exact path="/member" component={MemberHome} />
//                 <PrivateRoute exact path="/provider" component={ProviderHome} />
//                 <Route exact path="/test" component={Test} />
//             </React.Fragment>
//         );
//     }
// }

// export default Routes;