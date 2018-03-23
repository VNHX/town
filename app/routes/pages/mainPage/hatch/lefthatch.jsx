import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './lefthatch.scss'
import Leftchart from './chart/leftchart' //在园时间情况
// import Leftcha from './chart/leftcha' //注册资金情况
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {height}=this.props;
    return (
        <div className={style.comit}>
            <div className={style.hxmit}>
              <div className={style.hxbn}></div>
            </div>
              <div className={style.hxcomit} id='hxd'>
                <div className={style.hxtu1}>
                    <div className={style.hxbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>年度签约项目统计</p>
                        <div className={style.tubiao}>
                             <Leftchart height={height}/>
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
      let height=$('#hxd').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.8;
      dispatch(actions.setVars('height',height));
      window.addEventListener("resize", function(){
          let height=$('#hxd').css('height');
          let num=height.length-2;
          height=height.substr(0,num)*.8;
          dispatch(actions.setVars('height',height));
      });     
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
