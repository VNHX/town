
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './mana.scss'
import Manapr from './char/manapr.jsx'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {height}=this.props;
    return (
      <div className={style.cmt}>
        <div className={style.hcomit}>
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>合同到期预警</p>
                    <div className={style.tubiao}>
                    <table  border="1" cellPadding="0" cellSpacing="0" >  
            <tbody>
  <tr><td>客户名称</td><td>合同编号</td><td>到期时间</td><td>类型</td><td >倒计时</td><td>欠费</td></tr>  
  <tr><td>吴友旺</td><td>0944456</td><td>20-06-18</td><td>制定</td><td>829</td><td>是</td></tr>  
  <tr><td>吴友旺</td><td>0944456</td><td>20-06-18</td><td>制定</td><td>829</td><td>是</td></tr>  
  <tr><td>吴友旺</td><td>0944456</td><td>20-06-18</td><td>制定</td><td>829</td><td>是</td></tr>  
  <tr><td>吴友旺</td><td>0944456</td><td>20-06-18</td><td>制定</td><td>829</td><td>是</td></tr>  
  </tbody>
</table> 
                    </div>
            </div>
        </div>
        <div className={style.hcomit02}>
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>园区出租比例</p>
                    <div className={style.tubiao}>
                        <div className={style.lyuan}></div>
                        <div className={style.lwenzi}>
                            <p className={style.p1}>以租房间</p>
                            <p className={style.p2}>0间-出租率：0%</p>
                        </div>
                        <div className={style.lyuan02}></div>
                        <div className={style.lwenzi02}>
                            <p className={style.p1}>以租房间</p>
                            <p className={style.p2}>0间-出租率：0%</p>
                        </div>
                        <div className={style.lyuan03}></div>
                        <div className={style.lwenzi03}>
                            <p className={style.p1}>以租房间</p>
                            <p className={style.p2}>0间-出租率：0%</p>
                        </div>
                        <div className={style.lyuan04}></div>
                        <div className={style.lwenzi04}>
                            <p className={style.p1}>以租房间</p>
                            <p className={style.p2}>0间-出租率：0%</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className={style.hcomit03} id='bck'>
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>物业收入情况</p>
                    <div className={style.tubiao}>
                      <Manapr height={height}/>
                    </div>
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
        let height=$('#bck').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.8;
        dispatch(actions.setVars('height',height));
        window.addEventListener("resize", function(){
            let height=$('#bck').css('height');
            let num=height.length-2;
            height=height.substr(0,num)*.8;
            dispatch(actions.setVars('height',height));
        });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
