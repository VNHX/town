import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
    	let {floorOneData}=this.props;
        let configPie = {
            chart: {
                type: 'bar',
                backgroundColor: 'rgba(0, 38, 82, 0.1)',
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                height:'300'
            },
            title: {
                text: null,
            },
            //图例说明
            legend: {
                enabled: false,//关闭图例
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: "<b>{point.percentage:.0f}%</b>"
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: [ '#77f0f9', '#70c080','#31BAC0','#134833', '#082B1F']
            ,
            plotOptions: {
                series: {
                    stacking: 'normal',
                    borderRadius:'5px',
                    borderWidth: 0,
                },
                column: {
                    pointPadding: 0.1,
                    borderWidth: 0,
                    pointWidth: 5,
                    
                }
            },
            xAxis: {
                lineWidth: 1,
               //lineColor: "red",
                tickWidth: 0,
                labels: {
                    y: 10, //x轴刻度往下移动20px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
                },
                categories: floorOneData&&floorOneData.name,
            },
            yAxis: {
                min: 0,
            	lineWidth: 1,
                title:{
                	text:'总量',
                	align: 'high',
	                offset: 0,
	                rotation: 0,
	                y: -15,
	                x:0,
	                style:{
	                	fontSize:'10px',
	                	color:'white',
	                }
                },
                gridLineWidth:0,
                labels: {
                	format:'{value}',
                    y: 12, //x轴刻度往下移动12px
                    style: {
                        color: '#fff',//颜色
                        fontSize:'10px'  //字体
                    }
                },
            },
            series: [{
                data: floorOneData&&floorOneData.value,
                cursor: 'pointer',
                events: {
                    click: function(e) {
                    	e.point.category;
                    }
                }

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