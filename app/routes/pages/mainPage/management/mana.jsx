
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './mana.scss';
import Manapr from './char/manapr.jsx' ;//人才资源结构
// mapchar
import Mapchar from './char/mapchar.jsx'; //企业数量统计
import Mp from './char/mp_yuan1.jsx'; //知识产权_发明专利
import Mpto from './char/mp_yuan2.jsx'; //知识产权_实用新型
import Mpse from './char/mp_yuan3.jsx'; //知识产权_外观设计
import Mpsp from './char/mp_yuan4.jsx'; //知识产权_计算机软件
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
    let {heightChart1,heightPie,lineData360,columnData360,pieData360}=this.props;
    return (
      <div className={style.cmt}>
        <div className={style.hcomit} id='bck'>
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>企业数量统计</p>
                    <div className={style.tubiao}>
                    <Mapchar heightChart1={heightChart1} lineData={lineData360}/>
                    </div>
            </div>
        </div>
        <div className={style.hcomit02} >
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>知识产权</p>
                    <div className={style.tubiao}>
                        <div className={style.lyuan}> 
                            <p className={style.p2}>{pieData360&&pieData360.value[0]}</p>
                            <Mp heightPie={heightPie}/>
                        </div>
                        <div className={style.lwenzi}>
                            <p className={style.p1}>{pieData360&&pieData360.name[0]}</p>
                        </div>

                        <div className={style.lyuan02} id='bck2'>
                            <p className={style.p2}>{pieData360&&pieData360.value[1]}</p>
                            <Mpto heightPie={heightPie}/>
                        </div>
                        <div className={style.lwenzi02}>
                            <p className={style.p1}>{pieData360&&pieData360.name[1]}</p>
                        </div>

                        <div className={style.lyuan03}>
                            <p className={style.p2}>{pieData360&&pieData360.value[2]}</p>
                            <Mpse heightPie={heightPie}/>
                        </div>
                        <div className={style.lwenzi03}>
                            <p className={style.p1}>{pieData360&&pieData360.name[2]}</p>
                        </div>

                        <div className={style.lyuan04}>  
                            <p className={style.p2}>{pieData360&&pieData360.value[3]}</p>
                            <Mpsp heightPie={heightPie}/>
                        </div>
                        <div className={style.lwenzi04}>
                            <p className={style.p1}>{pieData360&&pieData360.name[3]}</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className={style.hcomit03} >
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>人才资源结构</p>
                    <div className={style.tubiao}>
                      <Manapr heightChart1={heightChart1} columnData={columnData360}/>
                    </div>
            </div>
        </div>
      </div>
       
         
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart1:state.vars.heightChart1,
        heightPie:state.vars.heightPie,
        lineData360:state.vars.lineData360,
        columnData360:state.vars.columnData360,
        pieData360:state.vars.pieData360
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#bck').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.9;
        dispatch(actions.setVars('heightChart1',height));
  
        let heightPie=$('#bck2').css('height');
        let numPie=heightPie.length-2;
        heightPie=heightPie.substr(0,numPie)*.9;
        dispatch(actions.setVars('heightPie',heightPie));
      },
    init: ()=> {
        //企业数量  
        let param_json1={
            "query":{
                "target":"clientQy360Inf",
                "function":"getCyfbczqkData",
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
            console.log('line1',data)
            dispatch(actions.setVars('lineData360',data.query.detail));
        };
        //人才资源结构  
        let param_json2={
            "query":{
                "target":"clientQy360Inf",
                "function":"getRczyData",
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
            console.log('column1',data)
            dispatch(actions.setVars('columnData360',data.query.detail));
        };
        //知识产权  
        let param_json3={
            "query":{
                "target":"clientQy360Inf",
                "function":"getZscqData",
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
            console.log('pie1',data)
            dispatch(actions.setVars('pieData360',data.query.detail));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
