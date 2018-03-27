
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './manap.scss'

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
    return (
      <div className={style.cmt}>
            <div className={style.logo}>
            <div className={style.logotu}></div>
            </div>
            <div className={style.zhongtu}>
                <div className={style.zbj}>
                <div className={style.zbtu}></div>
                </div>
                <div className={style.bjkung}>
                <div className={style.bjktu}></div>
                </div>
                <div className={style.bjwen}>
                <div className={style.bjwenzi01}>
                 <p className={style.p1}>0</p>
                 <p className={style.p2}>今年入驻</p>
                 <p className={style.p3}>0</p>
                <p className={style.p4}>同比</p>
                </div>
                <div className={style.bjwenzi02}>
                <p className={style.p1}>0</p>
                <p className={style.p2}>今年产值/万元</p>
                <p className={style.p3}>0</p>
                <p className={style.p4}>同比</p>
                </div>
                <div className={style.bjwenzi03}>
                <p className={style.p1}>0</p>
                <p className={style.p2}>今年退圆</p>
                <p className={style.p3}>0</p>
                <p className={style.p4}>同比</p>
                </div>
                {/* <div className={style.bjwenzi04}>
                <p className={style.p1}>0</p>
                <p className={style.p2}>同比</p>
                </div> */}
                </div>
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
