import React from 'react';
import { withStyles } from "@material-ui/styles";
import MemberLineChart from "../components/LineChart";
import PieChart1 from "../components/PieChart";
import PieChart2 from "../components/PieChart2"; 

//core
import {
    Button,Card,Paper,CardContent,Table,TableBody,TableCell,TableHead,TableRow,Dialog,
    DialogActions,DialogContent,DialogTitle,Grid,List,ListItem,ListItemSecondaryAction,ListItemText,
    Typography
} from '@material-ui/core';

// images
import closeIcon from "../../../common/images/close.svg";

const styles = {
    cardHeader: {
        color:"white",
        backgroundImage: "linear-gradient(to right, #093cc8 , #00c4ff)",
        padding:"10px", marginTop:"0px",
        fontWeight: 400,
        fontFamily: "Roboto",
        fontStyle: 'normal',
         fontSize:"16px",
        
    },
    chartCard: {

    }
}

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class PieChart extends React.Component {
    state = {
        dialogOpen: false,
        memberInfo:{}
    }

    handleClickOpen = (Info) => {
        this.setState({
            dialogOpen: true,
            memberInfo:Info
        })
    }
    handleClose = () => {
        this.setState({
            dialogOpen: false
        })
    }

    render() {
        const { classes, memberList } = this.props;
        const { memberInfo } = this.state
        return (
            <Card className={classes.chartCard}>
                <h2 className={classes.cardHeader}>MEMBER LIST</h2>
                <CardContent>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>SSN</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Country</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {memberList.map((row,index) => (
                                <TableRow key={index}  onClick={this.handleClickOpen.bind(this,row)}>
                                    <TableCell align="left" >{row.mmbr_ssn}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.mmbr_first_name}{row.mmbr_last_name}
                                    </TableCell>
                                    <TableCell align="left">{row.mmbr_gender}</TableCell>
                                    <TableCell align="left">{row.mmbr_physical_county}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Dialog
                        fullWidth
                        maxWidth="xl"
                        open={this.state.dialogOpen}
                        onClose={this.handleClose}
                        aria-labelledby="max-width-dialog-title"
                    >
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                <img src={closeIcon} alt="pic" />
                            </Button>
                        </DialogActions>
                        <DialogTitle id="max-width-dialog-title" align="center" style={{ color: "blue",    boxShadow: "0 0 5px #ddd", margin:" 0 42px 0 24px", zIndex:"99",}}>Project Status</DialogTitle>
                        <DialogContent>

                            <Grid container spacing={4}>
                                <Grid item xs={6} md={6}>
                                    <Paper>
                                        <List >
                
                                            <ListItem>
                                                <ListItemText>SSN</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_ssn}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Unique Number</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_cms_unique_nbr}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>First Name</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_first_name}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Middle Name</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_middle_name}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Last Name</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_last_name}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Gender</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_gender}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </List>

                                    </Paper>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Typography variant="h6" >

                                    </Typography>
                                    <Paper>
                                        <List >
                                        <ListItem>
                                                <ListItemText>Phisical City</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_physical_city}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Phisical State</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_physical_state}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Phisical Zip</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_physical_zip_code}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Country</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_physical_county}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>Race</ListItemText>
                                                <ListItemSecondaryAction>
                                                {memberInfo.mmbr_race}
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </List>

                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <MemberLineChart />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <PieChart1 />
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <PieChart2 />
                                </Grid>
                            </Grid>
                            {/* <DialogContentText>
                                Project
                            </DialogContentText> */}


                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(PieChart);