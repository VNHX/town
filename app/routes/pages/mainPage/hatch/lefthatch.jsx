import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './lefthatch.scss'
import Leftchart from './chart/leftchart' //年度签约项目统计
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
    window.addEventListener("resize", this.props.chartHeight);
  },
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.chartHeight);
  },

  render() {
    let {heightChart5}=this.props;
    console.log(heightChart5)
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
                             <Leftchart heightChart5={heightChart5}/>
                         </div>
                </div>
              </div>
              <div className={style.leftkuang1}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>0</span>
                          <span>本月意向</span>
                          <span>同比下降100%</span>
                          <span></span>
                        </div>
                  </div>
                  <div className={style.leftkuang2}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>1</span>
                          <span>本年意向</span>
                          <span>同比下降100%</span>
                          <span></span>
                        </div>
                  </div>
                  <div className={style.leftkuang3}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>20</span>
                          <span>本月签约</span>
                        </div>
                  </div>
                  <div className={style.leftkuang4}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>21</span>
                          <span>本年签约</span>
                        </div>
                  </div>  
        </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      heightChart5:state.vars.heightChart5
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
      let height=$('#hxd').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.9;
      dispatch(actions.setVars('heightChart5',height));
    },
    init: ()=> {
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
