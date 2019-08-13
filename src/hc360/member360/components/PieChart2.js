import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import { withStyles } from "@material-ui/styles";
import doughnut2d from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import {Card,CardContent} from "@material-ui/core";

ReactFC.fcRoot(FusionCharts, doughnut2d, FusionTheme);

const chartConfigs = {
    type: 'doughnut2d',// The chart type
    width: '70%', // Width of the chart
    height: '34%', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        chart: {
            // "caption": "Condition Chart",
            // "subCaption": "Last year",
            // "numberPrefix": "$",
            // "defaultCenterLabel": "Total revenue: $64.08K",
            // "centerLabel": "Revenue from $label: $value",
            // "decimals": "0",
            "theme": "fusion",
            // "radius3D":"50"
            // "chartTopMargin":"0px",
            "showLabels":"0",
            "showValues":"0",
        },
        data: [
            {
                "label": "Food",
                "value": "28504"
            },
            {
                "label": "Apparels",
                "value": "14633"
            },
            {
                "label": "Electronics",
                "value": "10507"
            },
            {
                "label": "Household",
                "value": "4910"
            }
        ]
    }

};

const styles = {
    cardHeader:{
        color:"white",
        backgroundImage: "linear-gradient(to right, #093cc8 , #00c4ff)",
        padding:"10px", marginTop:"0px",
        fontWeight: 400,
        fontFamily: "Roboto",
        fontStyle: 'normal',
         fontSize:"16px",
    },
    chartCard:{

    }
}

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class PieChart extends React.Component {
    render() {
        const { classes } = this.props;
        return (
                    <Card  className={classes.chartCard}>
                        <h2 className={classes.cardHeader}>CONDITION CHART</h2>
                        <CardContent>
                            <ReactFC
                                {...chartConfigs} />
                        </CardContent>
                    </Card>
        );
    }
}

export default withStyles(styles)(PieChart);