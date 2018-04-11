import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rigchar.scss'
import Rigch from './Echar/rigch.jsx'//企业性质统计
import Loct from './Echar/lcot.jsx'//企业分布及产值情况
import Tabck from './table/tbck.jsx' //企业入驻统计
import Tabckwo from './table/tbcktwo.jsx' //企业总注册资本统计
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
  change(year,e){
    this.props.changeYear(year);
    console.log(e)
  },

  render() {
    let {heightChart3,heightPie,changeYear,rightPieAna}=this.props;
    return (
        <div className={style.comit}>
          <div className={style.rigmit} >
            <div className={style.rigbj}>
              <div className={style.rigbjtu}></div>
            </div>
            <div className={style.htu1} id='mi'>
              <div className={style.hbk}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className={style.wenzi}>
                <span className={style.name}>企业分布及产值情况</span>
                <span className={style.year} onClick={()=>this.change('2018',event)}>2018</span>
                <span className={style.year} onClick={()=>this.change('2017',event)}>2017</span>
              </p>
              <div className={style.rigkbj}>
                <Loct heightChart3={heightChart3} />
              </div>
            </div>
          </div>
          <div className={style.rigmit02}>
              <div className={style.htu1}>
                  <div className={style.hbk}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                  <p className={style.wenzi}>企业入驻统计</p>
                  <div className={style.rigtable}>
                      <Tabck  heightChart3={heightChart3} />
                  </div>
              </div>
          </div>
          <div className={style.rigmit03} >
              <div className={style.htu1}>
                  <div className={style.hbk}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                  <p className={style.wenzi}>企业总注册资本统计</p>
                  <div className={style.rigtable}>
                      <Tabckwo />
                  </div>
              </div>
          </div>
          <div className={style.rigmit04} id='mi2'>
              <div className={style.rigbj}>
                  <div className={style.rigbjtu}></div>
              </div>
              <div className={style.htu1}>
                  <div className={style.hbk}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                  <p className={style.wenzi}>企业性质统计</p>
                  <div className={style.rigtable}>
                      <Rigch heightPie={heightPie}/>
                      <div className={style.ss}>共有{rightPieAna&&rightPieAna.total}家</div>
                      <div className={style.ssmi}>{rightPieAna&&rightPieAna.name[0]}</div>
                      <div className={style.ssmil}>{rightPieAna&&rightPieAna.name[2]}</div>
                      <div className={style.ssmil02}>{rightPieAna&&rightPieAna.name[1]}</div>
                  </div>
                  <p className={style.weizi}>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
              </div>
          </div>
        </div>                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      heightChart3:state.vars.heightChart3,
      heightPie:state.vars.heightPie,
      rightPieAna:state.vars.rightPieAna
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
      let height=$('#mi').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.9;
      dispatch(actions.setVars('heightChart3',height));

      let heightPie=$('#mi2').css('height');
      let numPie=heightPie.length-2;
      heightPie=heightPie.substr(0,numPie)*.9;
      dispatch(actions.setVars('heightPie',heightPie));
    },
    init: ()=> {
      //企业分布及产值情况    
        let param_json1={
            "query":{
                "target":"clientQydaInf",
                "function":"getCyfbczqkData",
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
            console.log('rightChart1',data)
            dispatch(actions.setVars('analysisRightChart1',data.query.detail));
        };
        //企业性质统计    
        let param_json2={
            "query":{
                "target":"clientQydaInf",
                "function":"getQyxzData",
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
            console.log('rightPieAna',data)
            dispatch(actions.setVars('rightPieAna',data.query.detail));
        };
        //企业入住统计    
        let param_json3={
            "query":{
                "target":"clientQydaInf",
                "function":"getQyrzData",
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
            console.log('column',data)
            dispatch(actions.setVars('columnDataAna',data.query.list));
        };
    },
    changeYear: (year)=> {//企业分布及产值情况年份数据
        let param_json1={
            "query":{
                "target":"clientQydaInf",
                "function":"getCyfbczqkData",
                "year":year
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
            console.log('rightChart1',data)
            dispatch(actions.setVars('analysisRightChart1',data.query.detail));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
