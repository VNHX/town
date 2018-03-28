import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart6}=this.props;
        let configPie = {
            chart: {
                type: 'bar',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightChart6,
                plotShadow: false,
                reflow:true,
                marginRight: 120,
            },
            
            title: {
                text: ''
            },
            xAxis: {
                categories: ['企业介绍', '招商会', '主动上门', '自主开发'],
                 // lineWidth :0,//去掉x轴线
                 tickWidth:0,//去掉刻度
                 labels : {
                     style : {
                         // 'fontSize' : '10px',
                         color: "#fff"
                     }
                 }
            },
            yAxis: {
                // min: 0,
                title: {
                    
                },
             //  tickWidth:0,//去掉刻度
             gridLineWidth: 0,//去掉y轴方向的横线
             lineColor: "#fff",               //X轴的颜色  
             lineWidth: 1,
             labels : {
                style : {
                    // 'fontSize' : '10px',
                    color: "#fff"
                }
            },
                    title:{
                        enabled:false
                    }
            },
            legend: {
                layout: 'vertical',
                floating: true,
                align: 'right',
                verticalAlign: 'top',
                x: 0,
                y: 0,
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
            symbolPadding: 15,  //标志间距
            // symbolWidth:10,//标志间距
        },
            plotOptions: {
                series: {
                    pointPadding:0.2, //图行间距
                }
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
            series: [{
                name: '本年签约项目',
                data: [5, 3, 7, 9,],
                color:'#0865e6',
            },{
                name: '累计签约项目',
                data: [3, 4, 4, 9,],
                color:'#fb0101',
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
