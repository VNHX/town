import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './conchar.scss'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
    return (
        <div className={style.comit}>
              <div className={style.hxmit}>
                <div className={style.hxmittu}></div>
              </div>
              <div className={style.hxhumi}>
                  <div className={style.hxztu}>
                      <div className={style.hxbjk}></div>
                  </div>
                  <div className={style.hxhumi02}>
                      <div className={style.hxbj}></div>
                  </div>
              </div>
             
             
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
