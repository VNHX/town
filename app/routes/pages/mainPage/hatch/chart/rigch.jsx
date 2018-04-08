import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart3,rightLine}=this.props;
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
                categories: rightLine&&rightLine.xAxis,
                gridLineColor: "#fff",
                gridLineWidth: 1,
                lineColor: "#fff",              
                lineWidth: 1,
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
                enabled:true
            },
            legend: {
                enabled: true,
              itemStyle: {
                  color: '#fff',//颜色
                  fontSize:'12px',  //字体
                  fontWeight:'normal'
              },
              symbolRadius:10, // 图标圆角
              symbolWidth:10, // 图标宽度
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
                name: rightLine&&rightLine.legend[0],
                data: rightLine&&rightLine.series[0].data,
                 
            }, {
                name: rightLine&&rightLine.legend[1],
                data:rightLine&&rightLine.series[1].data
            },{
                name:rightLine&&rightLine.legend[2],
                data:rightLine&&rightLine.series[2].data
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
