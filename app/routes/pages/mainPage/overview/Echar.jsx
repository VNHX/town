import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import Leftechar from './Echares/leftechar.jsx';
import style from './Echar.scss';
import Leftchar from './Echares/leftchar.jsx'
import Leftar from './Echares/leftar.jsx'
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {}=this.props;
    return (
    <div className={style.hxEchar}>
      <div className={style.hxEcha}>
    <div className={style.hxEchad}>
    <span></span> <span></span> <span></span> <span></span>
   <p>签约项目来源分布</p>
    </div>
    <Leftechar/>
    </div>
    <div className={style.hxEcha}>
    <div className={style.hxEchad}>
    <span></span> <span></span> <span></span> <span></span>
   <p>洽谈中项目分布情况</p>
    </div>
    <div className={style.sdf}><Leftchar/></div>
    </div>
    <div className={style.hxEcha}>
    <div className={style.hxEchad}>
    <span></span> <span></span> <span></span> <span></span>
   <p>洽谈中项目分布情况</p>
    </div>
    <div className={style.sdf}> <Leftar/></div>
   
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
