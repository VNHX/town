import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import Leftechar from './Echares/leftechar.jsx';  //签约项目来源分布  图表
import style from './Echar.scss';
import Leftar from './Echares/leftar.jsx'  //洽谈中项目分布情况 
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
let {heightChart6,heightPie,overFirstData,overSecondData}=this.props;
    return (
    <div className={style.hxEchar}>
        <div className={style.hxEcha} id="char">
            <p className={style.xm}>签约项目来源分布</p>
                <div className={style.hxEchad}>
                    <span></span> 
                    <span></span> 
                    <span></span> 
                    <span></span>
                </div>
                    <div className={style.xo}>
                        <Leftechar overFirstData={overFirstData} heightChart6={heightChart6} />
                    </div>
                  
        </div>
            <div className={style.hxEcha02} id='char2'>
                    <div className={style.hxEchad}>
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span>
                    </div>
                        <p className={style.xm}>洽谈中项目分布情况</p>
                              {/* <div className={style.xxx}> 
                                 <div className={style.src}></div>
                              </div> */}
                                  <div className={style.xmn}>
                                         <Leftar overSecondData={overSecondData} heightPie={heightPie}/>
                                  </div>
                          
            </div>
    </div>
  
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart6:state.vars.heightChart6,
        heightPie:state.vars.heightPie,
        overFirstData:state.vars.overFirstData,
        overSecondData:state.vars.overSecondData,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#char').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.9;
        dispatch(actions.setVars('heightChart6',height));

        let heightPie=$('#char2').css('height');
        let numPie=heightPie.length-2;
        heightPie=heightPie.substr(0,numPie)*.9;
        dispatch(actions.setVars('heightPie',heightPie));
      },
    init: ()=> {
        //项目签约来源分析
        let param_json1={
            "query":{
                "target":"clientZSFWInf",
                "function":"getQyProject",
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
            console.log('项目签约来源分析',data)
            dispatch(actions.setVars('overFirstData',data.query.detail));
        };
        //洽谈中项目分布情况
        let param_json2={
            "query":{
                "target":"clientZSFWInf",
                "function":"getQtProject",
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
            console.log('洽谈中项目分布情况',data);
            let successDate=[];
            for(let i=0;i<data.query.detail.name.length;i++){
              successDate[i]=[];
              successDate[i].push(data.query.detail.name[i]);
              successDate[i].push(data.query.detail.value[i]);
            };
            dispatch(actions.setVars('overSecondData',successDate));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
