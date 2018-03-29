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
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "blod",
                    lineHeight:40,
                },  
                pointFormat: '<br/>{series.name}: <b>{point.percentage:.1f}%</b>',
                positioner: function () { // 固定提示框
                    return { x: 400, y: 100 };
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
                    size: '60%',
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
                    ['制造业',5],
                    ['智能家电',7],
                    ['智能交通',6],
                    ['电子信息',8],
                    ['金融业',6.4],
                  
                ],
                style: {fontSize:"20px", }
            }],
            colors:['#63c1c9','#dccfe3','#eeb764','#55a2f4','#ec8677','#f5d648']
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
