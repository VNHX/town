import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './righthatch.scss'
import Rigch from  './chart/rigch'  //右边2
import Rigcd from  './chart/rigcd'//右边1
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
                    <p className={style.wenzi}>企业性质</p>
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
                    <p className={style.wenzi}>行业分布情况</p>
                        <div className={style.tuwenzi}>
                          <div className={style.tuwenzibj}></div>
                                 <div className={style.tuwenz}>
                                  <p>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
                                 </div>
                        </div>
                        <div className={style.yuan}></div>
                        <div className={style.yuanrig}>
                          <div className={style.kmit}>8家-占比11%</div>
                              <div className={style.kmit01}>产值：</div>
                                <div className={style.kmit02}>34,501,011</div>
                                      <p className={style.kmit03}>万元-</p>
                                        <span className={style.kmit04}>占比86%</span>
                                <div className={style.kmit05}>税收：</div>
                                      <div className={style.kmit06}>20,501,011</div>
                                          <p className={style.kmit07}>万元-</p>
                                              <span className={style.kmit08}>占比86%</span>
                        </div>
                        <div className={style.yuan2}></div>
                            <div className={style.yuanrig2}>
                              <div className={style.kmit}>8家-占比11%</div>
                                  <div className={style.kmit01}>产值：</div>
                                    <div className={style.kmit02}>34,501,011</div>
                                          <p className={style.kmit03}>万元-</p>
                                            <span className={style.kmit04}>占比86%</span>
                                    <div className={style.kmit05}>税收：</div>
                                          <div className={style.kmit06}>20,501,011</div>
                                              <p className={style.kmit07}>万元-</p>
                                                  <span className={style.kmit08}>占比86%</span>
                        </div>
                       
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
                    <p className={style.wenzi}>企业占用面积情况</p>
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
                    <p className={style.wenzi}>资质情况</p>
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
