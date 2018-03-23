// tranfrom.jsx

import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './tranfrom.scss'

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
    return (
      <div>
         <div className={style.donghua_dayuan}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}></div>
          </div>
        </div> 
        <div className={style.ncl}>
          <p className={style.mini}>100</p>
          <p className={style.miz}>今年入驻</p>
          <p className={style.mini01}>3200%</p>
          <p className={style.miz01}>同比</p>
        </div>

        <div className={style.donghua_dayuan2}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}></div>
          </div>
          <div className={style.ncl}>
          <p className={style.mini}>0.00</p>
          <p className={style.miz}>今年产值/万元</p>
          <p className={style.mini01}>0%</p>
          <p className={style.miz01}>同比</p>
        </div>
        </div> 
      <div className={style.donghua_dayuan3}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}></div>
          </div>
          <div className={style.ncl}>
          <p className={style.mini}>0</p>
          <p className={style.miz}>今年退圆</p>
          <p className={style.mini01}>0%</p>
          <p className={style.miz01}>同比</p>           
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
