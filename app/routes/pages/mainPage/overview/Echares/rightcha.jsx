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
                type: 'bar',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height: heightChart7,
                plotShadow: false,
                reflow:true,
                marginRight: 120,
            },
            
            title: {
                text: ''
            },
            xAxis: {
                categories: ['入住申请', '资格审核', '安排看房', '入住审批', '签合同'],
                tickWidth:0,//去掉刻度
                 // lineWidth :0,//去掉x轴线
                lineColor: "#fff",              
                lineWidth: 2,
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
                x: 0,///间隔x轴的间隔
                y: -20,///间隔y轴的间隔
                itemStyle: {
                    color: ' #ffffff', //开始颜色
            },
            itemHoverStyle: {
                color: '#5c99ef'  // 鼠标移上颜色
            },
            itemHiddenStyle: {
                color: 'green'  //点击后颜色
            },
            itemMarginTop: 4,  //上下间距
            itemMarginBottom: 4,  //上下间距
            symbolPadding: 10,  //标志间距
            // symbolWidth:10,//标志间距
            symbolRadius:10, // 图标圆角
            symbolWidth:10, // 图标宽度
        },
            plotOptions: {
                series: {
                    // stacking: 'normal',
                    borderRadius:5,
                    borderWidth: 0,
                    borderColor: "",//去边框
                    pointPadding:0.2, //图行间距
                },
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            series: [{
                name: '销售',
                data: [10,40,60,120,12],
            },{
                name: '租凭',
                data: [19,20,30,100,20],
            }
        ],
            colors:['#b77a5d','#ccb778']
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
