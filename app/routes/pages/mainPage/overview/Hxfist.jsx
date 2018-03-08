import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './Hxfist.scss'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {timeNow,dateNow,weekday}=this.props;
    return (
        <div className={style.hxconfist}>
        <div className={style.hxcosd}><div className={style.hxcont}> </div> </div>
          <div className={style.hxcont01}>
          <div className={style.sdf}> <div className={style.hxcont02}> </div> </div>
          {/* <div className={style.dahezi}><div className={style.quan}><div className={style.quan01}></div></div></div> */}
         
          <div className={style .hxssd}>
          <div className={style.hsdf}>
        <span></span>
          <p>本月意向项目</p>
          <span>19个</span>
          <span>+</span>
          </div>
          <div className={style.hsdf01}>
        <span></span>
          <p>本月意向项目</p>
          <span>19个</span>
          <span>+</span>
          </div>
          <div className={style.hsdf02}>
        <span></span>
          <p>本月意向项目</p>
          <span>19个</span>
          <span>+</span>
          </div>
          <div className={style.hsdf03}>
        <span></span>
          <p>本月意向项目</p>
          <span>19个</span>
          <span>+</span>
          </div>
          </div>
          <div className={style.hxcontu}>
            <div className={style.mg}></div>
            <div className={style.hxcon09}><span></span><p>招商引资看板</p></div>
            <div className={style.hxcvn}></div>
            <div className={style.hxcvn01}></div>
            <div className={style.hxasd}>
         <div className={style.hxsd}><div className={style.mg}></div><div className={style.hxsdzi}><p>72</p> <span>累计意向</span></div></div>
         <div className={style.hxsd01}><div className={style.mg}></div><div classNamw={style.hxsd02}><div className={style.hxsdzi}><p>1</p> <span>累计关闭</span></div></div></div>
         <div className={style.hxsdas}><div className={style.mg}></div><div className={style.hxsdzi}><p>80</p> <span>累计签约</span></div></div>
            </div>
            <div className={style.tianqi}>
            <div className={style.tianqi0}>
            <div className={style.time}>{timeNow}</div>
            <div className={style.day}>{dateNow}</div>
            <div className={style.weweq}>{weekday}</div>
            <div className={style.taiyang}></div>
            </div>
            </div>
            </div>
          </div>
          </div>
        
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      timeNow:state.vars.timeNow,
      dateNow:state.vars.dateNow,
      weekday:state.vars.weekday,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
      function setTime(){
        let myDate = new Date();
        let timeNow=myDate.getHours()+':'+myDate.getMinutes()+":"+myDate.getSeconds();
        let dateNow=myDate.toLocaleDateString();//获取当前日期
        let day=myDate.getDay();//星期
        let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        dispatch(actions.setVars('timeNow',timeNow));
        dispatch(actions.setVars('dateNow',dateNow));
        dispatch(actions.setVars('weekday',weekday[day]));
      }      
      setInterval(setTime, 1000);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
