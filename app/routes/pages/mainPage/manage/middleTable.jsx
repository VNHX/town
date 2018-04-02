//工程项目管理看板
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import css from './middleTable.scss';
import Ajax from "../functionCom/myAjax.js";
let myAjax=Ajax.myAjax;
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  componentWillUnmount() {
    
  },
  render() {
    let {middleDate}=this.props;
    return (
      <div className={css.middleTable}>
          <div className={css.table}>
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <div className={`${css.textBox1} ${css.textBox1}`} style={{width:'25%'}}>
              <div className={css.totalBox}>
                <span className={css.total}>工程项目总数</span>
                <div className={css.num}>{middleDate&&middleDate.project_total}</div>
              </div>
              <div className={css.chartBox}>
                <div className={`${css.oneFloor} ${css.oneFloorFirst}`}><div className={css.twoFloor}><div className={css.threeFloor}></div></div></div>
                <div className={`${css.oneFloor} ${css.oneFloorSecond}`}><div className={css.twoFloor}><div className={css.threeFloor}></div></div></div>
                <div className={`${css.oneFloor} ${css.oneFloorThird}`}><div className={css.twoFloor}><div className={css.threeFloor}></div></div></div>
              </div>              
            </div>
            <div className={`${css.textBox} ${css.textBox2}`}>
              <span><span className={css.logo}></span>本年动工项目</span>
              <div><span className={css.num}>{middleDate&&middleDate.start_total}</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox3}`}>
              <span><span className={css.logo}></span>本年竣工项目</span>
              <div><span className={css.num}>{middleDate&&middleDate.completed_total}</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox4}`}>
              <span><span className={css.logo}></span>本年投资总额（万元）</span>
              <div><span className={css.num}>{middleDate&&middleDate.investment_total}</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox5}`}>
              <span><span className={css.logo}></span>本年动工占地（亩）</span>
              <div><span className={css.num}>{middleDate&&middleDate.completedMu}</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox6}`}>
              <span><span className={css.logo}></span>本年建筑面积（平方米）</span>
              <div><span className={css.num}>{middleDate&&middleDate.architectureMj}</span> <span className={css.percent}>0%</span></div>
            </div>
          </div>        
      </div>    
    )
  }
});
const mapStateToProps = (state) => {
    return {
        middleDate:state.vars.middleDate         
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
                    
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
