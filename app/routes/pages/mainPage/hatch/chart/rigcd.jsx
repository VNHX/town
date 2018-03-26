import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rigcd.scss';
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {}=this.props;
    return (
        <div className={style.ss}>
  <table>
              <thead>
                <tr>
                  <th colSpan="2">前期洽谈</th><th colSpan="2">项目建议书/项目申请</th>
                  <th colSpan="2">项目立项</th><th colSpan="2">项目选址</th>
                  <th colSpan="2">签订合同</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>年份</th><th>企业名称</th>
                  <th>数量</th><th>同比</th>
                  <th>数量</th><th>同比</th>
                  <th>数量</th><th>同比</th>
                  <th>数量</th><th>同比</th>
                </tr>
                <tr>
                  <th>2016</th><th>珠海汽车工业(集团)有限公司</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                </tr>
                <tr>
                  <th>2017</th><th>珠海汽车工业(集团)有限公司</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                </tr>
                <tr>
                  <th>2018</th><th>珠海汽车工业(集团)有限公司</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                  <th>1</th><th>100.00%</th>
                </tr>
                <tr>
                  <th>合计</th><th>身子罗灿科技有限公司</th>
                  <th>0</th><th></th>
                  <th>0</th><th></th>
                  <th>0</th><th></th>
                  <th>0</th><th></th>
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
