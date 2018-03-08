import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let configPie = {
    
        chart: {
            type: 'areaspline',
            backgroundColor: "rgba(46, 46, 65, 0)",
            plotBackgroundColor: "rgba(46, 46, 65, 0)",
            plotBorderWidth: 0,
            borderWidth: 0,
             height:190,
            //  width:100,
             plotShadow: false,
             reflow:true,
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
            data: [3, 4, 5,7]
        }, {
            name: '本年签约',
            data: [1,4,5, 8]
        }, {
            name: '投资金额',
            data: [4, 5, 4,6]
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
