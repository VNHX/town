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
                type: 'category',
                // categories: [
                //     '楼',
                //     '三号楼',
                //     '四号楼',
                //     '八/九号楼',
                // ],
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
                // enabled: false,
                backgroundColor:'#12203a',
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
                    borderWidth: 0,
                    borderRadius:5,
                    animation: true,
                    
                }
            },
            series: [{
                name:'企业家数量',
                data:[
                    ['裙楼', 24],
                    ['三号楼',15],
                    ['四号楼', 12],
                    ['八/九号楼', 10],
                ],
                dataLabels: {
                    enabled: true,
                    // rotation: -90,
                    color: '#FFFFFF',
                    // align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 5, // 10 pixels down from the top
                    style: {
                        fontSize: '16px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
               
            }],
            colors: ['#edd47a','#edd47a','#edd47a','#edd47a']
            //     {
            //     data: [20,50,60,100,],
            //     color:'#edd47a',
            // }
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
