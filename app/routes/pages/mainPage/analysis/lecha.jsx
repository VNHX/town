import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './lecha.scss';
import  Leftchrt from './Echar/lmi.jsx'  //小镇分布及产值情况
import Lmicha from './Echar/Lmicha.jsx'  //小镇收入情况
import Lcot from './Echar/lcot.jsx'//企业纳税前10
// import Jidu from './Echar/jindu.jsx' //累计项目总数
import Ttranfrom from './tranfrom.jsx' //o产业总览
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
    let {heightChart3}=this.props;
    return (
        <div className={style.comit}>
                 <div className={style.hcomit} id='meini'>
                        <div className={style.htu1}>
                            <div className={style.hbk}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p className={style.wenzi}>小镇企业分布及产值情况</p>
                                <div className={style.tubiao}>
                                <Leftchrt heightChart3={heightChart3}/>
                                </div>
                        </div>
              </div>

               <div className={style.hcomit2} >
                        <div className={style.htu1}>
                            <div className={style.hbk}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p className={style.wenzi}>小镇税收入情况</p>
                                <div className={style.tubiao}>
                                    <Lmicha heightChart3={heightChart3}/>
                                </div>
                        </div>
              </div>

              
              <div className={style.hcomit3} >
                        <div className={style.htu1}>
                            <div className={style.hbk}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p className={style.wenzi}>企业纳税前10</p>
                        </div>
                        <div className={style.kuang}>
                        <p className={style.p1}>河南至真食品有限公司</p>
                        <p className={style.p2}>444,666,00元</p>
                        </div>
                        <div className={style.kuang}>
                        <p className={style.p1}>河南至真食品有限公司</p>
                        <p className={style.p2}>444,666,00元</p>
                        </div>
                        <div className={style.kuang}>
                        <p className={style.p1}>河南至真食品有限公司</p>
                        <p className={style.p2}>444,666,00元</p>
                        </div>
                        <div className={style.kuang}>
                        <p className={style.p1}>河南至真食品有限公司</p>
                        <p className={style.p2}>444,666,00元</p>
                        </div>
                        <div className={style.kuang}>
                        <p className={style.p1}>河南至真食品有限公司</p>
                        <p className={style.p2}>444,666,00元</p>
                        </div>
                        <div className={style.kuang}>
                        <p className={style.p1}>河南至真食品有限公司</p>
                        <p className={style.p2}>444,666,00元</p>
                        </div>
                       
              </div>

              <div className={style.cmi}>
                    <div className={style.cmou}></div>
                        <div className={style.comiwen}>o产业总览</div>
                        <div className={style.comiwen2}>183<p>家</p></div>
                        <Ttranfrom />
              </div>
        </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart3:state.vars.heightChart3,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
        let height=$('#meini').css('height');
        let num=height.length-2;
        console.log(num,'123')
        console.log(height,'456')
        height=height.substr(0,num)*.9;
        dispatch(actions.setVars('heightChart3',height));

        // let heightPie=$('#ko1').css('height');
        // let numPie=heightPie.length-2;
        // heightPie=heightPie.substr(0,numPie)*.9;
        // dispatch(actions.setVars('heightPie',heightPie));
      },
    init: ()=> {
        // let height=$('#meini').css('height');
        // let num=height.length-2;
        // height=height.substr(0,num)*.8;
        // dispatch(actions.setVars('height',height));
        // window.addEventListener("resize", function(){
        //     let height=$('#meini').css('height');
        //     let num=height.length-2;
        //     height=height.substr(0,num)*.8;
        //     dispatch(actions.setVars('height',height));
        // });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
