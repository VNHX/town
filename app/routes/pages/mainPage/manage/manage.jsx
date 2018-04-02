//工程项目管理看板
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import css from './manage.scss';
import Nav from '../functionCom/nav.jsx';//导航
import Chart from "./chart.jsx";//柱图
import LineChart from "./lineChart.jsx";//线图
import PieChart from "./pieChart.jsx";//饼图
import RightCom from "./rightBox.jsx";//右屏
import MiddleBox from "./middleTable.jsx";//中屏下部
import Ajax from "../functionCom/myAjax.js";
let myAjax=Ajax.myAjax;
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
    this.props.chartHeight();
    window.addEventListener("resize", this.props.chartHeight);
  },
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.chartHeight);
  },
  change(value) {
    this.props.chart2Year(value)
  },
  render() {
    let {params,heightChart1,heightPie,chart1Year,chart2Year,pieYear,table1Data}=this.props;
    
    return (
      <div className={css.manageBox}>
        <div className={`${css.leftBox} ${css.contentBox}`}>
          <div className={css.chartBox1} id="chart1">
            <div className={css.title}>
              <div className={css.name}>项目整体建设情况</div>
              <select onChange={()=>chart1Year()} id='select1'>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
              </select>
            </div>            
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <Chart heightChart1={heightChart1}/>
          </div>
          <div className={css.chartBox2} id="chart2">
            <div className={css.title}>
              <div className={css.name}>工程项目投资额（万元）</div>
              <span className={css.btn} onClick={()=>this.change('2')}>竣工</span>
              <span className={css.btn} onClick={()=>this.change('1')}>在建</span>
              <span className={css.btn} onClick={()=>this.change('0')}>筹建</span>
            </div>
            <div className={css.year}>
              <select onChange={()=>chart2Year()} id='select2'>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
              </select>
            </div>
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <LineChart heightChart1={heightChart1}/>
          </div>
          <div className={css.tableBox}>
            <div className={css.leftTable}  id="chart3">
              <span className={css.leftTop}></span>
              <span className={css.leftBottom}></span>
              <span className={css.rightTop}></span>
              <span className={css.rightBottom}></span>
              <div className={css.title}>
                <div className={css.nameBox}>项目投资情况</div>
                <select onChange={()=>pieYear()} id='select3'>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                </select>
              </div>              
              <PieChart heightPie={heightPie}/>
            </div>
            <div className={css.rightTable}>
              <span className={css.leftTop}></span>
              <span className={css.leftBottom}></span>
              <span className={css.rightTop}></span>
              <span className={css.rightBottom}></span>
              <div className={css.nameBox}>重点项目推进情况</div>
              <table>
                <thead>
                  <tr>
                    <th>项目名称</th><th>项目计划</th>
                    <th>负责人员</th><th>日期</th>
                  </tr>
                </thead>
                <tbody>
                {
                  table1Data&&table1Data.map((value,key)=>{
                    return(
                      <tr key={key}>
                        <td>{value.plan_name}</td>
                        <td>{value.projdect_name}</td>
                        <td>{value.start_date}</td>
                        <td>{value.u_name}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`${css.middleBox} ${css.contentBox}`}>
          <div className={css.header}>
            <div className={css.logo}></div>
          </div>
          <div className={css.bg}></div> 
          <MiddleBox/>         
        </div>
        <div className={`${css.rightBox} ${css.contentBox}`}>
            <RightCom/>           
        </div>
        <Nav/>
      </div>    
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart1:state.vars.heightChart1,
        heightPie:state.vars.heightPie,
        table1Data:state.vars.table1Data,      
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{//charts表格高度调整
      let height=$('#chart1').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.9;
      dispatch(actions.setVars('heightChart1',height));

      let heightPie=$('#chart3').css('height');
      let numPie=heightPie.length-2;
      heightPie=heightPie.substr(0,numPie)*.8;
      dispatch(actions.setVars('heightPie',heightPie));
    },
    init: ()=> {
      //项目整体建设情况    
      let param_json1={
        "query":{
            "target":"clientProjectInf",
            "function":"getProjectBuildBlobal",
            "year":"2018"
        }
      };
      let data1={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json1),
        requireType: 'get',
        async: true,
      };
      myAjax(data1,success1);       
      function success1(data){
          console.log('chart1',data)
          dispatch(actions.setVars('chart1Data',data.query.detail));
      };
      //项目投资情况
      let param_json2={
        "query":{
            "target":"clientProjectInf",
            "function":"getProjectInvestBlobal",
            "year":"2018"
        }
      };
      let data2={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json2),
        requireType: 'get',
        async: true,
      };
      myAjax(data2,success2);       
      function success2(data){
          console.log('pie',data);
          let pieData=[];
          for(let i=0;i<data.query.detail.series[0].length;i++){
            pieData[i]=[data.query.detail.series[0][i]];
            pieData[i].push(data.query.detail.series[1][i])
          }
          dispatch(actions.setVars('pieData',pieData));
      }; 
      //工程项目投资额
      let param_json3={
        "query":{
            "target":"clientProjectInf",
            "function":"getProjectInvestment",
            "year":"2018",
            "status":"0"
        }
      };
      let data3={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json3),
        requireType: 'get',
        async: true,
      };
      myAjax(data3,success3);       
      function success3(data){
          console.log('chart2',data);
          dispatch(actions.setVars('chart2Data',data.query.detail));
      }
      //重点项目推进情况
      let param_json4={
        "query":{
            "target":"clientProjectInf",
            "function":"getIndexProjectSchedule",
        }
      };
      let data4={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json4),
        requireType: 'get',
        async: true,
      };
      myAjax(data4,success4);       
      function success4(data){
          console.log('table1',data);
          dispatch(actions.setVars('table1Data',data.query.detail.list));
      }   
      //项目总览
      let param_json5={
        "query":{
            "target":"clientProjectInf",
            "function":"getProjectTotal",
        }
      };
      let data5={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json5),
        requireType: 'get',
        async: true,
      };
      myAjax(data5,success5);       
      function success5(data){
          console.log('middle',data);
          dispatch(actions.setVars('middleDate',data.query.detail));
      }          
    },
    chart1Year:()=>{//项目整体建设情况，年份数据
      let year=$('#select1').val();
      let param_json1={
        "query":{
            "target":"clientProjectInf",
            "function":"getProjectBuildBlobal",
            "year": year,
        }
      };
      let data1={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json1),
        requireType: 'get',
        async: true,
      };
      myAjax(data1,success1);       
      function success1(data){
          console.log('chart1',data)
          dispatch(actions.setVars('chart1Data',data.query.detail));
      };
    },
    chart2Year:(value)=>{//工程项目投资额，年份数据
      let year=$('#select2').val();
      let param_json3={
        "query":{
            "target":"clientProjectInf",
            "function":"getProjectInvestment",
            "year":year,
            "status":value? value:'0'
        }
      };
      let data3={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json3),
        requireType: 'get',
        async: true,
      };
      myAjax(data3,success3);       
      function success3(data){
          console.log('chart2',data);
          dispatch(actions.setVars('chart2Data',data.query.detail));
      }
    },
    pieYear:()=>{//项目投资情况，年份数据
      let year=$('#select3').val();
      let param_json2={
        "query":{
            "target":"clientProjectInf",
            "function":"getProjectInvestBlobal",
            "year":year
        }
      };
      let data2={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json2),
        requireType: 'get',
        async: true,
      };
      myAjax(data2,success2);       
      function success2(data){
          console.log('pie',data);
          let pieData=[];
          for(let i=0;i<data.query.detail.series[0].length;i++){
            pieData[i]=[data.query.detail.series[0][i]];
            pieData[i].push(data.query.detail.series[1][i])
          }
          dispatch(actions.setVars('pieData',pieData));
      }   
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
