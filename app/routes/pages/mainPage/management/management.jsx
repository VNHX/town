
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './management.scss'
import Nav from '../functionCom/nav.jsx';//导航
import Mana from './mana.jsx' //左边
import Manap from './manap.jsx' //中间
import Manal from './manal.jsx' //中间
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },

  render() {
    let {}=this.props;
    return (
      <div className={style.cmt}>
       <Mana/>
       <Manap/>
       <Manal/>
       <Nav></Nav>
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
