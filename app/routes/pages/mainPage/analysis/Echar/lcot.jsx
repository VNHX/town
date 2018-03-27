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
                type: 'column',
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
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'I/信息传输和软件技术',
                    'M/科学研究和服务业',
                    'L/租凭和商务服务业',
                    'B/计算机 通信和电子设备制造业',
                ],
                crosshair: true,
                // lineWidth :0,//去掉x轴线
                tickWidth:0,//去掉刻度
                crosshair: true,
                labels: {
                    y: 20, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
                },
            },
            yAxis: {
                min: 0,
                title:{
                    enabled:false
                },
                labels: {
                    format:'{value}',
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
                },
                //  tickWidth:0,//去掉刻度
                gridLineWidth: 0,//去掉y轴方向的横线
            },
            tooltip: {
                // enabled: false,
                //backgroundColor:'#12203a',
                borderColor:'#486786',
                borderRadius:6,
               
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                }
            },
            series: [{
                data: [20,50,60,100,],
            }],
            colors: ['#46bb22','#46bb22','#46bb22','#46bb22','#46bb22','#46bb22']
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
