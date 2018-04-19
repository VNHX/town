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
    let {floorFourData}=this.props;
    return (
    	<div className={css.table}>
            <table>
                <thead>
                    <tr>
                        <th style={{width:'65%'}}>企业名称</th>
                        <th style={{width:'15%'}}>员工人数</th>
                        <th style={{width:'20%'}}>注册资金</th>
                    </tr>                    
                </thead>
                <tbody>
                {
                    floorFourData&&floorFourData.map((value,key)=>{
                        return(
                            <tr key={key}>
                                <td style={{width:'65%'}}>{value.name}</td>
                                <td style={{width:'15%'}}>{value.staff}</td>
                                <td style={{width:'20%'}}>{value.money}</td>
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
      
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
