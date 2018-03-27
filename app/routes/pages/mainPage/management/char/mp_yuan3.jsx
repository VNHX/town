import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightPie,chart}=this.props;
        let configPie = {
            chart: {
                type: 'pie',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightPie,
                plotShadow: false,
                reflow:true,
                height:100
            },
            title: {
                floating:true,
                text: '',
                // style: {
                //     fontSize: "16px",
                //     lineHeight: "45px"
                // }
            },
            tooltip: {
                enabled: false
            }, 
            legend: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
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
            series: [{
                innerSize: '80%',
                name: '实用新型',
                data: [5,2],
            }],
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: ['#e93125','#d6524d',]
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
