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
                // marginRight: 30,
                // height:250,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            tooltip: {
                enabled: true,
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
                    borderWidth: 0,
                    size: '120%',
                    innerSize: '80%',
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}',
                        style: {
                            color: "#d1d2d3",
                            fontSize: '14px',
                            fontFamily:"微软雅黑"
                        },

                    },

                }
	        },
            series: [
                {
                    type: 'pie',
                    name: "行业分析",
                    data:[
                        ['I/信息传输和软件技术',8],
                        ['M/科学研究和服务业',3],
                        ['B/计算机 通信和电子设备制造业',4],
                        ['L/租凭和商务服务业',5],
                        [2],
                        ['私营',6],
                    ],
                    style: {fontSize:"20px",  }
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
