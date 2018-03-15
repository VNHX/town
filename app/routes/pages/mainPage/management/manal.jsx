
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './manal.scss'
import Manapl from './char/manapl.jsx'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {height}=this.props;
    return (
      <div className={style.cmt}>
            <div className={style.hcomit} id='min'>
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>物业租债情况</p>
                    <div className={style.tubiao}>
                        <Manapl height={height}/>
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
                <p className={style.wenzi}>物业租债情况</p>
                    <div className={style.tubiao}>
                    <table  border="1" cellPadding="0" cellSpacing="0" >  
            <tbody>
  <tr><td>类型</td><td>1月</td><td>2月</td><td>3月</td><td >4月</td><td>5月</td><td>6月</td><td>7月</td><td>8月</td><td>9月</td><td>10月</td><td>11月</td><td>12月</td><td>合计</td></tr>  
  <tr><td>空置</td><td>13</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>13</td><td>1300.000%</td><td>1300.000%</td><td>1300.000%</td><td>1300.000%</td><td>1300.000%</td><td>1300.000%</td></tr>  
  <tr><td>以租</td><td>12</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>4</td><td>00.00%</td><td>00.00%</td><td>00.00%</td><td>00.00%</td><td>00.00%</td><td>00.00%</td></tr>  
  <tr><td>预定</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td></tr>  
  <tr><td>一号楼</td><td>15</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>17</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td><td>-100.00%</td></tr>  
  </tbody>
</table> 
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
        let height=$('#min').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.8;
        dispatch(actions.setVars('height',height));
        window.addEventListener("resize", function(){
            let height=$('#min').css('height');
            let num=height.length-2;
            height=height.substr(0,num)*.8;
            dispatch(actions.setVars('height',height));
        });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
