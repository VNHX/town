
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './manal.scss'
import Manapl from './char/manapl.jsx' //上规上限分类统计
import Map from './char/map.jsx' //入驻年限
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
    let {heightPie,heightChart1,firstData,MpieData,pie360}=this.props;
  
    return (
      <div className={style.cmt}>
          <div className={style.hcomit}>
            <div className={style.htu1}>
                <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>创新能力</p>
                <div className={style.tubiao}>
                    <div className={style.t_yuan01}>
                        <span>国家高新技术企业</span>
                        <span className={style.num}>{firstData&&firstData.total_1}家</span>
                    </div>
                    <div className={style.t_yuan02}>
                        <span>浙江高新技术企业</span>
                        <span className={style.num}>{firstData&&firstData.total_2}家</span>
                    </div>
                    <div className={style.t_yuan03}>
                        <span>市级以上研发中心</span>
                        <span className={style.num}>{firstData&&firstData.total_3}家</span>
                    </div>
                </div>
            </div>
          </div>
          <div className={style.hcomit03} id='mi'>
            <div className={style.htu1}>
                <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p  className={style.wenzi01}>上限</p>
                <p  className={style.wenzi02}>下限</p>
                <p className={style.wenzi}>上规上限分类统计</p>
                <div className={style.tubiao}>
                    <span className={style.san_jia}>合计:3家</span>
                    <div className={style.wen_zi}>
                        <p>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
                    </div>
                    <div className={style.tu_biao}>
                       <div className={style.tu_biao2}> <Manapl pie360={pie360} heightChart1={heightChart1} /></div>
                    </div>
                </div>
            </div>
          </div>
          <div className={style.hcomit02}  id='min'>
            <div className={style.htu1}>
                <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>入驻年限</p>
                <div className={style.tubiao}>
                    <div className={style.tu_biao}><Map MpieData={MpieData} heightPie={heightPie} /></div>
                    <div className={style.wen_kuang}>
                        <table>
                          <thead>
                            <tr>
                              <th>企业数量</th><th>14家</th>
                              <th>企业数量</th><th>14家</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan='2'>I/信息传输和软件</td>
                              <td colSpan='2'>I/信息传输和软件</td>
                            </tr>
                            <tr>
                              <td>技术产值</td><td>0万元</td>
                              <td>技术产值</td><td>0万元</td>
                            </tr>                          
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>     
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightPie:state.vars.heightPie,
        heightChart1:state.vars.heightChart1,
        firstData:state.vars.firstData,
        MpieData:state.vars.MpieData,
        pie360:state.vars.pie360
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#mi').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.9;       
        dispatch(actions.setVars('heightChart1',height));
  
        let heightPie=$('#min').css('height');
        let numPie=heightPie.length-2;
        heightPie=heightPie.substr(0,numPie)*.9;     
        dispatch(actions.setVars('heightPie',heightPie));
      },
    init: ()=> {
        //创新能力  
        let param_json1={
            "query":{
                "target":"clientQy360Inf",
                "function":"getCxnlData",
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
            console.log('创新能力',data)
            dispatch(actions.setVars('firstData',data.query.detail.list[0]));
        };
        //入住年限  
        let param_json2={
            "query":{
                "target":"clientQy360Inf",
                "function":"renderChartForEnterpriseYear",
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
            console.log('入住年限',data);
            let MpieData=[];
            for(let i=0;i<data.query.detail.name.length;i++){
                console.log(i)
                MpieData[i]=[];
                MpieData[i].push(data.query.detail.name[i]);
                MpieData[i].push(data.query.detail.value[i]);
            }
            dispatch(actions.setVars('MpieData',MpieData));
        };
        //上规下限 
        let param_json3={
            "query":{
                "target":"clientQy360Inf",
                "function":"renderChartForEnterpriseRange",
                "type":"2"
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
            console.log('上规下限',data);
            let pie360=[];
            for(let i=0;i<data.query.detail.name.length;i++){
                pie360[i]=[];
                pie360[i].push(data.query.detail.name[i]);
                pie360[i].push(data.query.detail.value[i]);
            }
            dispatch(actions.setVars('pie360',pie360));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
