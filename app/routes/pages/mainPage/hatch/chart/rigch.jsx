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
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['自主开发','企业介绍','主动上门','招商会','其他']
            },
            yAxis: {
                title: {
                    enabled: false
                },
                min: 0
            },
            tooltip: {
                layout: 'vertical',
                align: 'center',
                // verticalAlign: 'top',
                y: 0,
                floating: true,
                borderWidth: 0,
            },
            legend: {
                shared: true
            },
            plotOptions: {
                // spline: {
                //     marker: {
                //         enabled: true
                //     }
                // }
            },
            series: [{
                name: '前期洽谈',
                data:[
                   20,20,50,70,1
                 ]
            }, {
                name: '项目选止',
                data:[
                   9,10,20,60,12
                ]
            },{
                name:'签订合同',
                data:[
                    2,6,9,10,20
                ]
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
