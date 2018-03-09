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
        {/* <div className={style.sd}>
        <p>项目名称</p>
        <p>累计</p>
        <p>上年年度</p>
        <p>本年度</p>
        <p>同比</p>
        </div>
        <div className={style.sd}>
        <p>入住申请</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>资格审核</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>安排看房</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>入住审批</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div>
        <div className={style.sd}>
        <p>签合同</p>
        <span>4</span>
        <span>4</span>
        <span>0</span>
        <span>0.00%</span>
        </div> */}
 <table >
<tr>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
</tr>
<tr>
<td>Alfreds Futterkiste</td>
<td>Maria Anders</td>
<td>Germany</td>
</tr>
<tr >
<td>Ernst Handel</td>
<td>Roland Mendel</td>
<td>Austria</td>
</tr>
<tr>
<td>Island Trading</td>
<td>Helen Bennett</td>
<td>UK</td>
</tr>
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
