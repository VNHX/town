import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart1,chart1Data}=this.props;
        let configPie = {
            chart: {
                type: 'column',
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
                categories: chart1Data&&chart1Data.xaxis,
                crosshair: true,
                //lineWidth : 0,//去掉x轴线
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
                tickWidth:0,//去掉刻度
                lineWidth : 1,
                gridLineWidth: 0,//去掉y轴方向的横线
                labels: {
                    style: {
                        color: '#ddd'
                    }
                }
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                enabled: true,
                itemStyle:{
                    color: '#fff',  
                }
                
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
                column: {
                    borderWidth: 0,
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                    }
                }
            },
            series: [

                {
                    name: chart1Data&&chart1Data.legends[0],
                    data: chart1Data&&chart1Data.series[0].value,
                }, {
                    name: chart1Data&&chart1Data.legends[1],
                    data: chart1Data&&chart1Data.series[1].value
                }, {
                    name: chart1Data&&chart1Data.legends[2],
                    data: chart1Data&&chart1Data.series[2].value
                }
            ],
            colors:['#f19d63','#9e9ff9','#559cf8'],
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        chart1Data: state.vars.chart1Data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
