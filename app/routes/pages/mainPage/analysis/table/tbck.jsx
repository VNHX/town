import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart3,columnDataAna}=this.props;
        let configPie = {
            chart: {
              type: 'column',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightChart3,
                plotShadow: false,
                reflow:true,
                // height:270,
            },
           
          title: {
              text: ''
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: [
                  '一月',
                  '二月',
                  '三月',
                  '四月',
                  '五月',
                  '六月',
                  '七月',
                  '八月',
                  '九月',
                  '十月',
                  '十一月',
                  '十二月'
              ],
              crosshair: true,
              labels: {
                  y: 20, //x轴刻度往下移动20px
                  style: {
                      color: '#fff',//颜色
                      fontSize:'10px'  //字体
                  }
              },
               // lineWidth :0,//去掉x轴线
               tickWidth:0,//去掉刻度
          },
          yAxis: {
              min: 0,
              title: {
                enabled: false
              },
              labels: {
                  format:'{value}',
                  style: {
                      color: '#fff',//颜色
                      fontSize:'10px'  //字体
                  }
              },
                // tickWidth:0,//去掉刻度
            //    gridLineWidth: 0,//去掉y轴方向的横线
            //    lineColor: "#fff",               //X轴的颜色  
            //    lineWidth: 1,
            gridLineDashStyle: 'longdash',
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  borderWidth: 0,
                  borderRadius:5,
              },
             
          },
          legend: {
              enabled: true,
              itemStyle: {
                  color: '#fff',//颜色
                  fontSize:'12px',  //字体
                  fontWeight:'normal'
              }
          },
          series: [{
              name: columnDataAna&&columnDataAna[0].name,
              data: columnDataAna&&columnDataAna[0].value,
          }, {
              name: columnDataAna&&columnDataAna[1].name,
              data: columnDataAna&&columnDataAna[1].value,
          }, {
              name: columnDataAna&&columnDataAna[2].name,
              data: columnDataAna&&columnDataAna[2].value,
          },{
              name: columnDataAna&&columnDataAna[3].name,
              data: columnDataAna&&columnDataAna[3].value,
          }],
    
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors: ['#48a6cc','#ecd592','#6a9198','#b77c5c','#975654','#7e8c69']
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        columnDataAna:state.vars.columnDataAna 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
          
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
