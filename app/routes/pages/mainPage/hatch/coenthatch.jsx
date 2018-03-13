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
                  <div className={style.leftkuang1}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>0</span>
                          <span>今年入园</span>
                          <span>同比下降100%</span>
                          <span></span>
                        </div>
                  </div>
                  <div className={style.leftkuang2}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>0</span>
                          <span>今年退园</span>
                          <span>同比下降100%</span>
                          <span></span>
                        </div>
                  </div>
                  <div className={style.leftkuang3}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>70</span>
                          <span>在园企业数</span>
                        </div>
                  </div>
                  <div className={style.leftkuang4}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>21</span>
                          <span>规上企业数</span>
                        </div>
                  </div>  
                      <div className={style.rightkuang1}>
                          <div className={style.rightkuangtu}></div>
                            <div  className={style.kuangwenzi}>
                              <span>18</span>
                              <span>高新技术企业数</span>
                            </div>
                      </div> 
                      <div className={style.rightkuang2}>
                          <div className={style.rightkuangtu}></div>
                            <div  className={style.kuangwenzi}>
                              <span>3</span>
                              <span>线上企业数</span>
                            </div>
                      </div> 
                      <div className={style.rightquan1}>
                          <div className={style.rightquantu}></div>
                            <div  className={style.quanwenzi}>
                              <span>创业版</span>
                            </div>
                      </div> 
                      <div className={style.rightquan2}>
                          <div className={style.rightquantu}></div>
                            <div  className={style.quanwenzi}>
                              <span>主板</span>
                            </div>
                      </div> 
                      <div className={style.rightquan3}>
                          <div className={style.rightquantu}></div>
                            <div  className={style.quanwenzi}>
                              <span>第三版</span>
                            </div>
                      </div> 
                      <div className={style.rightquan4}>
                          <div className={style.rightquantu}></div>
                            <div  className={style.quanwenzi}>
                              <span>其他</span>
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
