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
import Right from './right.jsx';//右屏

let Component = React.createClass({
  componentDidMount() {
    this.props.init(this.props.floorId);
  },
  componentWillReceiveProps(){
    this.props.init(this.props.floorId);
  },
  render() {
    let {floorId}=this.props;
    console.log('33',floorId)
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
                <div className={css.bg}>
                    <div className={css.leftcomp}></div>
                    <div className={css.rightcomp}>
                        <div className={css.wenzi}>
                            <p>楼栋编号: <a>1</a><a>0</a> </p>
                            <p>企业数量: <a>2</a><a>3</a> 家</p>
                            <p>办公面积: <a>2</a><a>0</a><a>1</a> 平</p>
                            <p>纳税金额: <a>4</a><a>0</a><a>0</a> 万元</p>
                            <p>总&nbsp;&nbsp;产&nbsp;&nbsp;值: <a>1</a><a>0</a><a>0</a><a>0</a> 万元</p>
                        </div>
                    </div>
                </div>
    		</div>
    		<div className={css.rightBox}>
                <Right/>
    		</div>
          	<Nav/>
        </div>
    )
  }
});
const mapStateToProps = (state) => {
    return {
      
      floorId:state.vars.floorId,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: (floorId)=> {
      console.log('楼层id',floorId)
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
