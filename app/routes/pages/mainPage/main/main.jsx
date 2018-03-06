import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import css from './main.scss';
import circle1 from './../img/circle.png';
import circle2 from './../img/circleBig.png';
import MainChart from './chart/MainChart.jsx';
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
    let {}=this.props;
    return (
      <div className={css.main}>
        <div className={`${css.circle} ${css.circle1}`}>
          <div className={css.line_left1}></div>
          <img src={circle1}/>
          <div className={css.text1}>
            <div className={css.title}><span className={css.icon}></span>企业档案管理</div>
            <table>
              <tbody>
                <tr>
                  <td className={css.num}>100/269</td>
                  <td></td>
                </tr>
                <tr>
                  <td>在办/累计</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className={css.num}>2</td>
                </tr>
                <tr>
                  <td></td>
                  <td>知识份数</td>
                </tr>
              </tbody>
            </table>
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
            <div className={css.num}>0%</div>
            <div className={css.word}>小镇占比率</div>
            <div><div></div></div>
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
                    <td>80%</td>
                    <td>6%</td>
                    <td>14%</td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div className={css.boardRight}>
          <div><span className={css.icon}></span>招商引资看板</div>
          <div className={css.part1}>意向企业<div>1</div><div className={css.time}>本月</div></div>
          <div className={css.part2}>意向企业<div>1</div><div className={css.time}>本年</div></div>
          <div className={css.part3}>签约企业<div>1</div><div className={css.time}>本月</div></div>
          <div className={css.part4}>签约企业<div>1</div><div className={css.time}>本年</div></div>
        </div>
        <div className={css.menu} onMouseLeave={()=>this.hideNav()}>
          <div className={css.img}><div className={css.src} onClick={()=>this.showNav()}></div></div>
          <ul className={css.nav} id="nav">
              <li>nav1</li>
              <li>nav2</li>
              <li>nav3</li>
              <li>nav4</li>
          </ul>
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
      // var myData = new Date();//Id 
      // var times = myData.getTime().toString();
      // var str= times.substr(times.length-4);
      // webSocket.getConnect('NM/FC/XM/XL1/FMJCD/WTG06',str,success,true);
      // function success(res){
      //   console.log(999,res)
      // }
    },
    
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
