import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import myStore from "../../redux-modules/store"
import {moduleStatusChange} from "../../redux-modules/actions/loginAction"

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="bc" key={match.url} style={{float:"left",}}>
        <Link to={match.url || ""} style={{margin:"7px",}}>{index === 0 ? <span onClick={()=>myStore.dispatch(moduleStatusChange())}>Dashboard</span> :breadcrumb}</Link>
        {index < breadcrumbs.length - 1 && ">"}
      </div>
    ))}
  </div>
);

export default withBreadcrumbs()(PureBreadcrumbs);