import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart7}=this.props;
        let configPie = {
            
        chart: {
            // type: 'area',
            // type: 'areaspline',
            backgroundColor: "rgba(46, 46, 65, 0)",
            plotBackgroundColor: "rgba(46, 46, 65, 0)",
            plotBorderWidth: 0,
            borderWidth: 0,
             height:heightChart7,
             plotShadow: false,
             reflow:true,
             marginRight: 150,
             marginTop: 30,
             marginLeft: 50,
        },
        title: {
            text: ''
        },
        xAxis: [{
                    categories: [
                        '农业产品',
                        '制造业',
                        '智能家电',
                        '物流交通',
                        '电子信息',
                        '金融企业',
                    ],
                    tickWidth:0,//去掉刻度
                    // lineWidth :0,//去掉x轴线
                    // gridLineColor: "#fff",
                //    gridLineWidth: 1,
                //    lineColor: "#fff",              
                //    lineWidth: 1,
                        labels : {
                            style : {
                                // 'fontSize' : '10px',
                                color: "#fff"
                            }
                        },
                        // crosshair: true
                }],
           
        yAxis: [{
            lineColor: "#ffff",               //X轴的颜色  
            lineWidth: 1, 
            //  tickWidth:0,//去掉刻度
            // gridLineWidth: 0,//去掉y轴方向的横线
            title: {
                align: 'high',
                offset: 0,
                text: '签约数量(个)',
                rotation: 0,
                y: -20,
                x:30,
                style: {
                    color: "#fff",
                    fontSize: "12px",
                    // lineHeight:0,
                },
            },
            labels : {
                style : {
                    // 'fontSize' : '10px',
                    color: "#fff"
                }
            },
            },{
                title: {
                    align: 'high',
                    offset: 0,
                    text: '投资金额(万元)',
                    rotation: 0,
                    y: -20,
                    x:-10,
                    style: {
                        color: "#fff",
                        fontSize: "12px",
                    },
                },
                labels : {
                    style : {
                        color: "#fff"
                    }
                },
                opposite: true,
                // lineColor: "#fff",               //X轴的颜色  
                // lineWidth: 1, 
                //  tickWidth:0,//去掉刻度
                // gridLineWidth: 0,//去掉y轴方向的横线
                gridLineDashStyle: 'longdash',
                // gridLineColor:'#fff',
                gridLineWidth:1,
            }],
        legend: {
            layout: 'vertical',
            floating: true,
            align: 'right',
            verticalAlign: 'top',
            x: 0,///间隔x轴的间隔
            y: 150,///间隔y轴的间隔
            itemStyle: {
                color: ' #ffffff', //开始颜色
                },
                itemHoverStyle: {
                    color: '#5c99ef'  // 鼠标移上颜色
                },
                itemHiddenStyle: {
                    color: 'green'  //点击后颜色
                },
                itemMarginTop: 5,  //上下间距
                itemMarginBottom: 5,  //上下间距
                symbolPadding: 10,  //标志间距
                // symbolWidth:10,//标志间距
                // symbolRadius:10, // 图标圆角
                // symbolWidth:5, // 图标宽度
            },
        credits: {
            enabled: false
        },
        tooltip:{
            shared: true,  //允许共用
            backgroundColor : '#0c1733', // 提示框背景色
            borderColor: '#152e4d',         // 边框颜色
            borderWidth:3,   //边框 宽度
            borderRadius: 10,
            shadow: true,                 // 是否显示阴影
            animation: true,               // 是否启用动画效果
            style: {                      // 文字内容相关样式
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "blod",
                lineHeight:20,
            },  
        },
        plotOptions: {
            series: {
                // stacking: 'normal',
                borderRadius:5,
                borderWidth: 0,
                borderColor: "",//去边框
                pointPadding:0.4, //图行间距
                marker: {//线上数据点  
                    radius: 4,  //曲线点半径，默认是4
                    symbol: 'circle' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                }
            },
        },
        series: [
            {
                name: '累计签约',
                type: 'column',
                yAxis: 1,
                data: [4,2,3,7,8,4],
                // color:'#66c3ca'
            },{
            name: '本年签约',
            // yAxis: 1,
            data: [3,7,3,6,5,8],
        },
            {
            name: '投资金额',
            data: [1,2,3,6,5,2],
        }],
        colors:['#66c3ca','#f1a784','#01c3ff',]
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
