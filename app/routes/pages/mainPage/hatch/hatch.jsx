import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './hatch.scss'
import Lefthatch from './lefthatch.jsx' //左边
import Coenthatch from './coenthatch.jsx' //中间coenthatch
import Righthatch from './righthatch.jsx' //右边
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  showNav: ()=> {
    $("#nav").show('slow')
  },
  hideNav: ()=> {
    $("#nav").hide('slow')
  },
  render() {
    let {}=this.props;
    return (
        <div className={style.comit}>
            <Lefthatch/>
            <Coenthatch/>
            <Righthatch/>
           
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
