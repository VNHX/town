//楼层信息
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var {browserHistory} = require('react-router');
import Nav from '../functionCom/nav.jsx';//导航
import css from './floor.scss';
import Column from './column.jsx';//柱图
import Table from "./table.jsx";//table表格
import Pie from "./pieChart.jsx";//pie1
import Right from './right.jsx';//右屏
import floorNum from "../functionCom/floorId";
const floorData=floorNum.floorData;//楼栋名称
const idArr=floorNum.idArr;//楼栋id
import ajax from '../functionCom/myAjax.js';
let myAjax=ajax.myAjax;
import webSocket from '../functionCom/socketClient.js';
let Component = React.createClass({
  componentDidMount() {
    this.props.init(this.props.floorId);
  },
  componentWillReceiveProps(){
    ///this.props.init(this.props.floorId);
  },
  render() {
    let {floorId=false,AllData,alertBool}=this.props;
    console.log('33',AllData)
    return (
    	<div className={css.floor}>
    		<div className={css.leftBox}>
    			<div className={css.chartBox}>
    				<div className={css.column}>
    					<div className={css.borderBox}>
    						<span className={css.leftTop}></span>
	    					<span className={css.leftBottom}></span>
	    					<span className={css.rightTop}></span>
	    					<span className={css.rightBottom}></span>
                            <div className={css.header}>人才资源结构</div>
	    					<Column floorOneData={AllData&&AllData.floorOneData}/>
    					</div>    					
    				</div>
    				<div className={css.pie}>
    					<div className={`${css.pie1} ${css.pieBox}`}>
                            <div className={css.borderBox}>
                                <span className={css.leftTop}></span>
                                <span className={css.leftBottom}></span>
                                <span className={css.rightTop}></span>
                                <span className={css.rightBottom}></span>
                                <div className={css.header}>行业分析</div>
                                <Pie floorTwoData={AllData&&AllData.floorTwoData}/>
                            </div> 
    					</div>
    					<div className={`${css.pie2} ${css.pieBox}`}>
                            <div className={css.borderBox}>
                                <span className={css.leftTop}></span>
                                <span className={css.leftBottom}></span>
                                <span className={css.rightTop}></span>
                                <span className={css.rightBottom}></span>
                                <div className={css.header}>人员学历</div>
                                <Pie floorTwoData={AllData&&AllData.floorThreeData}/>
                            </div> 
    					</div>
    				</div>
    			</div>
    			<div className={css.tableBox}>
                    <div className={css.borderBox}>
                        <span className={css.leftTop}></span>
                        <span className={css.leftBottom}></span>
                        <span className={css.rightTop}></span>
                        <span className={css.rightBottom}></span>
                        <div className={css.header}>明星企业</div>
                        <Table floorFourData={AllData&&AllData.floorFourData}/>
                    </div>
    			</div>
    		</div>
    		<div className={css.middleBox}>
                <div className={css.header}></div>
                <div className={css.bg}>
                    <div className={css.leftcomp}></div>
                    <div className={css.rightcomp}>
                        <div className={css.wenzi}>
                            <p>楼栋编号: <a>{floorId ? floorData[floorId]:'1号楼'}</a></p>
                            <p>企业数量: <a>{AllData&&AllData.floorFiveData.qysl}</a> 家</p>
                            <p>办公面积: <a>{AllData&&AllData.floorFiveData.qymj}</a> 平</p>
                            <p>纳税金额: <a>{AllData&&AllData.floorFiveData.qyns}</a> 元</p>
                            <p>总&nbsp;&nbsp;产&nbsp;&nbsp;值: <a>{AllData&&AllData.floorFiveData.cz}</a> 元</p>
                        </div>
                    </div>
                </div>
    		</div>
    		<div className={css.rightBox}>
                <Right floorSixData={AllData&&AllData.floorSixData}/>
    		</div>
            {
                alertBool&&<div className={css.alert}>
                    暂无信息！
                </div>
            }
          	<Nav/>
        </div>
    )
  }
});
const mapStateToProps = (state) => {
    return {      
      floorId:state.vars.floorId,
      AllData:state.vars.AllData,
      alertBool:state.vars.alertBool,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: (floorId)=> {
        console.log('init',floorId)
        function go(floorId){//初始
                let AllData={};
                if(floorId&&idArr[floorId]!=""){
                    //人才资源结构
                    let param_json1={
                        "query":{
                            "target":"clientWyInf",
                            "function":"getRczy",
                            "id":idArr[floorId],
                        }
                    };
                    let data1={
                        url: 'ClientGetJsonDatas',
                        requireData: "param_json="+JSON.stringify(param_json1),
                        requireType: 'get',
                        async: false,
                    };
                    myAjax(data1,success1);       
                    function success1(data){
                        console.log('人才资源结构',data);
                        AllData.floorOneData=data.query.detail;
                    };
                    //行业分析
                    let param_json2={
                        "query":{
                            "target":"clientWyInf",
                            "function":"getRczy",
                            "id":idArr[floorId],
                        }
                    };
                    let data2={
                        url: 'ClientGetJsonDatas',
                        requireData: "param_json="+JSON.stringify(param_json2),
                        requireType: 'get',
                        async: false,
                    };
                    myAjax(data2,success2);       
                    function success2(data){
                        console.log('行业分析',data);
                        let floorTwoData=[];
                        for(let i=0;i<data.query.detail.name.length;i++){
                            floorTwoData[i]=[];
                            floorTwoData[i].push(data.query.detail.name[i]);
                            floorTwoData[i].push(data.query.detail.value[i]);
                        }
                        AllData.floorTwoData=floorTwoData;
                    };
                    //人员学历
                    let param_json3={
                        "query":{
                            "target":"clientWyInf",
                            "function":"getRyxl",
                            "id":idArr[floorId],
                        }
                    };
                    let data3={
                        url: 'ClientGetJsonDatas',
                        requireData: "param_json="+JSON.stringify(param_json3),
                        requireType: 'get',
                        async: false,
                    };
                    myAjax(data3,success3);       
                    function success3(data){
                        console.log('人员学历',data)
                        let floorThreeData=[];
                        for(let i=0;i<data.query.detail.name.length;i++){
                            floorThreeData[i]=[];
                            floorThreeData[i].push(data.query.detail.name[i]);
                            floorThreeData[i].push(data.query.detail.value[i]);
                        }
                        AllData.floorThreeData=floorThreeData;
                    };
                    //明星企业
                    let param_json4={
                        "query":{
                            "target":"clientWyInf",
                            "function":"getMxqyList",
                            "id":idArr[floorId],
                        }
                    };
                    let data4={
                        url: 'ClientGetJsonDatas',
                        requireData: "param_json="+JSON.stringify(param_json4),
                        requireType: 'get',
                        async: false,
                    };
                    myAjax(data4,success4);       
                    function success4(data){
                        console.log('明星企业',data);
                        AllData.floorFourData=data.query.list;
                    };
                    //数据总览
                    let param_json5={
                        "query":{
                            "target":"clientWyInf",
                            "function":"getBanTotal",
                            "id":idArr[floorId],
                        }
                    };
                    let data5={
                        url: 'ClientGetJsonDatas',
                        requireData: "param_json="+JSON.stringify(param_json5),
                        requireType: 'get',
                        async: false,
                    };
                    myAjax(data5,success5);       
                    function success5(data){
                        console.log('数据总览',data)
                        AllData.floorFiveData=data.query.detail;
                    };
                    //logo
                    let param_json6={
                        "query":{
                            "target":"clientWyInf",
                            "function":"getLogoList",
                            "id":idArr[floorId],
                        }
                    };
                    let data6={
                        url: 'ClientGetJsonDatas',
                        requireData: "param_json="+JSON.stringify(param_json6),
                        requireType: 'get',
                        async: false,
                    };
                    myAjax(data6,success6);       
                    function success6(data){
                        console.log('logo',data)
                        AllData.floorSixData=data.query.list;
                    };
                    dispatch(actions.setVars("AllData",AllData))
                }else{
                    dispatch(actions.setVars("alertBool",true));
                    dispatch(actions.setVars("AllData",undefined));
                    setTimeout(function(){
                        dispatch(actions.setVars("alertBool",false));
                    },1000)
                }
        };
        go(floorId);  
        var myData = new Date();//Id 
        var times = myData.getTime().toString();
        var str= times.substr(times.length-5);
        webSocket.getConnect('zz/zz',str,success,true);
        function success(res){
            let num=Number(res);
            if(num>5){
                browserHistory.push('/app/project/town/floor');     
                let floorId=num-6;
                dispatch(actions.setVars('floorId',floorId));
                go(floorId);                                 
            }     
        };            
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
