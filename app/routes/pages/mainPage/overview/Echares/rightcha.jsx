import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let configPie = {
            chart: {
                type: 'bar',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:190,
                // width:100,
                // top:-10,
                plotShadow: false,
                reflow:true,
            },
            
            title: {
                text: ''
            },
            xAxis: {
                categories: ['入住申请', '资格审核', '安排看房', '入住审批', '签合同'],
                 // lineWidth :0,//去掉x轴线
                 tickWidth:0,//去掉刻度
            },
            yAxis: {
                // min: 0,
                title: {
                    
                },
                tickWidth:0,//去掉刻度
                gridLineWidth: 0,//去掉y轴方向的横线
                    title:{
                        enabled:false
                    }
            },
            // legend: {
            //     layout: 'vertical',
            //     align: 'right',
            //     verticalAlign: 'top',
            //     x: 20,
            //     y: -12,
            //     itemStyle: {
            //         color: '#ffffff',
            //         fontWeight: 'bold'
            //     },
            //     itemMarginTop: 2,
            //     itemMarginBottom: 2
            // },
            plotOptions: {
                series: {
                    // stacking: 'normal'
                }
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            series: [{
                name: '损耗量',
                data: [0,40,60,120]
            },{
                name: '完成量',
                // data: [3, 4, 4, 2,]
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
