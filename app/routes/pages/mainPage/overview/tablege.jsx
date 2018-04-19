import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './tablege.scss';
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {overSevenData}=this.props;
    return (
        <div className={style.ss}>
          <table >
            <thead>
              <tr>
                  <th>部门名称</th><th>累计项目</th>
                  <th>累计签约</th><th>签约比例</th>
                  <th>本年项目</th><th>本年签约</th>
                  <th>本年签约比例</th>
              </tr>            
            </thead>
            <tbody>
            {
              overSevenData&&overSevenData.map((value,key)=>{
                return(
                  <tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.ljxm}</td>
                    <td>{value.ljqy}</td>
                    <td>{value.qybl}</td>
                    <td>{value.bnxm}</td>
                    <td>{value.bnqy}</td>
                    <td>{value.qybl}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
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
