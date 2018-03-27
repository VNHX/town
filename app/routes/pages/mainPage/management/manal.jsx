
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './manal.scss'
import Manapl from './char/manapl.jsx' //上规上限分类统计
import Map from './char/map.jsx' //入驻年限
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
                <p className={style.wenzi}>创新能力</p>
                    <div className={style.tubiao}>
                        <div className={style.t_yuan01}>
                        <span>国家高新技术企业</span>
                        <span>3424家</span>
                        </div>
                        <div className={style.t_yuan02}>
                        <span>浙江高新技术企业</span>
                        <span>3424家</span>
                        </div>
                        <div className={style.t_yuan03}>
                        <span>市级以上研发中心</span>
                        <span>3424家</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className={style.hcomit03} id='min'>
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p  className={style.wenzi01}>上限</p>
                <p  className={style.wenzi02}>下限</p>
                <p className={style.wenzi}>上规上限分类统计</p>
                    <div className={style.tubiao}>
                       <span className={style.san_jia}>合计:3家</span>
                       <div className={style.wen_zi}>
                       <p>1-10月份，全市新登记民营市场主体19。38万户,咱全市新登记市场主体的98.7%,其中民营企业7.78万户。1-10月份,全市民间投资8993.92亿元,增长2.23%,咱全市投资的64.7%。其中,制造业和房地产投资占民间投资的比重分别为34.1%和17.9%。民营企业外贸出口591.63亿元,下降5.3%。</p>
                       </div>
                       <div className={style.tu_biao}><Manapl height={height} /></div>
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
                <p className={style.wenzi}>入驻年限</p>
                    <div className={style.tubiao}>
                        <div className={style.tu_biao}><Map  height={height} /></div>
                        <div className={style.wen_kuang}>
                        <span>企业数量:</span> 
                        <span>14家</span>
                        <span>企业数量:</span> 
                        <span>14家</span>
                        <span>I/信息传输和软件</span>
                        <span>I/信息传输和软件</span>
                        <span>技术产值:</span>
                        <span>0万元</span>
                        <span>技术产值:</span>
                        <span>0万元</span>
                        </div>
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
