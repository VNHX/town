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
    let {}=this.props;
    return (
        <div className={style.ss}>
          <table >
          <tbody>
          <tr>
              <th>部门名称</th><th>累计项目</th>
              <th>累计签约</th><th>签约比例</th>
              <th>本年项目</th><th>本年签约</th>
              <th>本年签约比例</th>
          </tr>
          <tr>
              <td>办公室</td><td>4</td>
              <td>2</td><td>40.00%</td>
              <td>1</td><td>1</td>
              <td>0.0%</td>
          </tr>
          <tr >
              <td>产业管理服务中心</td><td>4</td>
              <td>2</td><td>40.00%</td>
              <td>1</td><td>1</td>
              <td>0.0%</td>
          </tr>
          <tr>
              <td>创新服务中心</td><td>4</td>
              <td>2</td><td>40.00%</td>
              <td>1</td><td>1</td>
              <td>0.0%</td>
          </tr>
          <tr>
              <td>项目招商服务中心</td><td>4</td>
              <td>2</td><td>40.00%</td>
              <td>1</td><td>1</td>
              <td>0.0%</td>
          </tr>
          <tr>
              <td>智慧圆运营管理平台</td><td>4</td>
              <td>2</td><td>40.00%</td>
              <td>1</td><td>1</td>
              <td>0.0%</td>
          </tr>
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
