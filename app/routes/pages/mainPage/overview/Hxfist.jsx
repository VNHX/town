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
              <div className={style.biaoti}>
                  <div className={style.biao}></div>
              </div>
                    <div className={style.cmtoa}>
                        <div className={style.coi}>
                            <div className={style.topz}></div>
                        </div>
                            <div className={style.voiyuan}>
                                  <div className={style.yuanle}></div>
                            </div>
                                <div className={style.wezi}>
                                    <div className={style.tubiao}>
                                      <div className={style.tubiao2}></div>
                                    </div>
                                    <p>招商引资看板</p>
                                </div>
                                    <div className={style.wenzi2}>
                                     <div className={style.tubiao3}>
                                        <span className={style.tubiao3_1}></span>
                                        <p className={style.weizi}>本月意向项目</p>
                                        <span className={style.shuzi}>
                                            19 
                                            <p>个</p>
                                        </span>
                                        <span className={style.jia}>+</span>
                                     </div>
                                          <div className={style.tubiao4}>
                                              <span className={style.tubiao3_1}></span>
                                              <p className={style.weizi}>本月意向项目</p>
                                              <span className={style.shuzi}>
                                                  19 
                                                  <p>个</p>
                                              </span>
                                              <span className={style.jia}>+</span>
                                          </div>
                                                <div className={style.tubiao5}>
                                                    <span className={style.tubiao3_1}></span>
                                                    <p className={style.weizi}>本月意向项目</p>
                                                    <span className={style.shuzi}>
                                                        19 
                                                        <p>个</p>
                                                    </span>
                                                    <span className={style.jia}>+</span>
                                                </div>
                                                    <div className={style.tubiao6}>
                                                        <span className={style.tubiao3_1}></span>
                                                        <p className={style.weizi}>本月意向项目</p>
                                                        <span className={style.shuzi}>
                                                            19 
                                                            <p>个</p>
                                                        </span>
                                                        <span className={style.jia}>+</span>
                                                    </div>
                                    </div>
                                {/* 左边圆 */}
                                    <div className={style.leftyuan}>
                                        <div className={style.leftxain}>
                                            <div className={style.xiaotao}></div>
                                        </div>
                                        <div className={style.yuanquan}>
                                            <div className={style.yuan}></div>
                                            <div className={style.yuanwenzi}>
                                                <p className={style.yuanwenzi01}>72</p> 
                                                  <span className={style.yuanwenzi02}>累计意向</span>
                                            </div>
                                        </div>
                                        <div className={style.leftxain02}>
                                            <div className={style.xiaotao}></div>
                                        </div>
                                        <div className={style.yuanquan02}>
                                            <div className={style.yuan}></div>
                                            <div className={style.yuanwenzi}>
                                                <p className={style.yuanwenzi01}>72</p> 
                                                  <span className={style.yuanwenzi02}>累计意向</span>
                                            </div>
                                        </div>
                                    </div>
                            {/* 右边圆 */}
                                      <div className={style.rightyuan}>
                                            <div className={style.rightxian}>
                                                <div className={style.xiaotao}></div>
                                            </div>
                                                 <div className={style.rightyuanquan}>
                                                        <div className={style.yuan}></div>
                                                             <div className={style.yuanwenzi}>
                                                                     <p className={style.yuanwenzi01}>72</p> 
                                                                            <span className={style.yuanwenzi02}>累计意向</span>
                                                             </div>
                                                </div>
                                                <div className={style.rqi}>
                                                    <div className={style.rqbj}>
                                                        <div className={style.rqks}>
                                                            <span className={style.time}>{timeNow}</span>
                                                            <span className={style.day}>{dateNow}</span>
                                                            <span className={style.dayks}>{weekday}</span>
                                                        </div>
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
