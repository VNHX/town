//底部导航
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var {browserHistory} = require('react-router');
import css from './nav.scss';
import webSocket from '../functionCom/socketClient.js';

let Component = React.createClass({
  componentDidMount() {
    this.props.init(this.props.nowPage);
  },
  showNav: ()=> {
    $("#nav").show('slow')
  },
  hideNav: ()=> {
    $("#nav").hide('slow')
  },
  render() {
    let {toMain,toOverview,toHatch,toAnalysis,toManage,nowPage,toManagement,toFloor,floorId}=this.props;
    return (
    	<div className={css.menu} onMouseLeave={()=>this.hideNav()}>
          	<div className={css.img}><div className={css.src} onClick={()=>this.showNav()}></div></div>
          	<ul className={css.nav} id="nav">
              	<li className={nowPage=='main' ? css.active:''} onClick={()=>toMain()}>园区总览</li>
              	<li className={nowPage=='overview' ? css.active:''} onClick={()=>toOverview()}>招商服务</li>
              	<li className={nowPage=='hatch' ? css.active:''} onClick={()=>toHatch()}>项目孵化概览</li>
              	<li className={nowPage=='analysis' ? css.active:''} onClick={()=>toAnalysis()}>小镇产业分析</li>
              	<li className={nowPage=='manage' ? css.active:''} onClick={()=>toManage()}>工程管理看板</li>
              	<li className={nowPage=='management' ? css.active:''} onClick={()=>toManagement()}>企业360°</li>
                <li className={nowPage=='floor' ? css.active:''} onClick={()=>toFloor()}>楼层信息</li>
          	</ul>
        </div>
    )
  }
});
const mapStateToProps = (state) => {
    return {
      nowPage:state.vars.nowPage,
      floorId:state.vars.floorId,
      
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: (nowPage)=> {
      //console.log('456',nowPage)
      var myData = new Date();//Id 
      var times = myData.getTime().toString();
      var str= times.substr(times.length-5);
      webSocket.getConnect('zz/zz',str,success,true);
      function success(res){
        let num=Number(res);
        let page=['main','overview','analysis','hatch','manage','management'];
        if(num>5){
            browserHistory.push('/app/all/project/town/floor');     
            let floorId=num-6;
            dispatch(actions.setVars('floorId',floorId));
            //webSocket.getConnect('zz/zz',str,success,false);       
        }else{
            browserHistory.push('/app/all/project/town/'+page[num])
        }      
      }
    },
    toMain:()=>{
    	browserHistory.push('/app/all/project/town/main')
    },
    toOverview: ()=>{
      	browserHistory.push('/app/all/project/town/overview')
    },
    toHatch: ()=>{
      	browserHistory.push('/app/all/project/town/hatch')
    },
    toAnalysis: ()=>{
      	browserHistory.push('/app/all/project/town/analysis')
    },
    toManage: ()=>{
      	browserHistory.push('/app/all/project/town/manage')
    },
    toManagement: ()=>{
      browserHistory.push('/app/all/project/town/management')
    },
    toFloor: ()=>{
      browserHistory.push('/app/all/project/town/floor')
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
