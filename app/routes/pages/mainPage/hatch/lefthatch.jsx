import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './lefthatch.scss'
import Leftchart from './chart/leftchart' //年度签约项目统计
import Ajax from "../functionCom/myAjax.js";
let myAjax=Ajax.myAjax;
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
    let {heightChart5,columnDataHa,totalData}=this.props;
    return (
        <div className={style.comit}>
            <div className={style.hxmit}>
              <div className={style.hxbn}></div>
            </div>
              <div className={style.hxcomit} id='hxd'>
                <div className={style.hxtu1}>
                    <div className={style.hxbk}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={style.wenzi}>年度签约项目统计</p>
                        <div className={style.tubiao}>
                             <Leftchart columnData={columnDataHa} heightChart5={heightChart5}/>
                         </div>
                </div>
              </div>
              <div className={style.leftkuang1}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>{totalData&&totalData.monthIntention}</span>
                          <span>本月意向</span>
                          <span>同比下降0%</span>
                          <span></span>
                        </div>
                  </div>
                  <div className={style.leftkuang2}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>{totalData&&totalData.yearIntention}</span>
                          <span>本年意向</span>
                          <span>同比下降0%</span>
                          <span></span>
                        </div>
                  </div>
                  <div className={style.leftkuang3}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>{totalData&&totalData.monthSign}</span>
                          <span>本月签约</span>
                        </div>
                  </div>
                  <div className={style.leftkuang4}>
                      <div className={style.leftkuangtu}></div>
                        <div  className={style.kuangwenzi}>
                          <span>{totalData&&totalData.yearSign}</span>
                          <span>本年签约</span>
                        </div>
                  </div>  
        </div>
                  
    )
  }
});
const mapStateToProps = (state) => {
    return {
      heightChart5:state.vars.heightChart5,
      columnDataHa:state.vars.columnDataHa
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
      let height=$('#hxd').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.9;
      dispatch(actions.setVars('heightChart5',height));
    },
    init: ()=> {
        //年度签约项目  
        let param_json1={
            "query":{
                "target":"clientImportantProjectInf",
                "function":"getCyfbczqkData",
            }
        };
        let data1={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json1),
            requireType: 'get',
            async: true,
        };
        myAjax(data1,success1);       
        function success1(data){
            console.log('年度签约项目',data)
            dispatch(actions.setVars('columnDataHa',data.query.detail));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
