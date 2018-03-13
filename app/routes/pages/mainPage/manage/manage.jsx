//工程项目管理看板
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import css from './manage.scss';

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {params}=this.props;
    return (
      <div className={css.manageBox}>

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
