//底部导航
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var {browserHistory} = require('react-router');
import css from './nav.scss';

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  showNav: ()=> {
    $("#nav").show('slow')
  },
  hideNav: ()=> {
    $("#nav").hide('slow')
  },
  render() {
    let {toMain,toOverview,toHatch,toAnalysis,toManage,nowPage,toManagement}=this.props;
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
          	</ul>
        </div>
    )
  }
});
const mapStateToProps = (state) => {
    return {
      nowPage:state.vars.nowPage,
      
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
      
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
  }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
