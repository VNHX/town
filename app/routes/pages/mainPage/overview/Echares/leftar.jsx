import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {

        let{heightPie}=this.props;
        let configPie = {
            chart: {
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                // height:100,
                height:heightPie,
                // marginLeft:200,
                marginRight:160,
                // marginTop:120,
            },
            title: {
                text: ''
            },
            legend:{
                enabled: false
            },

            tooltip: {
                enabled: true,
                valueDecimals : 2, // 保留小数位数
                backgroundColor : '#0c1733', // 提示框背景色
                borderColor: '#152e4d',         // 边框颜色
                borderWidth:3,
                borderRadius: 10,
                shadow: true,                 // 是否显示阴影
                animation: true,               // 是否启用动画效果
                style: {                      // 文字内容相关样式
                    color: "#d8c1a2",
                    fontSize: "12px",
                    fontWeight: "blod",
                    lineHeight:30,
                },  
                pointFormat: '<br/>{series.name}: <b>{point.percentage:.1f}%</b>',
                positioner: function () { // 固定提示框
                    return { x: 480, y: 120 };
                },
                //pointFormat: "<b>{point.percentage:.0f}%</b>"
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    borderWidth: 0,
                    size: '100%',
                    innerSize: '60%',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        style: {
                            color: "#d1d2d3",
                            fontSize: '20px',
                            fontFamily:"微软雅黑"

                        },

                    },

                }
            },
            series: [{
                type: 'pie',
                name: "",
                data:[
                    ['农产品',9],
                    ['电子信息',8],
                    ['制造业',9],
                ],
                style: {fontSize:"20px", color:'#fff', }
            }],
            colors:['#edd87b','#becf88','#eea584','#94eee2','#f0ae7a','#f3ce5b']
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
