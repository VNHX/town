import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rightfist.scss';
import Rightchar from './Echares/rightchar'  //签约项目产业分布
import RightCha from './Echares/rightcha' ///项目同比累计
import LTable from './table.jsx'  //行业分析
import Lablege from './tablege.jsx'  //各部门签约情况
import ajax from '../functionCom/myAjax.js';
let myAjax=ajax.myAjax;
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
    this.props.chartHeight();
    window.addEventListener("resize", this.props.chartHeight);
  },
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.chartHeight);
  },

  render() {
    let {heightChart7,heightPie,overFourthData,overFiveData,overSixData,overSevenData}=this.props;
    return (
      <div className={style.hxconfist} >
          <div className={style.hxEchar} id='chart2'>
               <div className={style.hxEchad}>
                  <span></span> 
                  <span></span> 
                  <span></span> 
                  <span></span>
                </div>
                <p>行业分析</p>
            <LTable overFourthData={overFourthData} heightPie={heightPie}/>
                    {/* <div className={style.xaila}>
                           <div className={style.latu} ></div>
                              <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                              </ul>
                   </div> */}
          </div>
                <div className={style.hxEchar01}>
                    <div className={style.hxEchad}>
                      <span></span> 
                      <span></span> 
                      <span></span> 
                      <span></span>
                    </div>
                        <p>签约项目产业分布</p>
                           <Rightchar overSixData={overSixData} heightChart7={heightChart7}/>
                           {/* <div className={style.xaila}>
                              <div className={style.latu}></div>
                          </div> */}
                </div>
                    <div className={style.hxEchar02} id='chart'>
                            <div className={style.hxEchad}>
                                <span></span> 
                                <span></span> 
                                <span></span> 
                                <span></span>
                            </div>
                                <p>项目同比累计</p>
                                  <RightCha overFiveData={overFiveData} heightChart7={heightChart7}/>
                                  {/* <div className={style.xaila}>
                                      <div className={style.latu}></div>
                                  </div> */}
                    </div>
                        <div className={style.hxEchar03}>
                                <div className={style.hxEchad}>
                                      <span></span> 
                                      <span></span> 
                                      <span></span> 
                                      <span></span>
                                </div>
                                    <p>各部门签约情况</p>
                                        <Lablege overSevenData={overSevenData} />
                                        {/* <div className={style.xaila}>
                                            <div className={style.latu}></div>
                                        </div> */}
                        </div>
    </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      heightChart7:state.vars.heightChart7,
      heightPie:state.vars.heightPie,
      overFourthData:state.vars.overFourthData,
      overFiveData:state.vars.overFiveData,
      overSixData:state.vars.overSixData,
      overSevenData:state.vars.overSevenData
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
      let height=$('#chart').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.9;
      dispatch(actions.setVars('heightChart7',height));

      let heightPie=$('#chart2').css('height');
      let numPie=heightPie.length-2;
      heightPie=heightPie.substr(0,numPie)*.9;
      dispatch(actions.setVars('heightPie',heightPie));
    },
    init: ()=> {
        //行业分析
        let param_json1={
            "query":{
                "target":"clientZSFWInf",
                "function":"getHyfx",
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
            console.log('行业分析',data);
            let successData=[];
            for(let i=0;i<data.query.detail.name.length;i++){
              successData[i]=[];
              successData[i].push(data.query.detail.name[i]);
              successData[i].push(data.query.detail.value[i]);
            };
            dispatch(actions.setVars('overFourthData',successData));
        };
        //项目同比累计
        let param_json2={
            "query":{
                "target":"clientZSFWInf",
                "function":"getProjectTb",
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
            console.log('项目同比累计',data);
            dispatch(actions.setVars('overFiveData',data.query.detail));
        };
        // 签约项目产业分布
        let param_json3={
            "query":{
                "target":"clientZSFWInf",
                "function":"getQyProjectFb",
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
            console.log(' 签约项目产业分布',data);
            dispatch(actions.setVars('overSixData',data.query.detail));
        };
        //各部门签约情况
        let param_json4={
            "query":{
                "target":"clientZSFWInf",
                "function":"getDepartmentQy",
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
            console.log('各部门签约情况',data);
            dispatch(actions.setVars('overSevenData',data.query.list));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
