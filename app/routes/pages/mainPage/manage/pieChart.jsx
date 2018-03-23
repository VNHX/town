import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightPie}=this.props;
        let configPie = {
            chart: {
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightPie,
                plotShadow: false,
                reflow:true,
                marginRight: 30,
              	height:120
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            tooltip: {
                headerFormat: '{series.name}<br>',
            	pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                    style: {
	                        color: '#fff',
	                        fontWeight: 'normal',
	                    }
	                }
	            }
	        },
            series: [{
	            type: 'pie',
	            name: '投资情况占比',
	            data: [
	                ['厂房',   45.0],
	                ['道路',       26.8],
	                {
	                    name: '绿化',
	                    y: 12.8,
	                    sliced: true,
	                    selected: true
	                },
	                ['其他',   8.7]
	            ]
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
