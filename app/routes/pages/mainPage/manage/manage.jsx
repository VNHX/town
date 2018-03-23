//工程项目管理看板
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import css from './manage.scss';
import Nav from '../functionCom/nav.jsx';//导航
import Chart from "./chart.jsx";
import LineChart from "./lineChart.jsx";
import PieChart from "./pieChart.jsx";
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
    window.addEventListener("resize", this.props.chartHeight);
  },
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.chartHeight);
  },
  render() {
    let {params,heightChart1,heightPie}=this.props;
    return (
      <div className={css.manageBox}>
        <div className={`${css.leftBox} ${css.contentBox}`}>
          <div className={css.chartBox1} id="chart1">
            <div className={css.title}>
              <div className={css.name}>项目整体建设情况</div>
              <select>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
              </select>
            </div>            
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <Chart heightChart1={heightChart1}/>
          </div>
          <div className={css.chartBox2} id="chart2">
            <div className={css.title}>
              <div className={css.name}>工程项目投资额（万元）</div>
              <span className={css.btn}>竣工</span>
              <span className={css.btn}>在建</span>
              <span className={css.btn}>筹建</span>
            </div>
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <LineChart heightChart1={heightChart1}/>
          </div>
          <div className={css.tableBox}>
            <div className={css.leftTable}  id="chart3">
              <span className={css.leftTop}></span>
              <span className={css.leftBottom}></span>
              <span className={css.rightTop}></span>
              <span className={css.rightBottom}></span>
              <div className={css.title}>
                <div className={css.nameBox}>项目投资情况</div>
                <select>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                </select>
              </div>              
              <PieChart heightPie={heightPie}/>
            </div>
            <div className={css.rightTable}>
              <span className={css.leftTop}></span>
              <span className={css.leftBottom}></span>
              <span className={css.rightTop}></span>
              <span className={css.rightBottom}></span>
              <div className={css.nameBox}>重点项目推进情况</div>
              <table>
                <thead>
                  <tr>
                    <th>项目名称</th><th>预警次数</th>
                    <th>预警项</th><th>日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>工作计划</td><td>3</td><td>1季度</td><td>180312</td>
                  </tr>
                  <tr>
                    <td>工作计划</td><td>4</td><td>2季度</td><td>180313</td>
                  </tr>
                  <tr>
                    <td>工作计划</td><td>43</td><td>3季度</td><td>180314</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`${css.middleBox} ${css.contentBox}`}>
          <div className={css.header}>
            <div className={css.logo}></div>
          </div>
          <div className={css.bg}></div>
          <div className={css.table}>
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <div className={`${css.textBox1} ${css.textBox1}`} style={{width:'25%'}}>
              <div className={css.totalBox}>
                <span className={css.total}>工程项目总数</span>
                <div className={css.num}>14</div>
              </div>
              <div className={css.chartBox}>
                <div className={`${css.oneFloor} ${css.oneFloorFirst}`}><div className={css.twoFloor}><div className={css.threeFloor}></div></div></div>
                <div className={`${css.oneFloor} ${css.oneFloorSecond}`}><div className={css.twoFloor}><div className={css.threeFloor}></div></div></div>
                <div className={`${css.oneFloor} ${css.oneFloorThird}`}><div className={css.twoFloor}><div className={css.threeFloor}></div></div></div>
              </div>              
            </div>
            <div className={`${css.textBox} ${css.textBox2}`}>
              <span><span className={css.logo}></span>本年动工项目</span>
              <div><span className={css.num}>0</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox3}`}>
              <span><span className={css.logo}></span>本年竣工项目</span>
              <div><span className={css.num}>0</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox4}`}>
              <span><span className={css.logo}></span>本年投资总额（万元）</span>
              <div><span className={css.num}>0.00</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox5}`}>
              <span><span className={css.logo}></span>本年动工占地（亩）</span>
              <div><span className={css.num}>0.00</span> <span className={css.percent}>0%</span></div>
            </div>
            <div className={`${css.textBox} ${css.textBox6}`}>
              <span><span className={css.logo}></span>本年建筑面积（平方米）</span>
              <div><span className={css.num}>0.00</span> <span className={css.percent}>0%</span></div>
            </div>
          </div>
        </div>
        <div className={`${css.rightBox} ${css.contentBox}`}>
          <div className={css.textBox}>
            <div className={css.header}>
              <span className={css.nameBox}>重点项目看板</span>
              <span className={css.and}></span>
            </div>
            <span className={css.leftTop}></span>
            <span className={css.leftBottom}></span>
            <span className={css.rightTop}></span>
            <span className={css.rightBottom}></span>
            <table>
              <thead>
                <tr>
                  <th>项目名称</th><th>负责人</th>
                  <th>可研编制</th><th>发改委批复（备案、核准）文件</th>
                  <th>节能</th><th>选址</th>
                  <th>环评</th><th>土地预审</th>
                  <th>用地规划许可证</th><th>用地批准书</th>
                  <th>设计</th><th>工程规划许可证</th>
                  <th>施工监理招标</th><th>质量监督手续</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th>施理招标</th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th></th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th></th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th>施理招标</th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th></th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th></th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th>施理招标</th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th></th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th></th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th>施理招标</th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试</th><th>王艳玲</th>
                  <th>√</th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th>批准书</th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
                <tr>
                  <th>测试流水号</th><th>王艳玲</th>
                  <th></th><th>发改委</th>
                  <th></th><th></th>
                  <th></th><th>土地预审</th>
                  <th>许可证</th><th></th>
                  <th>设计</th><th>划许可证</th>
                  <th></th><th>监督手续</th>
                </tr>
              </tbody>
            </table>
          </div>          
        </div>
        <Nav/>
      </div>    
    )
  }
});
const mapStateToProps = (state) => {
    return {
        heightChart1:state.vars.heightChart1,
        heightPie:state.vars.heightPie
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartHeight:()=>{
      let height=$('#chart1').css('height');
      let num=height.length-2;
      height=height.substr(0,num)*.9;
      dispatch(actions.setVars('heightChart1',height));

      let heightPie=$('#chart3').css('height');
      let numPie=heightPie.length-2;
      heightPie=heightPie.substr(0,numPie)*.9;
      dispatch(actions.setVars('heightPie',heightPie));
    },
    init: ()=> {      
      
          
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
