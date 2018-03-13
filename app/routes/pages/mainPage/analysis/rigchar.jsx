import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rigchar.scss'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
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
                                      <div className={style.rigtable}></div>
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
                                      <div className={style.rigtable}></div>
                      </div>
              </div>

              <div className={style.rigmit04}>
                      <div className={style.htu1}>
                                      <div className={style.hbk}>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                      </div>
                                      <p className={style.wenzi}>项目技术水平</p>
                                      <div className={style.rigtable}></div>
                      </div>
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
     
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
