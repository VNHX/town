import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart3,analysisRightChart1}=this.props;
        let configPie = {
            chart: {
                type: 'column',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightChart3,
                plotShadow: false,
                reflow:true,
                // height:260,
                borderRadius:5,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: analysisRightChart1&&analysisRightChart1.name,
                crosshair: true,
                // lineWidth :0,//去掉x轴线
                tickWidth:0,//去掉刻度
                crosshair: true,
                labels: {
                    y: 20, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
                },
            },
            yAxis: {
                min: 0,
                title:{
                    enabled:false
                },
                 //  tickWidth:0,//去掉刻度
                 gridLineWidth: 0,//去掉y轴方向的横线
                 lineColor: "#fff",               //X轴的颜色  
                 lineWidth: 1,
                labels: {
                    format:'{value}',
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
                },
               
            },
            tooltip: {
           
                borderColor:'#486786',
                borderRadius:6,
               
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
                column: {
                    borderWidth: 0,
                    borderRadius:5,
                }
            },
            series: [{
                data: analysisRightChart1&&analysisRightChart1.qys,
            }],
            colors: ['#b3d78f','#b3d78f','#b3d78f','#b3d78f','#b3d78f','#b3d78f']
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        analysisRightChart1:state.vars.analysisRightChart1
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
