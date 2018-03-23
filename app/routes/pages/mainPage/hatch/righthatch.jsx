import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './righthatch.scss'
import Rigch from  './chart/rigch'  //右边2
import Rigcd from  './chart/rigcd'//行业类型分析
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {height}=this.props;
    return (
        <div className={style.comit}>
            <div className={style.rigfst} id='kuk'>
            <div className={style.rigfstb}>
                    <div className={style.hxbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>行业类型分析</p>
                        <div className={style.tubiao}>
                          <Rigcd height={height}/>
                        </div>
                        <div className={style.rigtk}>
                            <div className={style.rigtu}>
                                <div className={style.rightu}></div>
                            </div>
                            <div className={style.rigtu2}>
                                  <div className={style.rightu2}></div>
                            </div>
                            <div className={style.wenzi2}>
                            <p>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
                            </div>
                        </div>
                </div>
            </div>

             <div className={style.rigtwo}>
                <div className={style.rigfstb}>
                    <div className={style.hxbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>近俩年意向项目情况</p>
                    <div className={}></div>
                </div>
            </div>

                 <div className={style.riglef} id='kuk'>
                    <div className={style.riglefb}>
                        <div className={style.hxbk}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    <p className={style.wenzi}>意向来源分析</p>
                        <div className={style.tubioa02}>
                             <Rigch height={height}/>
                        </div>
                </div>
            </div>

             <div className={style.rigleftop} id='kuk'>
                    <div className={style.rigleftopb}>
                        <div className={style.hxbk}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    <p className={style.wenzi}>重点项目</p>
                        <div className={style.tubiao}>
                            <Rigcd height={height}/>
                        </div>
                            <div className={style.wenzi2}>
                            <p>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
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
      let height=$('#kuk').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.8;
      dispatch(actions.setVars('height',height));
      window.addEventListener("resize", function(){
          let height=$('#kuk').css('height');
          let num=height.length-2;
          height=height.substr(0,num)*.8;
          dispatch(actions.setVars('height',height));
      });     
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
