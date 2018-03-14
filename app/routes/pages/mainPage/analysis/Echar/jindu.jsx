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
                type: 'solidgauge',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:height,
                plotShadow: false,
                reflow:true,
            },
            title: {
                text: ''
            },
            tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '16px'
                },
                pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                positioner: function (labelWidth, labelHeight) {
                    return {
                        x: 200 - labelWidth / 2,
                        y: 160
                    };
                }
            },
            pane: {
                startAngle: 0,
                endAngle: 360,
                background: [
                    { 
                        outerRadius: '30%',
                        innerRadius: '35%',
                        backgroundColor: 'black',
                        borderWidth: 0
                    }]
            },
            yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },
            plotOptions: {
                solidgauge: {
                    borderWidth: '10px',
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'round',
                    stickyTracking: false
                }
            },
            series: [
                {
                    name: 'Stand',
                    borderColor: 'tan',
                    data: [{
                        color: 'red',
                        radius: '30%',
                        innerRadius: '30%',
                        y: 40
                    }]
                }],
            credits: {
                enabled: false //不显示highCharts版权信息
            },
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
