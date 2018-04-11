import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './lecha.scss';
import  Leftchrt from './Echar/lmi.jsx'  //小镇分布及产值情况
import Lmicha from './Echar/Lmicha.jsx'  //小镇收入情况
import Lcot from './Echar/lcot.jsx'//企业纳税前10
// import Jidu from './Echar/jindu.jsx' //累计项目总数
import Ttranfrom from './tranfrom.jsx' //o产业总览
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
    let {heightChart3,columnYear,lineYear,analysisTableData,analysisAllData,analysisTaxData}=this.props;
    return (
        <div className={style.comit}>
            <div className={style.hcomit} id='meini'>
                <div className={style.htu1}>
                    <div className={style.hbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>
                        <span className={style.name}>小镇企业分布及产值情况</span>
                        <span className={style.year} onClick={()=>columnYear('2018')}>2018</span>
                        <span className={style.year} onClick={()=>columnYear('2017')}>2017</span>
                    </p>
                    <div className={style.tubiao}>
                        <Leftchrt heightChart3={heightChart3}/>
                    </div>
                </div>
            </div>
            <div className={style.hcomit2} >
                <div className={style.htu1}>
                    <div className={style.hbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>
                        <span className={style.name}>小镇税收入情况</span>
                        <span className={style.year} onClick={()=>lineYear('2018')}>2018</span>
                        <span className={style.year} onClick={()=>lineYear('2017')}>2017</span>
                    </p>
                        <div className={style.tubiao}>
                            <Lmicha analysisTaxData={analysisTaxData} heightChart3={heightChart3}/>
                        </div>
                </div>
            </div>
            <div className={style.hcomit3} >
                <div className={style.htu1}>
                    <div className={style.hbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 
                    <p className={style.wenzi}>企业纳税前10</p>
                    {
                        analysisTableData&&analysisTableData.map((value,key)=>{
                            return(
                                <div className={style.kuang} key={key}>
                                    <p className={style.p1}>{value.corpname}</p>
                                    <p className={style.p2}>{value.total}元</p>
                                </div> 
                            )
                        })
                    }                 
                </div>                
            </div>
            <div className={style.cmi}>
                <div className={style.cmou}></div>
                <div className={style.comiwen}>o产业总览</div>
                <div className={style.comiwen2}><span>{analysisAllData&&analysisAllData[0]}</span><span className={style.name}>家</span></div>
                <Ttranfrom analysisAllData={analysisAllData} />
            </div>
        </div>                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart3:state.vars.heightChart3,  
        analysisTableData:state.vars.analysisTableData,
        analysisAllData:state.vars.analysisAllData,
        analysisTaxData:state.vars.analysisTaxData    
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#meini').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.9;
        dispatch(actions.setVars('heightChart3',height));
      },
    init: ()=> {
        //小镇企业分布及产值情况    
        let param_json1={
            "query":{
                "target":"clientQydaInf",
                "function":"getQyfbczData",
                "year":"2017"
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
            dispatch(actions.setVars('analysisChart1Data',data.query.detail));
        };
        //小镇税收情况    
        let param_json2={
            "query":{
                "target":"clientQydaInf",
                "function":"getYqssqkData",
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
            console.log('小镇税收情况',data)
            dispatch(actions.setVars('analysisTaxData',data.query.detail));
        };
        //产业总览    
        let param_json3={
            "query":{
                "target":"clientQydaInf",
                "function":"getCyzl",
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
            console.log('产业总览',data)
            dispatch(actions.setVars('analysisAllData',data.query.detail.list));
        };
        //纳税前十    
        let param_json4={
            "query":{
                "target":"clientQydaInf",
                "function":"getQynsData",
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
            console.log('纳税前十',data)
            dispatch(actions.setVars('analysisTableData',data.query.list));
        };
    },
    columnYear:(year)=>{//小镇企业分布及产值情况年份数据            
        let param_json1={
            "query":{
                "target":"clientQydaInf",
                "function":"getQyfbczData",
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
            console.log('chart1',data)
            dispatch(actions.setVars('analysisChart1Data',data.query.detail));
        };
    },
    lineYear:(year)=>{//小镇税收情况年份数据            
        let param_json2={
            "query":{
                "target":"clientQydaInf",
                "function":"getYqssqkData",
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
            console.log('chart2',data)
            dispatch(actions.setVars('analysisTaxData',data.query.detail));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
