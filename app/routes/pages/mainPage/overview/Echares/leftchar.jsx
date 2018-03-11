import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {height}=this.props;
        let configPie = {
            chart: {
                polar: true,
                // type: 'radar',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:height,
                reflow:true,
                plotShadow: false,  marginRight: 120,
            },
            title: {
                text: '',
            },
            pane: {
                startAngle: 0,
                endAngle: 360
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            xAxis: {
                categories: ['N', 'NE', 'E', 'SE','S', 'SN','W','NW'],
                tickInterval: 45,
                min: 0,
                max: 360,
            },
            yAxis: {
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
            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },
            colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
            series: [{
                data: [5, 10, 15, 20, 25],
                // pointPlacement: 'on'
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
