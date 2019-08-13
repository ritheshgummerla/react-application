import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from '@material-ui/core/FormControl'
import Grid from "@material-ui/core/Grid";
import {history} from "../history/history"
import { bindActionCreators } from "redux";
import { login, userLoginStatus } from "../../redux-modules/actions/loginAction";
import { connect } from "react-redux";
import hcImg2 from "../images/newlogologinpage.svg"
// import hcImg from "../../images/login-bg.png";
import "../../App.css"
const styles = theme => ({
   layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    boxShadow:" 0 0 7px rgba(0,0,0,.3)"
   },
  paper: {
    borderRadius:"0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: "0px",
    backgroundColor: "#007eff",
    width:"35px",
    height:"35px"
  },
  form: {
    width: "100%", 
    marginTop: "18px"
    },
  submit: {
    color: "white",
    backgroundColor: "#177ce7",
    '&:hover': {
      backgroundColor: 'rgb(9, 69, 145)',
 },       
  },
  imageGrid:{
    borderRadius:"10px",
    width: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  headerImage:{
    margin: "20px 0 0 0"
  },
  Text1:{
      float:"left",
      color:"gray"
  },
  Text:{
    float:"right",
    paddingTop: "10px",
    color:"gray"
},
footer:{
  color:"gray",
  marginTop:"50px",
  textAlign:"bottom"
}
})



class Login extends React.Component {
    constructor(props) {
    super(props)
    props.userLoginStatus(false);
    this.state = {
      errorMsg:"",
      emailError: false,
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  validateEmail(e) {
    // alert(email)
    if(e.target.value===""){
      this.setState({
        errorMsg:`Please Enter ${e.target.name}`
      })
    }
    if(e.target.type==="email"){
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      const result = pattern.test(e.target.value);
      if (result === true) {
        this.setState({
          emailError: false,
          username: e.target.value
        })
      } else {
        this.setState({
          emailError: true
        })
      }

    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    // if (e.target.name === 'username') {
      this.validateEmail(e);
    // }
    this.setState({
      credentials: {
        ...this.state.credentials,
        [name]: value
      }
    });
  };
  onSubmit = () => {
    debugger
    const { credentials } = this.state;
    this.props.login(credentials);

    if (
      this.state.credentials.username === "admin@anblicks.com" &&
      this.state.credentials.password === "admin"

    ) {
      this.props.userLoginStatus(true);
      history.push("/");
    } else {
      alert("inavlid credentials");
    }
  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ snackOpen: false })
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
         <Grid
      container
      direction="row"
      justify="center"
      alignItems="center">
        <Grid md={3} xs={12} sm={12}  className={classes.root}>
        <CssBaseline />
        <Paper className={classes.layout}>
            <Typography variant="h5" color="primary">
              <img src={hcImg2} alt="pic" width="240" className={classes.headerImage}/>
              </Typography>
          {/* <Paper className={classes.paper}> */}
            <form className={classes.form} >
              <FormControl margin="normal" required fullWidth>
                <TextField
                type="email"
                id="standard-name"
                label="User Name"
                name="username"
                variant="outlined"
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              </FormControl>
              {this.state.emailError===true ? <span style={{color:"red"}}>Inavlid Email</span> :"" }
              {this.state.errorMsg}
              <FormControl required fullWidth>
                <TextField
                  name="password"
                  type="password"
                  id="password"
                  fullWidth
                  label="Password"
                  variant="outlined"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </FormControl>
              
              <p  className={classes.Text1}><Checkbox />Remember Me</p>
              <p  className={classes.Text}>Forgot Password</p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={this.onSubmit}
              >
                Login
              </Button>
            </form>
          {/* </Paper> */}
          <span className={classes.footer}>
            @ 2019 - Anblicks Solutions.
          </span>
        </Paper>
        </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: login,
      userLoginStatus: userLoginStatus
    },
    dispatch
  );

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));











































// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import Checkbox from "@material-ui/core/Checkbox";
// import { withStyles } from "@material-ui/styles";
// import { history } from "../history/history";
// import hcImg2 from "../images/newlogologinpage.svg";
// import TextField from "@material-ui/core/TextField";
// import Typography from '@material-ui/core/Typography'
// import hcImg from "../images/login-bg.png";
// import { Button } from "@material-ui/core";
// import Snackbar from '@material-ui/core/Snackbar'
// import IconButton from '@material-ui/core/IconButton'
// import CloseIcon from '@material-ui/icons/Close'
// import { bindActionCreators } from "redux";
// import { login, userLoginStatus } from "../../redux-modules/actions/loginAction"
// import { connect } from "react-redux";
// import Paper from '@material-ui/core/Paper';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { Hidden } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl'

// const styles = theme => ({
//   layout: {
//     borderRadius:"0px", marginTop:"100px", height:"fit-content",
//     width: "auto",
//     display: "block",
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
//       width: 400,
//       marginLeft: "auto",
//       marginRight: "auto"
//     }
//   },
//   paper: {
//     borderRadius:"0px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
//       .spacing.unit * 3}px`,
//   },
//   avatar: {
//     margin: "0px",
//     backgroundColor: "#007eff",
//     width:"35px",
//     height:"35px"
//   },
//   form: {
//     width: "100%", 
//     marginTop: theme.spacing.unit
//   },
//   submit: {
//     color: "white",
//     backgroundColor: "#177ce7",
//   },
//   imageGrid:{
//     borderRadius:"10px",
//     width: "-webkit-fill-available",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
//       .spacing.unit * 3}px`
//   },
//   headerImage:{
//     margin:"25px"
//   },
//   Text1:{
//       float:"left",
//       color:"gray"
//   },
//   Text:{
//     float:"right",
//     paddingTop: "10px",
//     color:"gray"
// }
// })
// class Login extends React.Component {

//   constructor(props) {
//     super(props)
//     props.userLoginStatus(false);
//     this.state = {
//       emailError: false,
//       credentials: {
//         username: "",
//         password: ""
//       }
//     };
//   }

//   validateEmail(email) {
//     const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
//     const result = pattern.test(email);
//     if (result === true) {
//       this.setState({
//         emailError: false,
//         username: email
//       })
//     } else {
//       this.setState({
//         emailError: true
//       })
//     }
//   }

//   handleChange = e => {
//     const { name, value } = e.target;

//     if (e.target.name === 'username') {
//       this.validateEmail(e.target.value);
//     }
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [name]: value
//       }
//     });
//   };
//   onSubmit = () => {
//     debugger
//     const { credentials } = this.state;
//     this.props.login(credentials);

//     if (
//       this.state.credentials.username === "admin@anblicks.com" &&
//       this.state.credentials.password === "admin"

//     ) {
//       this.props.userLoginStatus(true);
//       history.push("/dashboard");
//     } else {
//       alert("inavlid credentials");
//     }
//   };

//   render() {

//     const { classes } = this.props;
//     return (
//       <React.Fragment>
//         <CssBaseline />
//         <Paper className={classes.layout}>
//             <Typography variant="h5" color="primary">
//               <img src={hcImg2} width="240" className={classes.headerImage}/>
//               </Typography>
//           <Paper className={classes.paper}>
//             <form className={classes.form} onSubmit={this.submitHandler}>
//               <FormControl margin="normal" required fullWidth>
//                 <TextField
//                 id="standard-name"
//                 label="User Name"
//                 name="username"
//                 variant="outlined"
//                 className={classes.textField}
//                 onChange={this.handleChange}
//                 fullWidth
//                 margin="normal"
//               />
//               </FormControl>

//               <FormControl margin="normal" required fullWidth>
//                 <TextField
//                   name="password"
//                   type="password"
//                   id="password"
//                   fullWidth
//                   label="Password"
//                   variant="outlined"
//                   autoComplete="current-password"
//                   onChange={this.handleChange}
//                 />
//               </FormControl>
              
//               <p  className={classes.Text1}><Checkbox />Remember Me</p>
//               <p  className={classes.Text}>Forgot Password</p>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 className={classes.submit}
//                 onClick={this.handleSubmit}
//               >
//                 Login
//               </Button>
//             </form>
//           </Paper>
//         </Paper>

//         <Snackbar
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left'
//           }}
//           open={this.state.snackOpen}
//           autoHideDuration={6000}
//           onClose={this.handleClose}
//           ContentProps={{
//             'aria-describedby': 'message-id'
//           }}
//           message={<span id="message-id">{this.state.mensagem}</span>}
//           action={[
//             <IconButton
//               key="close"
//               aria-label="Close"
//               color="inherit"
//               className={classes.close}
//               onClick={this.handleClose}
//             >
//               <CloseIcon />
//             </IconButton>
//           ]}
//         />
//       </React.Fragment>
//     );
//   }
// }

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       login: login,
//       userLoginStatus: userLoginStatus
//     },
//     dispatch
//   );

// const mapStateToProps = state => ({
//   data: state
// });

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
