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
            <div className={`${style.neidayuan01} ${style.right01}`}>            </div>
          </div>
        </div> 
        <div className={style.ncl}>
          <p className={style.mini}>5</p>
          <p className={style.miz}>苗圃占比22%</p>
        </div>

        <div className={style.donghua_dayuan2}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}>            </div>
          </div>
          <div className={style.ncl}>
          <p className={style.mini}>5</p>
          <p className={style.miz}>孵卵占比22%</p>
        </div>
        </div> 
      <div className={style.donghua_dayuan3}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}>            </div>
          </div>
          <div className={style.ncl}>
          <p className={style.mini}>5</p>
          <p className={style.miz}>毕业占比22%</p>
        </div>
        </div> 
          <div className={style.donghua_dayuan4}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}>            </div>
          </div>
          <div className={style.ncl}>
          <p className={style.mini}>5</p>
          <p className={style.miz}>加速占比22%</p>
        </div>
        </div> 
          <div className={style.donghua_dayuan5}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}>            </div>
          </div>
          <div className={style.ncl}>
          <p className={style.mini}>5</p>
          <p className={style.miz}>迁出占比22%</p>
        </div>
        </div> 
          <div className={style.donghua_dayuan6}>
          <div className={`${style.neidayuan} ${style.right}`}>
            <div className={`${style.neidayuan01} ${style.right01}`}>            </div>
          </div>
          <div className={style.ncl}>
          <p className={style.mini}>5</p>
          <p className={style.miz}>淘汰占比22%</p>
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
