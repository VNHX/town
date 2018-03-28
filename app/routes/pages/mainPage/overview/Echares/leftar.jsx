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
                type: 'column',
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
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [0, 0.1, 0.2,  0.3, 1.0, 1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2],
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
            },
            },
            tooltip: {
                enabled: false,
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
               
                data: [80,160,240,320,400],
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
