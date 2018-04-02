import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart1,chart2Data}=this.props;
        let configPie = {
            chart: {
                type: 'spline',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightChart1,
                plotShadow: false,
                reflow:true,
                marginRight: 30,             
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: chart2Data&&chart2Data.xaxis,
                crosshair: true,
                // lineWidth :0,//去掉x轴线
                tickWidth:0,//去掉刻度
                labels: {
                    style: {
                        color: '#ddd'
                    }
                }
            },
            yAxis: {
                min: 0,
                title:{
                    enabled:false
                },
                //  tickWidth:0,//去掉刻度
                lineWidth : 1,
                gridLineWidth: 0,//去掉y轴方向的横线
                labels: {
                    style: {
                        color: '#ddd'
                    }
                }
            },
            tooltip: {
                //headerFormat: '{series.name}<br>',
                pointFormat: '<b>{point.y}</b>万元'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {

            },
            series: [{               
                data: chart2Data&&chart2Data.yaxis,
            }]
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        chart2Data:state.vars.chart2Data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
