import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rightfist.scss';
import Rightchar from './Echares/rightchar'
import RightCha from './Echares/rightcha'
import Table from './table.jsx'  //表格01
import Tablege from './tablege.jsx'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {}=this.props;
    return (
      <div className={style.hxconfist}>
    <div className={style.hxEchar}>
    <div className={style.hxEchad}>
    <span></span> <span></span> <span></span> <span></span>
    <p>项目同比累计</p>
    </div>
    <Table/>
    </div>
    <div className={style.hxEchar01}>
    <div className={style.hxEchad}>
    <span></span> <span></span> <span></span> <span></span>
    <p>签约项目产业分布</p>
 <Rightchar/>
    </div>
    </div>
    <div className={style.hxEchar02}>
    <div className={style.hxEchad}>
    <span></span> <span></span> <span></span> <span></span>
    <p>项目同比排名</p>
   <RightCha/>
    </div>

    </div>
    <div className={style.hxEchar03}>
    <div className={style.hxEchad}>
    <span></span> <span></span> <span></span> <span></span>
    <p>各部门签约情况</p>
    </div>
    <Tablege/>
    </div>
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
