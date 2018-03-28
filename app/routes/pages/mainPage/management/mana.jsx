
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './mana.scss';
import Manapr from './char/manapr.jsx' ;//人才资源结构
// mapchar
import Mapchar from './char/mapchar.jsx'; //企业数量统计
import Mp from './char/mp_yuan1.jsx'; //知识产权_发明专利
import Mpto from './char/mp_yuan2.jsx'; //知识产权_实用新型
import Mpse from './char/mp_yuan3.jsx'; //知识产权_外观设计
import Mpsp from './char/mp_yuan4.jsx'; //知识产权_计算机软件
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
    let {heightChart1,heightPie}=this.props;
    console.log(heightChart1,'hx79')
    console.log(heightPie,'hx789')
    return (
      <div className={style.cmt}>
        <div className={style.hcomit} id='bck'>
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>企业数量统计</p>
                    <div className={style.tubiao}>
                    <Mapchar heightChart1={heightChart1}/>
                    </div>
            </div>
        </div>
        <div className={style.hcomit02} >
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>知识产权</p>
                    <div className={style.tubiao}>
                        <div className={style.lyuan}></div>
                        <div className={style.tu_biao}><Mp heightPie={heightPie}/></div>
                        <div className={style.lwenzi}>
                            <p className={style.p1}>发明专利</p>
                            <p className={style.p2}>20%</p>
                        </div>
                        <div className={style.lyuan02} id='bck2'></div>
                        <div className={style.tu_biao02}><Mpto heightPie={heightPie}/></div>
                        <div className={style.lwenzi02}>
                            <p className={style.p1}>实用新型</p>
                            <p className={style.p2}>84%</p>
                        </div>
                        <div className={style.lyuan03}></div>
                        <div className={style.tu_biao03}><Mpse heightPie={heightPie}/> </div>
                        <div className={style.lwenzi03}>
                            <p className={style.p1}>外观设计</p>
                            <p className={style.p2}>52%</p>
                        </div>
                        <div className={style.lyuan04}></div> 
                        <div className={style.tu_biao04}><Mpsp heightPie={heightPie}/></div>
                        <div className={style.lwenzi04}>
                            <p className={style.p1}>计算机软件</p>
                            <p className={style.p2}>90%</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className={style.hcomit03} >
            <div className={style.htu1}>
                 <div className={style.hbk}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={style.wenzi}>人才资源结构</p>
                    <div className={style.tubiao}>
                      <Manapr heightChart1={heightChart1}/>
                    </div>
            </div>
        </div>
      </div>
       
         
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart1:state.vars.heightChart1,
        heightPie:state.vars.heightPie,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#bck').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.9;
        console.log(height,'height')
        dispatch(actions.setVars('heightChart1',height));
  
        let heightPie=$('#bck2').css('height');
        let numPie=heightPie.length-2;
    console.log(heightPie,'hx78910')
        heightPie=heightPie.substr(0,numPie)*.9;
        dispatch(actions.setVars('heightPie',heightPie));
      },
    init: ()=> {
       
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
