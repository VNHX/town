import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './righthatch.scss'
import Rigch from  './chart/rigch'  //意向来源分析
import Rigcd from  './chart/rigcd'//重点项目
import Leftcha from  './chart/leftcha'//行业类型分析
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

  render() {
    let {heightChart3,heightPie,pieData,total,rightLine}=this.props;
    return (
        <div className={style.comit}>
            <div className={style.rigfst} >
            <div className={style.rigfstb} id='ko1'>
                    <div className={style.hxbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>行业类型分析</p>
                        <div className={style.tubiao}>
                            <div className={style.total}>共{total&&total}家</div>
                            <Leftcha pieData={pieData} heightPie={heightPie}/>
                        </div>
                        <div className={style.rigtk}>
                            <div className={style.rigtu}>
                                <div className={style.rightu}></div>
                            </div>
                            <div className={style.rigtu2}>
                                  <div className={style.rightu2}></div>
                            </div>
                            <div className={style.wenzi2}>
                            <p>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
                            </div>
                        </div>
                </div>
            </div>

             <div className={style.rigtwo}>
                <div className={style.rigfstb}>
                    <div className={style.hxbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>近两年意向项目情况</p>
                    <div className={style.ll}>
                    <div className={style.ll_1}> <table>
                <thead>
                  <tr>
                    <th>意向漏点图</th><th>上年度</th>
                    <th>本年度</th><th>同比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        <span className={style.ll_2}>前期洽谈</span>
                    </td>
                    <td>0</td><td>0</td><td>100.00%</td>
                  </tr>
                  <tr>
                    <td>
                    <span className={style.ll_3}></span>
                    </td>
                    <td>0</td><td>0</td><td>100.00%</td>
                  </tr>
                  <tr>
                    <td>
                    <span className={style.ll_4}></span>   
                    </td>
                    <td>0</td><td>0</td><td>100.00%</td>
                  </tr>
                </tbody>
              </table>
                   <p className={style.ll_5}>项目选址</p>
                   <p className={style.ll_6}>签订合同</p>
                    </div>
                    </div>
                </div>
            </div>

                 <div className={style.riglef} >
                    <div className={style.riglefb} id='ko'>
                        <div className={style.hxbk}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    <p className={style.wenzi}>意向来源分析</p>
                        <div className={style.tubioa02}  >
                        <Rigch rightLine={rightLine} heightChart3={heightChart3}/>
                        </div>
                </div>
            </div>

             <div className={style.rigleftop} >
                    <div className={style.rigleftopb}>
                        <div className={style.hxbk}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    <p className={style.wenzi}>重点项目</p>
                      <Rigcd />
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
        pieData:state.vars.pieData,
        total:state.vars.total,
        rightLine:state.vars.rightLine
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#ko').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.9;
        dispatch(actions.setVars('heightChart3',height));

        let heightPie=$('#ko1').css('height');
        let numPie=heightPie.length-2;
        heightPie=heightPie.substr(0,numPie)*.9;
        dispatch(actions.setVars('heightPie',heightPie));
      },
    init: ()=> {
        //行业类型分析  
        let param_json1={
            "query":{
                "target":"clientImportantProjectInf",
                "function":"getHylxData",
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
            console.log('行业类型分析',data);
            let pieData=[];
            for(let i=0;i<data.query.detail.name.length;i++){
                console.log(i)
                pieData[i]=[];
                pieData[i].push(data.query.detail.name[i]);
                pieData[i].push(data.query.detail.value[i]);
            }
            dispatch(actions.setVars('pieData',pieData));
            dispatch(actions.setVars('total',data.query.detail.total));
        };
        //近两年意向项目情况  
        let param_json2={
            "query":{
                "target":"clientImportantProjectInf",
                "function":"getNear2YearIntentionProjects",
                "type":"1",
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
            console.log('近两年意向项目情况',data);
            
            //dispatch(actions.setVars('total',data.query.detail.total));
        };
        //意向来源分析  
        let param_json3={
            "query":{
                "target":"clientImportantProjectInf",
                "function":"getYxlyData",
                "type":"1",
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
            console.log('意向来源分析',data);
            dispatch(actions.setVars('rightLine',data.query.detail));
        };
        //重点项目  
        let param_json4={
            "query":{
                "target":"clientImportantProjectInf",
                "function":"getProjectProcess",
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
            console.log('重点项目',data);
            
            //dispatch(actions.setVars('total',data.query.detail.total));
        };
    },
   
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
