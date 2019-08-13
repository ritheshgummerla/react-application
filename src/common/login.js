import React from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/styles";
import { history } from "./history/history";
import hcImg2 from "./images/hclogin.svg";
import TextField from "@material-ui/core/TextField";
import hcImg from "./images/image.svg";
import { Button } from "@material-ui/core";
import { bindActionCreators } from "redux";
import {login, userLoginStatus} from "../redux-modules/actions/loginAction"
import { connect } from "react-redux";

const styles = {
  root: {
    justifyContent: "center"
  },
  paper: {
    padding: "0px",
    border: "1px solid red"
  },
  container: {
    margin: "50px auto",
    borderRadius: "10px",
    boxShadow: "1px 1px 2px 2px #aaaaaa"
  },
  imageGrid: {
    position: "relative",
    // backgroundImage : `url(${hcImg})`
  },
  loginGrid: {},
  imgResponsive: {
    flexShrink: "0",
    minWidth: "100%",
    minHeight: "100%"
  },
  image2: {
    position: "absolute",
    top: "35%",
    left: "40px"
  },
  loginButton: {
    color: "white",
    borderRadius: "25px",
    padding: "10px 30px 10px 30px",
    backgroundColor: "#e94545"
  },
  loginText: {
    color: "#267dff",
    paddingBottom: "10px",
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "20px",
    borderBottom: "3px solid #267dff"
  },
  rememberDiv: {
    height: "50px",
    marginBottom: "40px"
    // border:"1px solid red"
  }
};

class Login extends React.Component {
  
  
  constructor(props) {
    super(props)
    props.userLoginStatus(false);
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }
  
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      credentials: {
        ...this.state.credentials,
        [name]: value
      }
    });
  };
  onSubmit = () => {
    const {credentials}= this. state;
    this.props.login(credentials);

    if (
      this.state.credentials.username === "admin@anblicks.com" &&
      this.state.credentials.password === "admin"
      
    ) {
      this.props.userLoginStatus(true);
      history.push("/dashboard");
    } else {
      alert("inavlid credentials");
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          item
          xs={10}
          className={classes.container}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={6}
            className={classes.imageGrid}
            // style={{ backgroundImage : `url(${hcImg})` }}
          >
            <img
              src={hcImg}
              alt="hcimage"
              height="600"
              className={classes.imgResponsive}
            />
            <img src={hcImg2} alt="hcimage2" className={classes.image2} />
          </Grid>
          <Grid item xs={6} className={classes.loginGrid}>
            <Grid item xs={10} style={{ margin: "10%" }}>
              <span className={classes.loginText}> Login</span>
              <form noValidate style={{ marginTop: "40px" }}>
                <TextField
                  id="standard-name"
                  label="User Name"
                  name="username"
                  className={classes.textField}
                  // value={values.name}
                  onChange={this.handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="password"
                  id="standard-name"
                  label="Password"
                  name="password"
                  className={classes.textField}
                  // value={values.name}
                  onChange={this.handleChange}
                  fullWidth
                  margin="normal"
                />
                <div className={classes.rememberDiv}>
                  <div style={{ float: "left" }}>
                    <Checkbox color="primary" />
                    Remember Me
                  </div>
                  <div style={{ float: "right" }}>
                    <span>Forgot Password?</span>
                  </div>
                </div>
                <div style={{ textAlign: "initial" }}>
                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    onClick={this.onSubmit}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login:login,
      userLoginStatus:userLoginStatus
    },
    dispatch
  );

const mapStateToProps = state =>({
  data: state
});

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Login));
