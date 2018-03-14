import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import css from './main.scss';
import circle1 from './../img/circle.png';
import circle2 from './../img/circleBig.png';
import MainChart from './chart/MainChart.jsx';
import Nav from '../functionCom/nav.jsx';//导航
import Sun from '../img/tianqi.png';
import ajax from '../functionCom/myAjax.js';
//import webSocket from '../functionCom/socketClient.js';

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
    let {toOverview,weekday,timeNow,dateNow}=this.props;
    return (
      <div className={css.main}>
        <div className={`${css.circle} ${css.circle1}`}>
          <div className={css.line_left1}></div>
          <img className={css.bg} src={circle1}/>
          <div className={css.text1}>
            <div className={css.time}>{timeNow}</div>
            <div className={css.date}>{dateNow}</div>
            <div className={css.weekday}>{weekday}</div>
            <div className={css.sun}><img src={Sun}/></div>
          </div>
        </div>
        <div className={`${css.circle} ${css.circle2}`}>
          <div className={css.line_left2}></div>
          <img src={circle2}/>
          <div className={css.text2}>
            <div className={css.title}><span className={css.icon}></span>物业管理</div>
            <div className={css.num}>0%</div>
            <div className={css.word}>房屋出租率</div>
          </div>
        </div>
        <div className={`${css.circle} ${css.circle3}`}>
          <div className={css.line_left3}></div>
          <img src={circle1}/>
          <div className={css.text3}>
            <div className={css.title}><span className={css.icon}></span>产业分析</div>
            <table>
              <tbody>
                <tr className={css.two}>
                  <td className={css.color}>A区</td><td className={css.color}>B区</td>
                </tr>
                <tr className={css.two}>
                  <td>14家</td><td>15家</td>
                </tr>
              </tbody>              
            </table>
            <div className={`${css.name} ${css.color}`}>服务外包核心区</div>
            <div className={css.num}>15家企业</div>
          </div>
        </div>
        <div className={css.middle}>
          <div className={css.circleBig}></div>
          <div className={css.textBig}>
              <div className={css.title}><span className={css.icon}></span>田园总览</div>
              <div className={css.name}>园区数据分析</div>
              <table>
                <tbody>
                  <tr>
                    <td>在园企业</td><td>入园企业</td>
                  </tr>
                  <tr>
                    <td>总共<span className={css.num}>70</span>家</td><td><span className={css.num}>0</span>家今年</td>
                  </tr>
                  <tr>
                    <td colSpan="2">入园企业</td>
                  </tr>
                  <tr>
                    <td colSpan="2"><span className={css.numGreen}>20%</span>同比下降</td>
                  </tr>
                </tbody>
              </table>
          </div>   
          <div className={css.circleBig_bottom}></div>
        </div>   

        <div className={`${css.circle} ${css.circle4}`}>
          <div className={css.line_right1}></div>
          <img src={circle1}/>
          <div className={css.text4}>
            <div className={css.title}><span className={css.icon}></span>经济运行情况</div>
            <div><span className={css.word}>占比率</span><span className={css.num}>50%</span></div>
            <div className={css.total}><div className={css.percent} style={{width:'50%'}}></div></div>
            <div><span className={css.word}>占比率</span><span className={css.num}>40%</span></div>
            <div className={css.total}><div className={css.percent} style={{width:'40%'}}></div></div>
          </div>
        </div>
        <div className={`${css.circle} ${css.circle5}`}>
          <div className={css.line_right2}></div>
          <img src={circle1}/>
          <div className={css.text5}>
            <div className={css.title}><span className={css.icon}></span>区位及项目优势展示</div>
            <div className={css.chart}><MainChart/></div>            
          </div>
        </div>
        <div className={`${css.circle} ${css.circle6}`}>
          <img src={circle1}/>
          <div className={css.text6}>
            <div className={css.title}><span className={css.icon}></span>决策分析</div>
            <div className={css.num}>0%</div>
            <div className={css.word}>小镇占比率</div>
            <div className={css.num}>100%</div>
            <div className={css.word}>小镇占比率</div>
          </div>
        </div>
        <div className={css.leftBg}></div>   
        <div className={css.line_bar1}></div>
        <div className={css.line_bar2}></div>
        <div className={css.overviewPro}>
          <div className={css.title}><span className={css.icon}></span>项目孵化概览</div>
          <div className={css.name}>苗圃项目</div>
          <div className={css.total}><div className={css.percent} style={{width:'30%'}}></div></div>
          <div className={css.name}>在孵项目</div>
          <div className={css.total}><div className={css.percent} style={{width:'40%'}}></div></div>
          <div className={css.name}>毕业项目</div>
          <div className={css.total}><div className={css.percent} style={{width:'50%'}}></div></div>
          <div className={css.name}>加速项目</div>
          <div className={css.total}><div className={css.percent} style={{width:'60%'}}></div></div>
        </div>
        <div className={css.boardPro}>
          <div className={css.title}><span className={css.icon}></span>工程项目管理看板</div>
            <div><span className={css.name}>工程项目</span><div className={css.percent}>15个</div></div>
            <table>
                <tbody>
                  <tr>
                    <td>筹建</td>
                    <td>在建</td>
                    <td>竣工</td>
                  </tr>
                  <tr>
                    <td><span className={css.num}>80</span>%</td>
                    <td><span className={css.num}>6</span>%</td>
                    <td><span className={css.num}>14</span>%</td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div className={css.boardRight}>
          <div className={css.name}><span className={css.icon}></span>招商引资看板</div>
          <div className={css.part1}>意向企业<div>1</div><div className={css.time}>本月</div></div>
          <div className={css.part2}>意向企业<div>1</div><div className={css.time}>本年</div></div>
          <div className={css.part3}>签约企业<div>1</div><div className={css.time}>本月</div></div>
          <div className={css.part4}>签约企业<div>1</div><div className={css.time}>本年</div></div>
        </div>
        <Nav></Nav>
      </div>   
    )
  }
});
const mapStateToProps = (state) => {
    return {
        timeNow: state.vars.timeNow,
        dateNow: state.vars.dateNow,
        weekday: state.vars.weekday,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
      // var myData = new Date();//Id 
      // var times = myData.getTime().toString();
      // var str= times.substr(times.length-4);
      // webSocket.getConnect('NM/FC/XM/XL1/FMJCD/WTG06',str,success,true);
      // function success(res){
      //   console.log(999,res)
      // }
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
      
      $.ajax({
        url: "http://116.62.33.209:9090/rest/parkUsers/getUserss",
        dataType: 'jsonp',
        async:false,
        timeout: 10000, 
        jsonp: "callbackparam",
        jsonpCallback: 'callbackparam',
        success: function(data){
          console.log('aa',data)
        }
      })
      
    },
    toOverview: ()=>{
      browserHistory.push('/app/all/project/town/overview')
    }
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
