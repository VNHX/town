import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './tbcfk.scss'
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
  <td></td> 
  <td></td> 
  <td></td> 
    <td>毕业</td>
    <td></td>    
    <td>加速</td>
    <td></td>
    <td >迁出</td> 
    <td></td>   
    <td>淘汰</td>  
    <td></td>  
  </tr>  
  <tr>  
    <td>年份</td>  
    <td>苗圃</td>  
    <td>孵化</td>  
    <td>数量</td>
    <td>同比</td>  
    <td>数量</td>
    <td>同比</td>     
    <td>数量</td>
    <td>同比</td>
    <td>数量</td>
    <td>同比</td>  
       
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
    <td>0.00%</td>  
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
    <td>0.00%</td>  
    <td>0.00%</td>    
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
    <td>0.00%</td>  
    <td>0.00%</td>  
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
