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
	            name: '行业分析',
	            data: [
	                ['I/信息传输和软件技术',10.0],
	                ['M/科学研究和服务业', 11.8],
	                {
	                    name: 'B/计算机 通信和电子设备制造业',
	                    y: 12.8,
	                    sliced: true,
	                    selected: true
	                },
                    ['L/租凭和商务服务业',8.7],
                    ['私营',6.7]
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
