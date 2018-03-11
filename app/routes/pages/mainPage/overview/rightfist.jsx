import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rightfist.scss';
import Rightchar from './Echares/rightchar'
import RightCha from './Echares/rightcha'
import LTable from './table.jsx'  //表格01
import Lablege from './tablege.jsx'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {height,}=this.props;
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
                           <Rightchar height={height}/>
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
                                  <RightCha height={height}/>
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
      height:state.vars.height,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
      let height=$('#chart').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.8;
        dispatch(actions.setVars('height',height));
        window.addEventListener("resize", function(){
            let height=$('#chart').css('height');
            let num=height.length-2;
            height=height.substr(0,num)*.8;
            dispatch(actions.setVars('height',height));
        });    
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
