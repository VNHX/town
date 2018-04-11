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
    let {hatchPro}=this.props;
    return (
        <div className={style.ss}>
            <table>
              <thead>
                <tr>
                  <th>企业名称</th>
                  <th>前期洽谈</th>
                  <th>项目建议书/项目申请</th>
                  <th>项目立项</th>
                  <th>项目选址</th>
                  <th>签订合同</th>
                </tr>
              </thead>
              <tbody>
                {
                  hatchPro&&hatchPro.map((value,key)=>{
                    return(
                      <tr key={key}>
                        <td>{value.name}</td>
                        <td>{value.milestionelist[0].value=='Y'&&'√'}</td>
                        <td>{value.milestionelist[1].value=='Y'&&'√'}</td>
                        <td>{value.milestionelist[2].value=='Y'&&'√'}</td>
                        <td>{value.milestionelist[3].value=='Y'&&'√'}</td>
                        <td>{value.milestionelist[4].value=='Y'&&'√'}</td>
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
