import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');

import style from './leftfist.scss';
import Echar from './Echar.jsx'; // 图表
import Shiping from './shiping.jsx';  //视频
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {}=this.props;
    return (
        <div className={style.hxconfist}>
       <Shiping/>
        <Echar/>
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
      
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
