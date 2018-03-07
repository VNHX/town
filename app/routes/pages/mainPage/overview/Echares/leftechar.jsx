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
                type: 'bar',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:190,
                // top:-10,
            },
            
            title: {
                text: ''
            },
            xAxis: {
                categories: ['企业介绍', '招商会', '主动上门', '自主开发'],
                 // lineWidth :0,//去掉x轴线
                 tickWidth:0,//去掉刻度
            },
            yAxis: {
                // min: 0,
                title: {
                    
                },
                tickWidth:0,//去掉刻度
                gridLineWidth: 0,//去掉y轴方向的横线
                    title:{
                        enabled:false
                    }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 20,
                y: -12,
                itemStyle: {
                    color: '#ffffff',
                    fontWeight: 'bold'
                },
                itemMarginTop: 2,
                itemMarginBottom: 2
            },
            plotOptions: {
                series: {
                    // stacking: 'normal'
                }
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            series: [{
                name: '本年签约项目',
                data: [5, 3, 7, 9,]
            },{
                name: '累计签约项目',
                data: [3, 4, 4, 2,]
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
