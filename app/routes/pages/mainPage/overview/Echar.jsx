import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import Leftechar from './Echares/leftechar.jsx';  //签约项目来源分布  图表
import style from './Echar.scss';
// import Leftchar from './Echares/leftchar.jsx'   //洽谈中项目分布情况  图表--磁极图
import Leftar from './Echares/leftar.jsx'  //洽谈中项目分布情况  图表--柱状图
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
let {heightChart6}=this.props;
    return (
    <div className={style.hxEchar}>
        <div className={style.hxEcha} id="char">
            <p className={style.xm}>签约项目来源分布</p>
                <div className={style.hxEchad}>
                    <span></span> 
                    <span></span> 
                    <span></span> 
                    <span></span>
                </div>
                    <div className={style.xo}>
                        <Leftechar heightChart6={heightChart6} />
                    </div>
                  
        </div>
            <div className={style.hxEcha02}>
                    <div className={style.hxEchad}>
                        <span></span> 
                        <span></span> 
                        <span></span> 
                        <span></span>
                    </div>
                        <p className={style.xm}>洽谈中项目分布情况</p>
                              <div className={style.xxx}> 
                                 <div className={style.src}></div>
                              </div>
                                  <div className={style.xmn}>
                                         <Leftar heightChart6={heightChart6}/>
                                  </div>
                          
            </div>
    </div>
  
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart6:state.vars.heightChart6,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#char').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.9;
        dispatch(actions.setVars('heightChart6',height));
      },
    init: ()=> {
   
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
