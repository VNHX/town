import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let configPie = {
            chart: {
                polar: true,
                // type: 'radar',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:160,
                reflow:true,
                plotShadow: false,
            },
            title: {
                text: '',
            },
            pane: {
                size: '20%'
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            xAxis: {
                categories: ['N', 'NE', 'E', 'SE','S', 'SN','W','NW'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
                title:{
                    enabled:false
                }
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                enabled: false
            },
            series: [{
 
                data: [5, 10, 15, 20, 25],
                pointPlacement: 'on'
            }]
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
