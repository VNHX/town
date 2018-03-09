import React from "react";
import {connect} from 'react-redux';
import FixedContent from '../../../components/common/FixedContent.jsx';//屏幕调整
var actions = require('redux/actions');
var $ = require('jquery');
import css from './Body.scss';
import NotFoundPage from "../../../components/common/NotFoundPage";
import Overview from './overview/Overview.jsx';
import Main from './main/Main.jsx';

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {params}=this.props;
    console.log(555,params)
    return (
      <FixedContent mode="fullWidth">
        {
          <div params={params} className={css.whole}>
            {params.page=='main' && <Main/>}
            {params.page=='overview' && <Overview/>}
          </div>
        }
      </FixedContent>    
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
