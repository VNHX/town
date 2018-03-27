import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart3}=this.props;
        let configPie = {
            chart: {
                type: 'line',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightChart3,
                plotShadow: false,
                reflow:true,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['自主开发','企业介绍','主动上门','招商会','其他'],
                gridLineColor: "#fff",
                gridLineWidth: 1,
                lineColor: "#03a9f4",              
                lineWidth: 2,
                tickWidth:0,//去掉刻度
                labels : {
                    style : {
                        // 'fontSize' : '10px',
                        color: "#fff"
                    }
                }
            },
            yAxis: {
                title: {
                    enabled: false
                },
                min: 0,
                gridLineDashStyle: 'longdash',
                labels : {
                    style : {
                        // 'fontSize' : '10px',
                        color: "#fff"
                    }
                }
            },
            tooltip:{
                // floating: true,
                // verticalAlign: 'top',
                // x: 0,
                // y: 100,
                // align: 'center',
                // borderWidth: 0,
                enabled:true
            },
            legend: {
                // shared: true
                enabled:true
            },
            plotOptions: {
                series: {
                    marker: {//线上数据点  
                        radius: 5,  //曲线点半径，默认是4
                        symbol: 'circle' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                    }
                }
            },
            series: [{
                name: '前期洽谈',
                data:[
                   2,0,5,3,4
                 ],
                 
            }, {
                name: '项目选止',
                data:[
                   5,7,8,2,6
                ]
            },{
                name:'签订合同',
                data:[
                    2,6,9,0,2
                ]
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
