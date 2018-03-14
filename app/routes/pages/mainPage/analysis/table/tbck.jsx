import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './tbck.scss'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
    return (
        <div className={style.ss}>
            <table  border="1" cellPadding="0" cellSpacing="0" >  
            <tbody>
  <tr>  
    <td>年份</td>  
    <td>电子类</td>  
    <td>动漫产业</td>  
    <td>生物生化</td>  
    <td >高新技术</td>
    <td>人工智能</td>  
    <td>装备产业</td>  
    <td>累计</td>  
    <td>同比</td>    
  </tr>  
  <tr>  
    <td>2016</td>  
    <td>13</td>  
    <td>0</td>  
    <td>0</td>
    <td>0</td>  
    <td>0</td>
    <td>0</td>   
    <td>13</td>  
    <td>1300.00%</td>
  </tr>  
  <tr>  
  <td>2017</td>  
    <td>2</td>  
    <td>0</td>  
    <td>0</td>
    <td>0</td>  
    <td>0</td>
    <td>0</td>   
    <td>4</td>  
    <td>0.00%</td>  
  </tr>  
  <tr>  
  <td>2018</td>  
    <td>0</td>  
    <td>0</td>  
    <td>0</td>
    <td>0</td>  
    <td>0</td>
    <td>0</td>   
    <td>0</td>  
    <td>-100.00%</td>  
  </tr>  
  <tr>  
    <td>合计</td>  
    <td>15</td>  
    <td>0</td>  
    <td>0</td>
    <td>0</td>  
    <td>0</td>
    <td>0</td> 
    <td>17</td>
    <td></td>      
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
