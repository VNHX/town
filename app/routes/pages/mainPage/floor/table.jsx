//楼层信息
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var {browserHistory} = require('react-router');
import css from './table.scss';

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {}=this.props;
    return (
    	<div className={css.table}>
            <table>
                <thead>
                    <tr>
                        <th style={{width:'50%'}}>企业名称</th>
                        <th style={{width:'20%'}}>员工人数</th>
                        <th style={{width:'30%'}}>注册资金</th>
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td style={{width:'50%'}}>1</td>
                        <td style={{width:'20%'}}>2</td>
                        <td style={{width:'30%'}}>3</td>
                    </tr>
                    <tr>
                        <td style={{width:'50%'}}>1</td>
                        <td style={{width:'20%'}}>2</td>
                        <td style={{width:'30%'}}>3</td>
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
      
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
