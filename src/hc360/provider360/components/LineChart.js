import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import { withStyles } from "@material-ui/styles";
import msline from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

ReactFC.fcRoot(FusionCharts, msline, FusionTheme);

const chartConfigs = {
    type: 'msline',// The chart type
    width: '100%', // Width of the chart
    height: '50%', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        chart: {
            caption: "MEMBER VISITS",
            yaxisname: "% of Visits",
            subcaption: "2012-2016",
            showhovereffect: "1",
            numbersuffix: "%",
            drawcrossline: "1",
            plottooltext: "<b>$dataValue</b> of members were on $seriesName",
            theme: "fusion"
        },
        categories: [
            {
                category: [
                    {
                        label: "2012"
                    },
                    {
                        label: "2013"
                    },
                    {
                        label: "2014"
                    },
                    {
                        label: "2015"
                    },
                    {
                        label: "2016"
                    }
                ]
            }
        ],
        dataset: [
            {
                seriesname: "Demo",
                data: [
                    {
                        value: "62"
                    },
                    {
                        value: "64"
                    },
                    {
                        value: "64"
                    },
                    {
                        value: "66"
                    },
                    {
                        value: "78"
                    }
                ]
            },
            {
                seriesname: "Demo1",
                data: [
                    {
                        value: "16"
                    },
                    {
                        value: "28"
                    },
                    {
                        value: "34"
                    },
                    {
                        value: "42"
                    },
                    {
                        value: "54"
                    }
                ]
            },
            {
                seriesname: "Demo2",
                data: [
                    {
                        value: "20"
                    },
                    {
                        value: "22"
                    },
                    {
                        value: "27"
                    },
                    {
                        value: "22"
                    },
                    {
                        value: "29"
                    }
                ]
            },
            {
                seriesname: "Demo3",
                data: [
                    {
                        value: "18"
                    },
                    {
                        value: "19"
                    },
                    {
                        value: "21"
                    },
                    {
                        value: "21"
                    },
                    {
                        value: "24"
                    }
                ]
            }
        ]
    }

};

const styles = {
    cardHeader:{
        color:"white",
        backgroundImage: "linear-gradient(to right, #b81262, #f360a2)",
        padding:"10px", marginTop:"0px",
        fontWeight: 400,
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        // fontSize:"18px",
        // textAlign:"center"
    }
}

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
                    <Card className="chartCard">
                        <h2 className={classes.cardHeader}>Total Number Of Visits</h2>
                        <CardContent>
                            <ReactFC
                                {...chartConfigs} />
                        </CardContent>
                    </Card>
        );
    }
}

export default withStyles(styles)(App);