import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './Overview.scss';
import Leftfist from './Leftfist.jsx';  //左边页面
import Hxfist from './Hxfist.jsx';  //中间页面 
import Rightfist from './rightfist.jsx';//右边页面
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
    let {toOverview}=this.props;
    return (
        <div className={style.conet}>
       <Leftfist/>
      <Hxfist/>
     <Rightfist/>
     <div className={style.menu} onMouseLeave={()=>this.hideNav()}>
          <div className={style.img}><div className={style.src} onClick={()=>this.showNav()}></div></div>
          <ul className={style.nav} id="nav">
              <li onClick={()=>toOverview()}>nav1</li>
              <li>nav2</li>
              <li>nav3</li>
              <li>nav4</li>
          </ul>
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
      toOverview: ()=>{
        browserHistory.push('/app/all/project/town/main')
      }  
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
