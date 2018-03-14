import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './Overview.scss';
import Leftfist from './Leftfist.jsx';  //左边页面
import Hxfist from './Hxfist.jsx';  //中间页面 
import Rightfist from './rightfist.jsx';//右边页面
import Nav from '../functionCom/nav.jsx';//导航
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
    let {}=this.props;
    return (
        <div className={style.conet}>
       <Leftfist/>
      <Hxfist/>
     <Rightfist/>
     <Nav></Nav>
        </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
     
    },
   
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
