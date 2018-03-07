import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './tablege.scss';
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {}=this.props;
    return (
        <div className={style.ss}>
        <div className={style.sd}>
        <p>部门名称</p>
        <p>累计项目</p>
        <p>累计签约</p>
        <p>签约比例</p>
        {/* <p>本年项目</p>
        <p>本年签约</p>
        <p>本年签约比例</p> */}
        </div>
        <div className={style.sd}>
        <p>入住申请</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>资格审核</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>安排看房</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>入住审批</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>签合同</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
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
