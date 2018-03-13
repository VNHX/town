import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './lecha.scss';
// import  Leftchrt from './Echar/lmi.jsx'
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
                                </div>
                        </div>
              </div>

               <div className={style.hcomit2} id='meini'>
                        <div className={style.htu1}>
                            <div className={style.hbk}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p className={style.wenzi}>在圆项目分布情况</p>
                                <div className={style.tubiao}>
                                </div>
                        </div>
              </div>

              
              <div className={style.hcomit3} id='meini'>
                        <div className={style.htu1}>
                            <div className={style.hbk}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p className={style.wenzi}>项目考核、成长情况</p>
                                <div className={style.tubiao}>
                                </div>
                        </div>
              </div>

              <div className={style.cmi}>
                    <div className={style.cmou}></div>
                        <div className={style.comiwen}>o 累计项目总数</div>
                        <div className={style.comiwen2}>23 <p>个</p></div>
              </div>
        </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      
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
