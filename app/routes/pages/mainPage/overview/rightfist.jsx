import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rightfist.scss';
import Rightchar from './Echares/rightchar'  //签约项目产业分布
import RightCha from './Echares/rightcha' ///项目同比排名
import LTable from './table.jsx'  //表格01 项目同比累计
import Lablege from './tablege.jsx'  //各部门签约情况
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
    this.props.chartHeight();
    window.addEventListener("resize", this.props.chartHeight);
  },
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.chartHeight);
  },

  render() {
    let {heightChart7,}=this.props;
    return (
      <div className={style.hxconfist}>
          <div className={style.hxEchar}>
               <div className={style.hxEchad}>
                  <span></span> 
                  <span></span> 
                  <span></span> 
                  <span></span>
                </div>
                <p>项目同比累计</p>
            <LTable/>
                    <div className={style.xaila}>
                           <div className={style.latu} ></div>
                              <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                              </ul>
                   </div>
          </div>
                <div className={style.hxEchar01}>
                    <div className={style.hxEchad}>
                      <span></span> 
                      <span></span> 
                      <span></span> 
                      <span></span>
                    </div>
                        <p>签约项目产业分布</p>
                           <Rightchar heightChart7={heightChart7}/>
                           <div className={style.xaila}>
                              <div className={style.latu}></div>
                          </div>
                </div>
                    <div className={style.hxEchar02} id='chart'>
                            <div className={style.hxEchad}>
                                <span></span> 
                                <span></span> 
                                <span></span> 
                                <span></span>
                            </div>
                                <p>项目同比排名</p>
                                  <RightCha heightChart7={heightChart7}/>
                                  <div className={style.xaila}>
                                      <div className={style.latu}></div>
                                  </div>
                    </div>
                        <div className={style.hxEchar03}>
                                <div className={style.hxEchad}>
                                      <span></span> 
                                      <span></span> 
                                      <span></span> 
                                      <span></span>
                                </div>
                                    <p>各部门签约情况</p>
                                        <Lablege/>
                                        <div className={style.xaila}>
                                            <div className={style.latu}></div>
                                        </div>
                        </div>
    </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      heightChart7:state.vars.heightChart7,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
      let height=$('#chart').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.9;
      dispatch(actions.setVars('heightChart7',height));
    },
    init: ()=> {
     
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
