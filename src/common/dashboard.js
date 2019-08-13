import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {moduleStatus} from "../redux-modules/actions/loginAction"
import "../App.css";
import myStore from "../redux-modules/store";
import { Link } from "react-router-dom";

//icons
import {AccountCircle,PersonRounded,VerifiedUser,NoteAdd,PaymentOutlined,LocalHospitalOutlined,CodeOutlined,PlaylistAddCheckOutlined} from '@material-ui/icons';

//core
import {Card,CardActions,CardContent,Typography,Grid} from '@material-ui/core';

//images
import MemberHeader from "./images/member-bg.png"
import ProviderHeader from "./images/provider-bg.png";
import ClaimsHeader from "./images/claims-bg.png";
import QualityHeader from "./images/quality-bg.png";
import RafHeader from "./images/raf-bg.png";
import PaymentHeader from "./images/payments-bg.png";
import SubmissionHeader from "./images/submission-bg.png";
import CoderHeader from "./images/coder-bg.png";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        // backgroundImage: mpic,
        textAlign: "center",
        // backgroundImage: `url(${ClaimsHeader})`,
        borderRadius: "6px", margin: "10px",
        lineHeight: "1.6",
        // color: "#f3f3f4",

        fontFamily: 'Play',
    },
    cardMemberHeader: {
        height:"50px",
        boxShadow: "0 0px 4px 2px #c8c8c8",
        color:"white",
        fontSize: "16px",
        backgroundImage: `url(${MemberHeader})`,
    },
    cardProviderHeader:{
        boxShadow: "0 0px 4px 2px #c8c8c8",
        height:"50px",
        color:"white",
        fontSize: "16px",
        backgroundImage: `url(${ProviderHeader})`,
    },
    cardClaimsHeader:{
        boxShadow: "0 0px 4px 2px #c8c8c8",
        height:"50px",
        color:"white",
        fontSize: "16px",
        backgroundImage: `url(${ClaimsHeader})`,
    },
    cardQualityHeader:{
        boxShadow: "0 0px 4px 2px #c8c8c8",
        height:"50px",
        color:"white",
        fontSize: "16px",
        backgroundImage: `url(${QualityHeader})`,

    },
    cardRafHeader:{
        boxShadow: "0 0px 4px 2px #c8c8c8",
        height:"50px",
        color:"white",
        fontSize: "16px",
        backgroundImage: `url(${RafHeader})`,
    },
    cardPaymentsHeader:{
        boxShadow: "0 0px 4px 2px #c8c8c8",
        height:"50px",
    color:"white",
    fontSize: "16px",
    backgroundImage: `url(${PaymentHeader})`,
    },
    cardSumissionHeader:{
        boxShadow: "0 0px 4px 2px #c8c8c8",
        height:"50px",
    color:"white",
    fontSize: "16px",
    backgroundImage: `url(${SubmissionHeader})`,
    },
    cardCoderHeader:{
        boxShadow: "0 0px 4px 2px #c8c8c8",
        height:"50px",
    color:"white",
    fontSize: "16px",
    backgroundImage: `url(${CoderHeader})`,
    },
    cardBody: {
    clear: "both",
    /* font-style: normal; */
    fontSize: "14px",
    color: "#6a6868",
    fontFamily: "roboto"

    },
    memberHeader:{
        // backgroundBelndMode:"colorBurn",
    },
    cardButton: {
        border: "none",
        color: "white",
        borderRadius: "25px",
        padding: "10px 25px 10px 25px",
        backgroundColor: "white",
        fontWeight: "bold",
        margin: "15px",
        cursor:"pointer",
    },
    headerIcon:{
        fontSize:"30px",
    },
    para:{
        margin:"10px",
        float:"left",
        paddingLeft:"25%"
        // paddingLeft:"90px"   
    },
    para1:{
        float:"left",
        // paddingLeft:"90px"   
    }
    // bgimg: {
    //     backgroundImage: mpic,
    // }
});


export default function Dashboard() {
    const classes = useStyles();
    console.log(window.location.pathname==="/")
    // const {onMemberClick} = this.props
    return (
        <Grid container>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardMemberHeader} >
                            {/* <div className={classes.memberHeader}></div> */}
                            {/* <img src={MemberHeader} className={classes.memberHeader} /> */}
                            <p className={classes.para} > <AccountCircle className={classes.headerIcon} /></p>
                            <p className={classes.para1} >MEMBER 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                            Member 360 gives a (360&deg;) view of Medicare Advantage Health Plan Members.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                        <Link to="/member" > 
                        <button className={classes.cardButton} onClick={()=>myStore.dispatch(moduleStatus())} style={{ backgroundImage: "linear-gradient(#338ad4 , #38a0e8)"}}>
                            click here
                    </button></Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                <Typography gutterBottom className={classes.cardProviderHeader}>
                            <p className={classes.para} > <PersonRounded className={classes.headerIcon} /></p>
                            <p className={classes.para1} >PROVIDER 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                        Provider 360 gives a (360&deg;) view of Medicare Advantage Health Plan Providers.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                    <Link to="/provider"> <button className={classes.cardButton}  onClick={()=>myStore.dispatch(moduleStatus())} style={{ backgroundImage: "linear-gradient(#d04085, #f360a2)"}}>
                            click here
                    </button>
                    </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardClaimsHeader}>
                            <p className={classes.para} > <NoteAdd className={classes.headerIcon} /></p>
                            <p className={classes.para1} >CLAIMS 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                        Claims 360 gives a (360&deg;) view of Medicare Advantage Health Plan Claims.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                    <Link to="/claims"><button className={classes.cardButton}  onClick={()=>myStore.dispatch(moduleStatus())} style={{ backgroundImage: "linear-gradient(#7c4bc0, #9566d6)"}}>
                            click here
                    </button></Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardQualityHeader}>
                            <p className={classes.para} > <VerifiedUser className={classes.headerIcon} /></p>
                            <p className={classes.para1} >QUALITY 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                        Quality 360 gives a (360&deg;) view of Facilities provided to ensure best plan available.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                        <button className={classes.cardButton} style={{ backgroundImage: "linear-gradient(#ff504b, #fd6864)"}}>
                            click here
                    </button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardRafHeader}>
                            <p className={classes.para} > <LocalHospitalOutlined className={classes.headerIcon} /></p>
                            <p className={classes.para1} >RAF 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                        RAF 360 gives a (360&deg;) view of Facilities provided to ensure best plan available.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                        <button className={classes.cardButton} style={{ backgroundImage: "linear-gradient(#2b4a84 , #39578f)"}}>
                            click here
                    </button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardPaymentsHeader}>
                            <p className={classes.para} > <PaymentOutlined className={classes.headerIcon} /></p>
                            <p className={classes.para1} >PAYMENTS 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                        Payment 360 gives a (360&deg;) view of Facilities provided to ensure best plan available.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                        <button className={classes.cardButton} style={{ backgroundImage: "linear-gradient(#c4a403 , #d8bf3e)"}}>
                            click here
                    </button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardSumissionHeader}>
                            <p className={classes.para} > <PlaylistAddCheckOutlined className={classes.headerIcon} /></p>
                            <p className={classes.para1} >SUBMISSION 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                        Submission 360 gives a (360&deg;) view of Facilities provided to ensure best plan.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                        <button className={classes.cardButton} style={{ backgroundImage: "linear-gradient(#65380d  , #7b4714)"}}>
                            click here
                    </button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item md={3} sm={12} >
                <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardCoderHeader}>
                            <p className={classes.para} > <CodeOutlined className={classes.headerIcon} /></p>
                            <p className={classes.para1} >CODER 360</p>
                        </Typography>
                    <CardContent>
                        <Typography className={classes.cardBody}>
                        Coder 360 gives a (360&deg;) view of Facilities provided to ensure best plan available.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display: "inherit" }}>
                        <button className={classes.cardButton} style={{ backgroundImage: "linear-gradient(#007c00, #50a000)"}}>
                            click here
                    </button>
                    </CardActions>
                </Card>
            </Grid>
           
        </Grid>
    );
}
