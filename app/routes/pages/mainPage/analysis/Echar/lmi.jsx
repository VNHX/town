import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart3,analysisChart1Data}=this.props;
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
                borderRadius:5,
                // height:260,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'category',
                categories: analysisChart1Data&&analysisChart1Data.name,
                crosshair: true,
                 // lineWidth :0,//去掉x轴线
                 tickWidth:0,//去掉刻度
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
                backgroundColor:'#12203a',
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
                    animation: true,
                    
                }
            },
            series: [{
                name:'企业家数量',
                data:analysisChart1Data&&analysisChart1Data.qys,
                dataLabels: {
                    enabled: true,
                    // rotation: -90,
                    color: '#FFFFFF',
                    // align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 5, // 10 pixels down from the top
                    style: {
                        fontSize: '16px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
               
            }],
            colors: ['#edd47a','#edd47a','#edd47a','#edd47a']
            //     {
            //     data: [20,50,60,100,],
            //     color:'#edd47a',
            // }
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        analysisChart1Data:state.vars.analysisChart1Data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
