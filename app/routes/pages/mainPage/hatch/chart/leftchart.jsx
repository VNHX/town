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
            },
            yAxis: {
                min: 0,
                title:{
                    enabled:false
                },
                //  tickWidth:0,//去掉刻度
                 gridLineWidth: 0,//去掉y轴方向的横线
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
                name: '雇员',
                color: 'rgba(165,170,217,1)',
                data: [150, 100, 90],
                pointPadding: 0.4,
                pointPlacement: -0.2
            }, {
                name: '优化的员工',
                color: 'rgba(126,86,134,.9)',
                data: [140, 90, 40],
                pointPadding: 0.4,
                pointPlacement: -0.2
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
