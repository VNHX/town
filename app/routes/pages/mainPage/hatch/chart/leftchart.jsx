import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart1}=this.props;
        let configPie = {
            chart: {
                type: 'column',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightChart1,
                plotShadow: false,
                reflow:true,
                height:560,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'I/信息传输和软件技术',
                    'M/科学研究和服务业',
                    'B/计算机 通信和电子设备制造业',
                    'L/租凭和商务服务业',
                ],
                crosshair: true,
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
                min: 0,
                title:{
                    enabled:false
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
                }
            },
            tooltip: {
                shared: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                }
            },
            series: [{
                name: '签约统计',
                color: 'rgba(60,83,91,1)',
                data: [180, 160, 140,120],
                pointPadding: 0.4,
                pointPlacement: -0.2
            }, {
                name: '签约统计',
                color: 'rgba(100,194,204,.9)',
                data: [170, 160, 130,100],
                pointPadding: 0.4,
                pointPlacement: -0.2
            },]
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
