import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from "./routes/Breadcrumbs"
import hcImg2 from "./images/newlogologinpage.svg"
import SidenavBg from "./images/sidenav-bg.png"
import { moduleDrawerClicked } from "../redux-modules/actions/themeAction";
import {moduleStatusChange,onDrawerOpen,onDrawerClose,moduleStatus} from "../redux-modules/actions/loginAction"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { history } from "./history/history";
import Routes from "./routes/routes";
import { Link, Router,} from "react-router-dom";
import "../App.css";
import "./css/themes.css";

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import {
  AccountCircle,
  PersonRounded,
  NoteAdd,
  VerifiedUser,
  PaymentOutlined,
  LocalHospitalOutlined,
  PlaylistAddCheckOutlined,
  CodeOutlined,
  Home,
  Settings,
  HelpOutlineOutlined,
  ChevronLeft,
  ChevronRight,
  PowerSettingsNewOutlined
} from '@material-ui/icons';

//components
import {
  Toolbar,
  Drawer,
  AppBar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Tooltip,
  Zoom,
  Avatar
} from '@material-ui/core';
import myStore from '../redux-modules/store';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundImage: "linear-gradient(to right, #093cc8 , #00c4ff)",
    // backgroundImage: `url(${SidenavBg})`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  headerImage: {
    height: "55px",
    marginTop: "8px",

    background: '#fff',
    padding: ' 10px',
    borderRadius: '50px',
    boxShadow: ' 0 3px 2px #00000036',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerContent: {
    color: "white"
  },
  avatar: {
    margin: 10,
    border: " 2px solid #fff",
    boxShadow: "0 2px 2px 0 #00000047",
  },
  sectionDesktop: {
    marginLeft: "15px",
    cursor: "pointer"
  },
}));

function arrowGenerator(color) {
  return {
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3.3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
  }
}

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    position: 'absolute',
    fontSize: 8,
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  popper: arrowGenerator("#132f7c"),
  tooltip: {
    position: 'relative',
    top: "10px",
    backgroundColor: "#132f7c",
    padding: "10px 25px 10px 25px",
  },
  tooltipPlacementLeft: {
    margin: '0 8px',
  },
  tooltipPlacementRight: {
    margin: '0 8px',
  },
  tooltipPlacementTop: {
    margin: '8px 0',
  },
  tooltipPlacementBottom: {
    margin: '8px 0',
  },
}));

function BootstrapTooltip(props) {
  const { arrow, ...classes } = useStylesBootstrap(props);
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <Tooltip
      classes={classes}
      disableHoverListener={props.isopen === true ? true : false }
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={
        <React.Fragment>
          {props.title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

export default function Layout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfile = Boolean(anchorEl);
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.loginReducer);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  useEffect(() => {
      console.log("called")
      if(window.location.pathname==="/"){
        myStore.dispatch(moduleStatusChange())
      }else{
        myStore.dispatch(moduleStatus())
      }
      //  window.location.reload()
  }, []);
  
  window.onpopstate  = (e) => {
    if(e.path[0].location.pathname==="/"){
      myStore.dispatch(moduleStatusChange())
    }else{
      myStore.dispatch(moduleStatus())
    }
    // myStore.dispatch(moduleStatusChange())
    }

    window.onafterload=(e)=>{
      console.log(e)
    }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  }
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // }
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  const logout = () => {
    localStorage.removeItem('userToken');
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <Router history={history}>
        <CssBaseline />
        {userLogin.isloggedInStatus ?
          <span>
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: userLogin.drawerOpen,
              })}
            >
              <Toolbar>
              {userLogin.showSideBar ? " " : 
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={()=>myStore.dispatch(onDrawerOpen())}
                  // onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: userLogin.drawerOpen,
                  })}
                >
                  <MenuIcon />
                </IconButton>
              }
                <Typography variant="h6" noWrap style={{ flexGrow: "1" }} onClick={()=>myStore.dispatch(moduleStatusChange())}>
                  <Link to="/"><img src={hcImg2} alt="pic" className={classes.headerImage} /></Link>
                </Typography>
                <Avatar alt="Remy Sharp" src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1" className={classes.avatar} /><span>Admin</span>
                <HelpOutlineOutlined className={classes.sectionDesktop} />
                <Settings className={classes.sectionDesktop} />
                <PowerSettingsNewOutlined className={classes.sectionDesktop} onClick={handleMenu} />
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openProfile}
                  onClose={handleClose}
                >
                  <Link to="/profile" onClick={()=>myStore.dispatch(moduleStatus())}> <MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>
            {userLogin.showSideBar ? "" :
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: userLogin.drawerOpen,
                [classes.drawerClose]: !userLogin.drawerOpen,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: userLogin.drawerOpen,
                  [classes.drawerClose]: !userLogin.drawerOpen,
                }),
              }}
              open={userLogin.drawerOpen}
            >
            {/* <div className={classes.toolbar}></div> */}
              <div className={classes.toolbar}>
                <IconButton 
                // onClick={handleDrawerClose}
                onClick={()=>myStore.dispatch(onDrawerClose())}
                >
                  {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft style={{ color: "white" }} />}
                </IconButton>
              </div>
              {/* <Divider /> */}
              <List>
                <Link to="/member" className="Link" onClick={() => dispatch(moduleDrawerClicked("MEMBER_360_BG"))}>
                  <BootstrapTooltip
                    title="Member"
                    placement="right-start"
                    TransitionComponent={Zoom}
                    isopen={userLogin.drawerOpen}
                  >
                    <ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
                      <ListItemIcon><AccountCircle className={classes.drawerContent} /></ListItemIcon>
                      <ListItemText className={classes.drawerContent}>Member</ListItemText>
                    </ListItem>
                  </BootstrapTooltip>
                </Link>
                <BootstrapTooltip
                  title="Provider"
                  placement="right-start"
                  TransitionComponent={Zoom}
                  isopen={userLogin.drawerOpen}
                >
                  <Link to="/provider" onClick={() => dispatch(moduleDrawerClicked("PROVIDER_360_BG"))}>
                    <ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
                      <ListItemIcon><PersonRounded className={classes.drawerContent} /></ListItemIcon>
                      <ListItemText className={classes.drawerContent}>Provider</ListItemText>
                    </ListItem>
                  </Link>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="Claims"
                  placement="right-start"
                  TransitionComponent={Zoom}
                  isopen={userLogin.drawerOpen}
                >
                  <Link to="/claims" onClick={() => dispatch(moduleDrawerClicked("CLAIMS_360_BG"))}>
                    <ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2)}>
                      <ListItemIcon><NoteAdd className={classes.drawerContent} /></ListItemIcon>
                      <ListItemText className={classes.drawerContent}>Claims</ListItemText>
                    </ListItem>
                  </Link>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="QUALITY"
                  placement="right-start"
                  TransitionComponent={Zoom}
                  isopen={userLogin.drawerOpen}
                >
                  <ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3)}>
                    <ListItemIcon><VerifiedUser className={classes.drawerContent} /></ListItemIcon>
                    <ListItemText className={classes.drawerContent}>Quality</ListItemText>
                  </ListItem>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="RAF"
                  placement="right-start"
                  TransitionComponent={Zoom}
                  isopen={userLogin.drawerOpen}
                >
                  <ListItem button selected={selectedIndex === 4} onClick={event => handleListItemClick(event, 4)}>
                    <ListItemIcon><LocalHospitalOutlined className={classes.drawerContent} /></ListItemIcon>
                    <ListItemText className={classes.drawerContent}>RAF</ListItemText>
                  </ListItem>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="PAYMENTS"
                  placement="right-start"
                  TransitionComponent={Zoom}
                  isopen={userLogin.drawerOpen}
                >
                  <ListItem button selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5)}>
                    <ListItemIcon><PaymentOutlined className={classes.drawerContent} /></ListItemIcon>
                    <ListItemText className={classes.drawerContent}>Payment</ListItemText>
                  </ListItem>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="SUBMISSION"
                  placement="right-start"
                  TransitionComponent={Zoom}
                  isopen={userLogin.drawerOpen}
                >
                  <ListItem button selected={selectedIndex === 6} onClick={event => handleListItemClick(event, 6)}>
                    <ListItemIcon><PlaylistAddCheckOutlined className={classes.drawerContent} /></ListItemIcon>
                    <ListItemText className={classes.drawerContent}>Submission</ListItemText>
                  </ListItem>
                </BootstrapTooltip>
                <BootstrapTooltip
                  title="CODER"
                  placement="right-start"
                  TransitionComponent={Zoom}
                  isopen={userLogin.drawerOpen}
                >
                  <ListItem button selected={selectedIndex === 7} onClick={event => handleListItemClick(event, 7)}>
                    <ListItemIcon><CodeOutlined className={classes.drawerContent} /></ListItemIcon>
                    <ListItemText className={classes.drawerContent}>Coder</ListItemText>
                  </ListItem>
                </BootstrapTooltip>
              </List>
            </Drawer>
            }
          </span>
          : ''}
        <main className={classes.content} style={{ backgroundColor: userLogin.isloggedInStatus ? " " : "#2360ac", height: userLogin.isloggedInStatus ? " " : "100vh" }}>
          <div className={classes.toolbar} style={{ minHeight: "55px" }} />
          {userLogin.isloggedInStatus ? <Toolbar style={{ paddingLeft: "0px", minHeight: "50px" }}><Home style={{ fontSize: "20px", color: "#00c4ff", marginRight: "5px" }} /><Breadcrumbs /></Toolbar> : ""}
          <Routes />
        </main>
      </Router>
    </div>
  );
}
