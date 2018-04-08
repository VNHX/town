//楼层信息
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var {browserHistory} = require('react-router');
import Nav from '../functionCom/nav.jsx';//导航
import css from './floor.scss';
import Column from './column.jsx';//柱图
import Table from "./table.jsx";//table表格
import Pie from "./pieChart.jsx";//pie1

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {}=this.props;
    return (
    	<div className={css.floor}>
    		<div className={css.leftBox}>
    			<div className={css.chartBox}>
    				<div className={css.column}>
    					<div className={css.borderBox}>
    						<span className={css.leftTop}></span>
	    					<span className={css.leftBottom}></span>
	    					<span className={css.rightTop}></span>
	    					<span className={css.rightBottom}></span>
                            <div className={css.header}>人才资源结构</div>
	    					<Column/>
    					</div>    					
    				</div>
    				<div className={css.pie}>
    					<div className={`${css.pie1} ${css.pieBox}`}>
                            <div className={css.borderBox}>
                                <span className={css.leftTop}></span>
                                <span className={css.leftBottom}></span>
                                <span className={css.rightTop}></span>
                                <span className={css.rightBottom}></span>
                                <div className={css.header}>行业分析</div>
                                <Pie/>
                            </div> 
    					</div>
    					<div className={`${css.pie2} ${css.pieBox}`}>
                            <div className={css.borderBox}>
                                <span className={css.leftTop}></span>
                                <span className={css.leftBottom}></span>
                                <span className={css.rightTop}></span>
                                <span className={css.rightBottom}></span>
                                <div className={css.header}>人员学历</div>
                            </div> 
    					</div>
    				</div>
    			</div>
    			<div className={css.tableBox}>
                    <div className={css.borderBox}>
                        <span className={css.leftTop}></span>
                        <span className={css.leftBottom}></span>
                        <span className={css.rightTop}></span>
                        <span className={css.rightBottom}></span>
                        <div className={css.header}>明星企业</div>
                        <Table/>
                    </div>
    			</div>
    		</div>
    		<div className={css.middleBox}>
                <div className={css.header}></div>
                <div className={css.bg}></div>
    		</div>
    		<div className={css.rightBox}>

    		</div>
          	<Nav/>
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
      
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
