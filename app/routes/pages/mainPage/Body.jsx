import React from "react";
import {connect} from 'react-redux';
import FixedContent from '../../../components/common/FixedContent.jsx';//屏幕调整
var actions = require('redux/actions');
var $ = require('jquery');
import css from './Body.scss';
import NotFoundPage from "../../../components/common/NotFoundPage";
import Overview from './overview/Overview.jsx';//招商服务
import Main from './main/Main.jsx';//总览
import Hatch from './hatch/hatch.jsx';//项目孵化 
import Analysis from './analysis/analysis.jsx';//产业分析
import Manage from './manage/manage.jsx';//工程管理面板
import Management from './management/management.jsx'; //企业360°
let Component = React.createClass({
  componentDidMount() {
    this.props.init(this.props.params);
  },
  componentDidUpdate(){
    this.props.init(this.props.params);
  },
  render() {
    let {params,childPage}=this.props;
    switch(params.page)
    {
      case 'main':
        childPage = <Main/>
        break;
      case 'overview':
        childPage = <Overview/>
        break;
      case 'hatch':
        childPage = <Hatch/>
        break;
      case 'analysis':
        childPage = <Analysis/>
        break;
      case 'manage':
        childPage = <Manage/>
        break;
        case 'management':
        childPage = <Management/>
        break;
      default:
        childPage = <NotFoundPage/>
    }
    return (
      <FixedContent mode="fullWidth">
        {
          <div className={css.whole}>
            {childPage}            
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
    init: (params)=> {
      dispatch(actions.setVars('nowPage',params.page))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
