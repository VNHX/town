import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './coenthatch.scss'

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    return (
        <div className={style.comit}>
            <div className={style.cao}>
              <div className={style.bioati}>
                <div className={style.biaotu}></div>
              </div>
              <div className={style.zhongtu}>
                  <div className={style.zhongkung}>
                      <div className={style.kuangtu}></div>
                        <div className={style.kuangtu1}>
                            <div className={style.zhongdatu}></div>
                        </div>
                  </div>
                  {/* <div className={style.leftkuang1}>
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
                  </div>   */}
                      <div className={style.rightkuang1}>
                          <div className={style.rightkuangtu}></div>
                            <div  className={style.kuangwenzi}>
                              <span>1</span>
                              <span>正在跟进</span>
                            </div>
                      </div> 
                      <div className={style.rightkuang2}>
                          <div className={style.rightkuangtu}></div>
                            <div  className={style.kuangwenzi}>
                              <span>0</span>
                              <span>关闭项目</span>
                            </div>
                      </div> 
                      <div className={style.rightquan1}>
                          <div className={style.rightquantu}></div>
                            <div  className={style.quanwenzi}>
                              <span>项目总览</span>
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
      
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
      toOverview: ()=>{
      }  
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
