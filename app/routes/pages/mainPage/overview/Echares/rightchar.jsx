import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let configPie = {
        //     chart: {
        //         type: 'bar',
        //         backgroundColor: "rgba(46, 46, 65, 0)",
        //         plotBackgroundColor: "rgba(46, 46, 65, 0)",
        //         plotBorderWidth: 0,
        //         borderWidth: 0,
        //         height:190,
        //         plotShadow: false
        //     },
        //     title: {
        //         text: ''
        //     },
        //     xAxis: {
        //         categories: ['企业介绍', '招商会', '主动上门', '自主开发'],
        //         labels:{
        //             // enabled: false //去掉刻度数字
        //         },
        //         title: {
        //             text: null
        //         },
        //         // lineWidth :0,//去掉x轴线
        //         tickWidth:0,//去掉刻度
        //     },
        //     yAxis: {
                
        //         labels: {
        //             // enabled: false
        //         },
        //         tickWidth:0,//去掉刻度
        //     gridLineWidth: 0,//去掉y轴方向的横线
        //         title:{
        //             enabled:false
        //         }
        //     },
        //     legend: {
        //         layout: 'vertical',
        //         align: 'right',
        //         verticalAlign: 'top',
        //         x: 0,
        //         y: 0,

        //     },
        //     tooltip: {
        //         valueSuffix: ' %',
        //         enabled:false
                
        //     },
        //     credits: {
        //         enabled: false //不显示highCharts版权信息
        //     },
        //     colors: ['#4CDB9D', '#339C70', '#1E664A', '#134833', '#082B1F']
        //     ,
        //     plotOptions: {
        //         bar: {
        //             allowPointSelect: false,
        //             cursor: 'pointer',
        //             borderWidth: 0,
        //             size: '100%',
        //             innerSize: '80%',
        //              margin: '2%',
        //             dataLabels: {
        //                 enabled: false
        //             }
        //         }
        //     },
         
        //     series: [
        //         {
        //             name: '本年签约项目',
        //             // type: 'bar',
        //             data: [0, 1, 2, 3, 4, 5,6,7,8]
        //         },
        //         {
        //             name: '累计签约项目',
        //             // type: 'bar',
        //             data: [0, 1, 2, 3, 4, 5,6,7,8]
        //         },
        // ]
        chart: {
            type: 'areaspline',
            backgroundColor: "rgba(46, 46, 65, 0)",
            plotBackgroundColor: "rgba(46, 46, 65, 0)",
            plotBorderWidth: 0,
            borderWidth: 0,
             height:190,
            plotShadow: false
        },
        title: {
            text: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
        },
        xAxis: {
            categories: [
                '农业产品',
                '制造业',
                '智能家电',
                '物流交通',
                '电子信息',
                '金融企业',
            ]
           
        },
        yAxis: {
            title:{
                enabled:false
            }
        },
        tooltip: {
            shared: true,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: '累计签约',
            data: [3, 4, 3, 5]
        }, {
            name: '本年签约',
            data: [1, 3, 4,5, 4]
        }, {
            name: '投资金额',
            data: [4, 3, 5, 4]
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
