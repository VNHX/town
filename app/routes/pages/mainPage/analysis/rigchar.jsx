import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './rigchar.scss'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
    return (
        <div className={style.comit}>
         qweqw
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
