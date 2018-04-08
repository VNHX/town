import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './hatch.scss'
import Lefthatch from './lefthatch.jsx' //左边
import Coenthatch from './coenthatch.jsx' //中间coenthatch
import Righthatch from './righthatch.jsx' //右边
import Nav from '../functionCom/nav.jsx';//导航
import Ajax from "../functionCom/myAjax.js";
let myAjax=Ajax.myAjax;
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
    let {totalData}=this.props;
    return (
        <div className={style.comit}>
            <Lefthatch totalData={totalData}/>
            <Coenthatch totalData={totalData}/>
            <Righthatch/>
            <Nav></Nav>
        </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      totalData:state.vars.totalData,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
       //项目总览  
        let param_json1={
            "query":{
                "target":"clientImportantProjectInf",
                "function":"getProjectTotal",
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
            console.log('项目总览',data)
            dispatch(actions.setVars('totalData',data.query.detail));
        };
    },
  
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
