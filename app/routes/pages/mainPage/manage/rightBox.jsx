//工程项目管理看板
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import css from './rightBox.scss';
import Ajax from "../functionCom/myAjax.js";
let myAjax=Ajax.myAjax;
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  componentWillUnmount() {
    
  },
  render() {
    let {tableRight}=this.props;
    return (
        <div className={css.rightCom}>
          <div className={css.textBox}>
            <div className={css.header}>
              <span className={css.nameBox}>重点项目看板</span>
              <span className={css.and}></span>
            </div>
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <table>
              <thead>
                <tr>
                  <td style={{width:'7%'}}>项目名称</td>
                  <td style={{width:'5%'}}>负责人</td>
                  <td style={{width:'7%'}}>可研编制</td>
                  <td style={{width:'18%'}}>发改委批复（备案、核准）文件</td>
                  <td style={{width:'4%'}}>节能</td>
                  <td style={{width:'4%'}}>选址</td>
                  <td style={{width:'4%'}}>环评</td>
                  <td style={{width:'6%'}}>土地预审</td>
                  <td style={{width:'9%'}}>用地规划许可证</td>
                  <td style={{width:'7%'}}>用地批准书</td>
                  <td style={{width:'4%'}}>设计</td>
                  <td style={{width:'9%'}}>工程规划许可证</td>
                  <td style={{width:'8%'}}>施工监理招标</td>
                  <td style={{width:'8%'}}>质量监督手续</td>
                </tr>
              </thead>
              <tbody>
                {
                  tableRight&&tableRight.map((value,key)=>{
                    return(
                      <tr key={key}>
                        <th style={{width:'7%'}}>{value.project_name}</th>
                        <th style={{width:'5%'}}>{value.u_name}</th>
                        <th style={{width:'7%'}}>{value.plan_1}</th>
                        <th style={{width:'18%'}}>{value.plan_2}</th>
                        <th style={{width:'4%'}}>{value.plan_3}</th>
                        <th style={{width:'4%'}}>选址</th>
                        <th style={{width:'4%'}}>环评</th>
                        <th style={{width:'6%'}}>土地预审</th>
                        <th style={{width:'9%'}}>用地规划许可证</th>
                        <th style={{width:'7%'}}>用地批准书</th>
                        <th style={{width:'4%'}}>设计</th>
                        <th style={{width:'9%'}}>工程规划许可证</th>
                        <th style={{width:'8%'}}>施工监理招标</th>
                        <th style={{width:'8%'}}>质量监督手续</th>
                      </tr>
                    )
                  })
                }                     
              </tbody>
            </table>
          </div>          
        </div>    
    )
  }
});
const mapStateToProps = (state) => {
    return {
        tableRight:state.vars.tableRight         
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
      let param_json={
        "query":{
            "target":"clientProjectInf",
            "function":"getListDatas",
        }
      };
      let data={
        url: 'ClientGetJsonDatas',
        requireData: "param_json="+JSON.stringify(param_json),
        requireType: 'get',
        async: true,
      };
      myAjax(data,success);       
      function success(data){
          console.log('tableRight',data);
          dispatch(actions.setVars('tableRight',data.query.detail.list));
      };       
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
