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
                type: 'line',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:height,
                plotShadow: false,
                reflow:true,
                marginRight: 120,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            tooltip : {
                
            },
            xAxis: {
               
                crosshair: true,
                // lineWidth :0,//去掉x轴线
                tickWidth:0,//去掉刻度
            },
            yAxis: {
                min: 0,
                title:{
                    enabled:false
                },
                //  tickWidth:0,//去掉刻度
                // gridLineWidth: 0,//去掉y轴方向的横线
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        // enabled: true          // 开启数据标签
                    },
                    // enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                }
            },
            series: [{
                // name: '东京',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
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
