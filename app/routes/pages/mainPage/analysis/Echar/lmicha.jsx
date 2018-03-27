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
                borderRadius:5,
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['企业所得税', '增值税', '消费税', '营业税', '个人所得税',],
                tickWidth:0,
                labels: {
                    y: 20, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    format:'{value}',
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
              },
            },
            legend: {
                enabled: false
            },
            tooltip:{
                style: {  //提示框内容的样式  
                    color: 'white',  
                    padding: '10px',    //内边距 (这个会常用到)  
                    fontSize: '9pt',              
                }  
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true          // 开启数据标签
                    },
                    enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                }
            },
            series: [{
                // name: '东京',
                data: [7.0, 6.9, 9.5, 14.5, 18.4,]
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
