import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart1,columnData}=this.props;
        let configPie = {
            chart: {
                type: 'bar',
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
            tooltip: {
               
            },
            xAxis:{
                categories:columnData&&columnData.name,
                tickWidth:0,//去掉刻度
                 // lineWidth :0,//去掉x轴线
                //  gridLineColor: "#fff",
                // gridLineWidth: 1,
                lineColor: "#fff",              
                lineWidth: 1,
                labels : {
                    style : {
                        // 'fontSize' : '10px',
                        color: "#fff"
                    }
                }
            },
            yAxis: {
                title: {
                    enabled: false
                },
                //  tickWidth:0,//去掉刻度
                gridLineWidth: 0,//去掉y轴方向的横线
                lineColor: "#fff",               //X轴的颜色  
                lineWidth: 1, 
                labels:{
                    style : {
                        // 'fontSize' : '10px',
                        color: "#fff"
                    }
                },
            },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                borderRadius:5,
                borderWidth: 0
            },

        },
        series: [{
            name: '同比下降',
            data: columnData&&columnData.value,
            color:"#03a9f4"
        }],
            credits: {
                enabled: false //不显示highCharts版权信息
            },
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
