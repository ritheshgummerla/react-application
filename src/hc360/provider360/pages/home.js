import React, { Component } from 'react'
import LineChart from "../../member360/components/LineChart"
import PieChart from "../../member360/components/PieChart"
import PieChart2 from "../../member360/components/PieChart2"
import { withStyles } from "@material-ui/styles";
import MemberListTable from "../../member360/components/MemberListTable"
import { bindActionCreators } from "redux";
import {onLoadMemberData} from "../../../redux-modules/actions/memberAction"
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

const styles = {};
class home extends Component {
  componentDidMount=()=>{
    this.props.onLoad()
  }
  render() {
    const {memberData} = this.props.Data
    return (
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <PieChart2 />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <MemberListTable memberList={memberData} />
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onLoad:onLoadMemberData,
    },
    dispatch
  );

const mapStateToProps = state =>({
  Data: state.memberReducer
});

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(home));

