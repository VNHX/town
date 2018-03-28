import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart7}=this.props;
        let configPie = {
            
        chart: {
            type: 'area',
            type: 'areaspline',
            backgroundColor: "rgba(46, 46, 65, 0)",
            plotBackgroundColor: "rgba(46, 46, 65, 0)",
            plotBorderWidth: 0,
            borderWidth: 0,
             height:heightChart7,
             plotShadow: false,
             reflow:true,
             marginRight: 120,
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                '农业产品',
                '制造业',
                '智能家电',
                '物流交通',
                '电子信息',
                '金融企业',
            ],
            gridLineColor: "#fff",
                gridLineWidth: 1,
                lineColor: "#03a9f4",              
                lineWidth: 2,
                tickWidth:0,//去掉刻度
                labels : {
                    style : {
                        // 'fontSize' : '10px',
                        color: "#fff"
                    }
                }
        },
        yAxis: {
            // min: 0,
            title: {
                
            },
                lineColor: "#fff",               //X轴的颜色  
                lineWidth: 1, 
                labels : {
                    style : {
                        // 'fontSize' : '10px',
                        color: "#685e5eeb"
                    }
                },
                gridLineDashStyle: 'longdash',
                title:{
                    enabled:false
                }
        },
        legend: {
            layout: 'vertical',
            floating: true,
            align: 'right',
            verticalAlign: 'top',
            x: 0,///间隔x轴的间隔
            y: 100,///间隔y轴的间隔
            itemStyle: {
                color: ' #ffffff', //开始颜色
        },
        itemHoverStyle: {
            color: '#5c99ef'  // 鼠标移上颜色
        },
        itemHiddenStyle: {
            color: 'green'  //点击后颜色
        },
        itemMarginTop: 5,  //上下间距
        itemMarginBottom: 5,  //上下间距
        symbolPadding: 15,  //标志间距
        // symbolWidth:10,//标志间距
    },
        credits: {
            enabled: false
        },
        plotOptions: {
           
        },
        series: [{
            name: '累计签约',
            data: [1,2,3,6,5,2],
        }, {
            name: '本年签约',
            data: [2,4,8,1,4,2],
        }, {
            name: '投资金额',
            data: [0,6,1,4,1,4],
        }],
        colors:['#7cb5ec','#969292','#09616d',]
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
