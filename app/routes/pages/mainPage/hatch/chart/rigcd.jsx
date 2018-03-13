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
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:height,
                plotShadow: false,
                reflow:true,
            },
            title: {
                floating:true,
                text: ''
            },
            subtitle: {
                text: ''
            },
            tooltip : {
               
            },
            xAxis: {
                enabled:false
            },
            yAxis: {
                min: 0,
                title:{
                    enabled:false
                },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                    },
                }
            },
            series: [{
                type: 'pie',
                innerSize: '80%',
                name: '市场份额',
                data: [
                    {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true,
                        url: 'http://www.hcharts.cn'
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['其他',   0.7]
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
