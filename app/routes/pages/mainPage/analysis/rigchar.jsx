import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rigchar.scss'
import Rigch from './Echar/rigch.jsx'
import Tabck from './table/tbck.jsx' //表一
import Tabckwo from './table/tbcktwo.jsx' //表er

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {height}=this.props;
    return (
        <div className={style.comit}>
            <div className={style.rigmit}>
                <div className={style.rigbj}>
                  <div className={style.rigbjtu}></div>
                </div>
                    <div className={style.htu1}>
                                    <div className={style.hbk}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <p className={style.wenzi}>在园项目目前阶段</p>
                                    <div className={style.rigkbj}>
                                      <div className={style.rigktu}></div>
                                    </div>
                    </div>
            </div>

              <div className={style.rigmit02}>
                      <div className={style.htu1}>
                                      <div className={style.hbk}>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </div>
                                      <p className={style.wenzi}>年度项目入住情况</p>
                                      <div className={style.rigtable}>
                                      <Tabck/>
                                      </div>
                      </div>
              </div>

                <div className={style.rigmit03}>
                      <div className={style.htu1}>
                                      <div className={style.hbk}>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </div>
                                      <p className={style.wenzi}>项目孵化情况</p>
                                      <div className={style.rigtable}>
                                      <Tabckwo/>
                                      </div>
                      </div>
              </div>

              <div className={style.rigmit04} id='mi'>
                  <div className={style.rigbj}>
                      <div className={style.rigbjtu}></div>
                    </div>
                      <div className={style.htu1}>
                                      <div className={style.hbk}>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </div>
                                      <p className={style.wenzi}>项目技术水平</p>
                                      <div className={style.rigtable}>
                                      <Rigch height={height}/>
                                      <div className={style.ss}>共有22家</div>
                                      <div className={style.ssmi}>国际先进</div>
                                      <div className={style.ssmil}>国内先进</div>
                                      <div className={style.ssmil02}>国内先进</div>
                                      </div>
                                      <p className={style.weizi}>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
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
      let height=$('#mi').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.8;
      dispatch(actions.setVars('height',height));
      window.addEventListener("resize", function(){
          let height=$('#mi').css('height');
          let num=height.length-2;
          height=height.substr(0,num)*.8;
          dispatch(actions.setVars('height',height));
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
