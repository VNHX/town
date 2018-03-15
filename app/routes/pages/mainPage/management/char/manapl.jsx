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
                type: 'column',
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
            tooltip: {
               
            },
            xAxis:{
                categories:['B1','F栋','1号楼','1栋','A','B']
            },
            yAxis: {
                title: {
                    enabled: false
                }
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                }
            },
            legend: {
                // layout: 'vertical',
                floating: true,
                align: 'right',
                verticalAlign: 'top',
                x: 0,
                y: 0,
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
            series: [
                    {name:'空置',  data: [3,6,9,3,5,8],color:'#c52421',},
                    {name:'以租', data: [3,5,7,10,1,9],color:'#0f90ff',},
                    {name: '预定',data: [5,8,6,2,8,10],color:'#fbd20b',}
            ],
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
