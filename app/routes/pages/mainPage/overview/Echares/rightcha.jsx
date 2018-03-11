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
                type: 'bar',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height: height,
                plotShadow: false,
                reflow:true,
                marginRight: 120,
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
           
            legend: {
                layout: 'vertical',
                floating: true,
                align: 'right',
                verticalAlign: 'top',
                x: 0,///间隔x轴的间隔
                y: 0,///间隔y轴的间隔
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
                    // stacking: 'normal'
                }
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            series: [{
                name: '损耗量',
                data: [1,40,60,120],
                color:'#7cb5ec',
            },{
                name: '完成量',
                data: [3, 4, 4, 2,140],
                color:'#0b4e6f',
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
