import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './table.scss';
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
                <th>项目名称</th><th>累计</th>
                <th>上年度</th><th>本年度</th>
                <th>同比</th>
          </tr>
          <tr>
              <td>入驻申请</td><td>4</td>
              <td>4</td><td>0</td>
              <td>0.0%</td>
          </tr>
          <tr >
              <td>资格审核</td><td>4</td>
              <td>4</td><td>0</td>
              <td>0.0%</td>
          </tr>
          <tr>
              <td>安排看房</td><td>4</td>
              <td>4</td><td>0</td>
              <td>0.0%</td>
          </tr>
          <tr>
              <td>入驻申批</td><td>4</td>
              <td>4</td><td>0</td>
              <td>0.0%</td>
          </tr>
          <tr>
              <td>签订合同</td><td>4</td>
              <td>4</td><td>0</td>
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
