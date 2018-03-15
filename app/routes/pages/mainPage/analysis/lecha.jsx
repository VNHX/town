import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './lecha.scss';
import  Leftchrt from './Echar/lmi.jsx'  //注册资本情况
import Lmicha from './Echar/Lmicha.jsx'  //在圆项目分布情况
import Lcot from './Echar/lcot.jsx'//项目考核、成长情况
// import Jidu from './Echar/jindu.jsx' //累计项目总数
import Ttranfrom from './tranfrom.jsx' //进度条
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {height}=this.props;
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
                            <p className={style.wenzi}>注册资本情况</p>
                                <div className={style.tubiao}>
                                <Leftchrt height={height}/>
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
                            <p className={style.wenzi}>在圆项目分布情况</p>
                                <div className={style.tubiao}>
                                    <Lmicha height={height}/>
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
                            <p className={style.wenzi}>项目考核、成长情况</p>
                                <div className={style.tubiao}></div>
                                <div className={style.tubiao02}>
                                        <Lcot height={height}/>
                                </div>
                                <div className={style.wenkao}>
                                    <div className={style.wetu}>
                                        <div className={style.tu}></div>
                                    </div>
                                </div>
                                    <div className={style.zwen}>
                                        <div className={style.zwen01}>
                                            <p className={style.zwex}>优秀项目：</p>
                                            <p className={style.zwj}>3家</p>
                                            <p className={style.zwg}>-合格项目：</p>
                                            <p className={style.zwsj}>3家</p>
                                        </div>
                                        <div className={style.zwen02}>
                                            <p className={style.zwebu}>不合格合格项目:</p>
                                            <p className={style.zwejia}>3家</p>
                                        </div>
                                    </div>
                                    <div className={style.tubiao2}></div>
                                <div className={style.tubiao03}>
                                        <Lcot height={height}/>
                                </div>
                                <div className={style.wenkao1}>
                                    <div className={style.wetu}>
                                        <div className={style.tu}></div>
                                    </div>
                                </div>
                                    <div className={style.zwen01}>
                                        <div className={style.zwen01}>
                                            <p className={style.zwex}>优秀项目：</p>
                                            <p className={style.zwj}>3家</p>
                                            <p className={style.zwg}>-合格项目：</p>
                                            <p className={style.zwsj}>3家</p>
                                        </div>
                                        <div className={style.zwen02}>
                                            <p className={style.zwebu}>不合格合格项目:</p>
                                            <p className={style.zwejia}>3家</p>
                                        </div>
                                    </div>
                                
                        </div>
              </div>

              <div className={style.cmi}>
                    <div className={style.cmou}></div>
                        <div className={style.comiwen}>o 累计项目总数</div>
                        <div className={style.comiwen2}>23 <p>个</p></div>
                        <Ttranfrom />
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
        let height=$('#meini').css('height');
        let num=height.length-2;
        height=height.substr(0,num)*.8;
        dispatch(actions.setVars('height',height));
        window.addEventListener("resize", function(){
            let height=$('#meini').css('height');
            let num=height.length-2;
            height=height.substr(0,num)*.8;
            dispatch(actions.setVars('height',height));
        });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
