import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './analysis.scss'
import Lecha from './lecha.jsx' //左边
import Conchar from './conchar.jsx' //zhong
import Rigchar from './rigchar.jsx' //右边

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
    return (
        <div className={style.comit}>
          <Lecha/>
          <Conchar/>
          <Rigchar/>
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
