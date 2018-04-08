import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {

        let{heightPie,MpieData}=this.props;
        let configPie = {
            chart: {
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                // height:100,
                height:heightPie,
            },
            title: {
                text: ''
            },
            legend:{
                enabled: false
            },

            tooltip: {
                enabled: true,
                pointFormat: '{point.y}家<b>{point.percentage:.1f}%</b>'
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    borderWidth: 0,
                    size: '60%',
                    innerSize: '60%',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        style: {
                            color: "#d1d2d3",
                            fontSize: '14px',
                            fontFamily:"微软雅黑"

                        },

                    },

                }
            },
            series: [{
                type: 'pie',
                name: '',
                data: MpieData&&MpieData,
                style: {fontSize:"20px",  }
            }],
            colors:['#61b2e9','#94dda6','#e2715f','#94eee2','#f0ae7a','#f3ce5b']
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
