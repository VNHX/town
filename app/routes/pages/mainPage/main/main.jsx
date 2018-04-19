import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
import css from './main.scss';
import circle1 from './../img/circle.png';
import circle2 from './../img/circleBig.png';
import MainChart from './chart/MainChart.jsx';
import Nav from '../functionCom/nav.jsx';//导航
import Sun from '../img/tianqi.png';
import ajax from '../functionCom/myAjax.js';
import webSocket from '../functionCom/socketClient.js';
let myAjax=ajax.myAjax;
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  render() {
    let {weekday,timeNow,dateNow,rczyData,TotalOutput,ProjectTotal,Cyzl,Xzzl,InvService,Cyzl2,IndexProjectTypes,ZscqData,lineDataA}=this.props;
    return (
      <div className={css.main}>
        <div className={`${css.circle} ${css.circle1}`}>
          <div className={css.line_left1}></div>
          <img className={css.bg} src={circle1}/>
          <div className={css.text1}>
            <div className={css.time}>{timeNow}</div>
            <div className={css.date}>{dateNow}</div>
            <div className={css.weekday}>{weekday}</div>
            <div className={css.sun}><img src={Sun}/></div>
          </div>
        </div>
        <div className={`${css.circle} ${css.circle2}`}>
          <div className={css.line_left2}></div>
          <img src={circle2}/>
          <div className={css.text2}>
            <div className={css.title}><span className={css.icon}></span>工程项目管理看板</div>
            <div><span className={css.name}>工程项目</span><div className={css.percent}>{ProjectTotal&&ProjectTotal.project_total}</div></div>
            <table>
                <tbody>
                  <tr>
                    <td>筹建</td>
                    <td>在建</td>
                    <td>竣工</td>
                  </tr>
                  <tr>
                    <td><span className={css.num}>{ProjectTotal&&ProjectTotal.cj_zb}</span>%</td>
                    <td><span className={css.num}>{ProjectTotal&&ProjectTotal.zj_zb}</span>%</td>
                    <td><span className={css.num}>{ProjectTotal&&ProjectTotal.jg_zb}</span>%</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div className={`${css.circle} ${css.circle3}`}>
          <div className={css.line_left3}></div>
          <img src={circle1}/>
          <div className={css.text3}>
            <div className={css.title}><span className={css.icon}></span>企业360°</div>
            <div className={css.percent1}>
              <div className={css.name}>今年入住：{Cyzl&&Cyzl.list[0]}</div>
              <div className={css.total}><div className={css.per}></div></div>
              <div className={css.num}>同比{Cyzl&&Cyzl.list[1]}%</div>
            </div>
            <div className={css.percent2}>
              <div className={css.name}>今年产值/万元：{Cyzl&&Cyzl.list[2]}</div>
              <div className={css.total}><div className={css.per}></div></div>
              <div className={css.num}>同比{Cyzl&&Cyzl.list[3]}%</div>
            </div>
            <div className={css.percent3}>
              <div className={css.name}>今年退园：{Cyzl&&Cyzl.list[4]}</div>
              <div className={css.total}><div className={css.per}></div></div>
              <div className={css.num}>同比{Cyzl&&Cyzl.list[5]}%</div>
            </div>
          </div>
        </div>
        <div className={css.middle}>
          <div className={css.circleBig}></div>
          <div className={css.textBig}>
              <div className={css.title}><span className={css.icon}></span>小镇总览</div>
              <div className={css.name}>南京未来网络小镇</div>
              <table>
                <tbody>
                  <tr>
                    <td>在园企业</td><td>入园企业</td>
                  </tr>
                  <tr>
                    <td>总共<span className={css.num}>{Xzzl&&Xzzl.list[0]}</span>家</td><td><span className={css.num}>{Xzzl&&Xzzl.list[1]}</span>家今年</td>
                  </tr>
                  <tr>
                    <td colSpan="2">入园企业</td>
                  </tr>
                  <tr>
                    <td colSpan="2"><span className={css.numGreen}>-{Xzzl&&Xzzl.list[2]}%</span>同比下降</td>
                  </tr>
                </tbody>
              </table>
          </div>   
          <div className={css.circleBig_bottom}></div>
        </div>   
        <div className={css.bg1}></div>
        <div className={css.bg2}></div>
        <div className={css.bg3}></div>
        <div className={`${css.circle} ${css.circle4}`}>
          <div className={css.line_right1}></div>
          <img src={circle1}/>
          <div className={css.text4}>
            <div className={css.title}><span className={css.icon}></span>招商服务</div>
            <div><span className={css.word}>占比率</span><span className={css.num}>{InvService&&InvService.value}%</span></div>
            <div className={css.total}><div className={css.percent} style={{width:'50%'}}></div></div>
            <div><span className={css.word}>占比率</span><span className={css.num}>40%</span></div>
            <div className={css.total}><div className={css.percent} style={{width:'40%'}}></div></div>
          </div>
        </div>
        <div className={`${css.circle} ${css.circle5}`}>
          <div className={css.line_right2}></div>
          <img src={circle1}/>
          <div className={css.text5}>
            <div className={css.title}><span className={css.icon}></span>重大项目推进情况</div>
            <table>
              <tbody>
                <tr>
                  <td>{IndexProjectTypes&&IndexProjectTypes.list[2].project_type_name}:</td><td>{IndexProjectTypes&&IndexProjectTypes.list[2].num}</td>
                  <td>{IndexProjectTypes&&IndexProjectTypes.list[1].project_type_name}:</td><td>{IndexProjectTypes&&IndexProjectTypes.list[1].num}</td>
                </tr>
                <tr>
                  <td>{IndexProjectTypes&&IndexProjectTypes.list[3].project_type_name}:</td><td>{IndexProjectTypes&&IndexProjectTypes.list[3].num}</td>
                  <td>{IndexProjectTypes&&IndexProjectTypes.list[4].project_type_name}:</td><td>{IndexProjectTypes&&IndexProjectTypes.list[4].num}</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>{IndexProjectTypes&&IndexProjectTypes.list[0].project_type_name}：</td>
                  <td>{IndexProjectTypes&&IndexProjectTypes.list[0].num}</td>
                  <td> </td>
                </tr>
              </tbody>
            </table>          
          </div>
        </div>
        <div className={`${css.circle} ${css.circle6}`}>
          <img src={circle1}/>
          <div className={css.text6}>
            <div className={css.title}><span className={css.icon}></span>经济运行分析</div>
            <div className={css.percent1}>
              <div className={css.name}>今年入住：{Cyzl2&&Cyzl2.list[0]}</div>
              <div className={css.total}><div className={css.per}></div></div>
              <div className={css.num}>同比{Cyzl2&&Cyzl2.list[1]}%</div>
            </div>
            <div className={css.percent2}>
              <div className={css.name}>今年产值/万元：{Cyzl2&&Cyzl2.list[2]}</div>
              <div className={css.total}><div className={css.per}></div></div>
              <div className={css.num}>同比{Cyzl2&&Cyzl2.list[3]}%</div>
            </div>
            <div className={css.percent3}>
              <div className={css.name}>今年退园：{Cyzl2&&Cyzl2.list[4]}</div>
              <div className={css.total}><div className={css.per}></div></div>
              <div className={css.num}>同比{Cyzl2&&Cyzl2.list[5]}%</div>
            </div>
          </div>
        </div>
        <div className={css.leftBg}></div>   
        <div className={css.line_bar1}></div>
        <div className={css.line_bar2}></div>
        <div className={css.overviewPro}>
          <div className={css.title}><span className={css.icon}></span>人才资源结构</div>
          <div className={css.name}>{rczyData&&rczyData.name[0]}
            <div className={css.num}>{rczyData&&rczyData.value[0]}</div>
          </div>
          <div className={css.total}><div className={css.percent} style={{width:'30%'}} title={rczyData&&rczyData.value[0]}></div></div>
          <div className={css.name}>{rczyData&&rczyData.name[1]}
            <div className={css.num}>{rczyData&&rczyData.value[1]}</div>
          </div>
          <div className={css.total}><div className={css.percent} style={{width:'40%'}} title={rczyData&&rczyData.value[1]}></div></div>
          <div className={css.name}>{rczyData&&rczyData.name[2]}
            <div className={css.num}>{rczyData&&rczyData.value[2]}</div>
          </div>
          <div className={css.total}><div className={css.percent} style={{width:'50%'}} title={rczyData&&rczyData.value[2]}></div></div>
          <div className={css.name}>{rczyData&&rczyData.name[3]}
            <div className={css.num}>{rczyData&&rczyData.value[3]}</div>
          </div>
          <div className={css.total}><div className={css.percent} style={{width:'60%'}} title={rczyData&&rczyData.value[3]}></div></div>
          <div className={css.name}>{rczyData&&rczyData.name[4]}
            <div className={css.num}>{rczyData&&rczyData.value[4]}</div>
          </div>
          <div className={css.total}><div className={css.percent} style={{width:'20%'}} title={rczyData&&rczyData.value[4]}></div></div>
        </div>
        <div className={css.boardPro}>
          <div className={css.title}><span className={css.icon}></span>园区总产值</div>
          <div className={css.chart}><MainChart/></div>             
        </div>
        <div className={css.boardRight}>
          <div className={css.name}><span className={css.icon}></span>知识产权</div>
          <div className={css.part1}>{ZscqData&&ZscqData.name[0]}<div className={css.time}>{ZscqData&&ZscqData.value[0]}</div></div>
          <div className={css.part2}>{ZscqData&&ZscqData.name[1]}<div className={css.time}>{ZscqData&&ZscqData.value[1]}</div></div>
          <div className={css.part3}>{ZscqData&&ZscqData.name[2]}<div className={css.time}>{ZscqData&&ZscqData.value[2]}</div></div>
          <div className={css.part4}>{ZscqData&&ZscqData.name[3]}<div className={css.time}>{ZscqData&&ZscqData.value[3]}</div></div>
        </div>
        <Nav></Nav>
      </div>   
    )
  }
});
const mapStateToProps = (state) => {
    return {
        timeNow: state.vars.timeNow,
        dateNow: state.vars.dateNow,
        weekday: state.vars.weekday,
        rczyData:state.vars.rczyData,
        TotalOutput:state.vars.TotalOutput,
        ProjectTotal:state.vars.ProjectTotal,
        Cyzl:state.vars.Cyzl,
        Xzzl:state.vars.Xzzl,
        InvService:state.vars.InvService,
        Cyzl2:state.vars.Cyzl2,
        IndexProjectTypes:state.vars.IndexProjectTypes,
        ZscqData:state.vars.ZscqData,
        lineDataA:state.vars.lineDataA,
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
        //人才资源结构
        let param_json={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getRczyData",
            }
        };
        let data1={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json),
            requireType: 'get',
            async: true,
        };
        myAjax(data1,success1);       
        function success1(data){
            console.log('人才资源结构',data)
            dispatch(actions.setVars('rczyData',data.query.detail));
        };
        //园区总产值
        let param_json2={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getTotalOutput",
            }
        };
        let data2={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json2),
            requireType: 'get',
            async: true,
        };
        myAjax(data2,success2);       
        function success2(data){
            console.log('园区总产值',data);
            let lineData ={
              mon:[],
              num:[]
            };
            for(let i=0;i<data.query.detail.name.length;i++){
              let number=Number(data.query.detail.value[i])/10000;
              lineData.mon.push(data.query.detail.name[i]);
              lineData.num.push(Number(number.toFixed(1)));
            };
            console.log(888,lineData)
            dispatch(actions.setVars('lineDataA',lineData));
        };

        //工程项目看板
        let param_json3={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getProjectTotal",
            }
        };
        let data3={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json3),
            requireType: 'get',
            async: true,
        };
        myAjax(data3,success3);       
        function success3(data){
            console.log('工程项目看板',data)
            dispatch(actions.setVars('ProjectTotal',data.query.detail));
        };
        //企业360
        let param_json4={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getCyzl",
            }
        };
        let data4={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json4),
            requireType: 'get',
            async: true,
        };
        myAjax(data4,success4);       
        function success4(data){
            console.log('企业360',data)
            dispatch(actions.setVars('Cyzl',data.query.detail));
        };
        //小镇总览
        let param_json5={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getXzzl",
            }
        };
        let data5={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json5),
            requireType: 'get',
            async: true,
        };
        myAjax(data5,success5);       
        function success5(data){
            console.log('小镇总览',data)
            dispatch(actions.setVars('Xzzl',data.query.detail));
        };
        //招商服务
        let param_json6={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getInvService",
            }
        };
        let data6={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json6),
            requireType: 'get',
            async: true,
        };
        myAjax(data6,success6);       
        function success6(data){
            console.log('招商服务',data)
            dispatch(actions.setVars('InvService',data.query.detail));
        };
        //经济运行分析
        let param_json7={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getCyzl",
            }
        };
        let data7={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json7),
            requireType: 'get',
            async: true,
        };
        myAjax(data7,success7);       
        function success7(data){
            console.log('经济运行分析',data)
            dispatch(actions.setVars('Cyzl2',data.query.detail));
        };
        //重大项目推进情况
        let param_json8={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getIndexProjectTypes",
            }
        };
        let data8={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json8),
            requireType: 'get',
            async: true,
        };
        myAjax(data8,success8);       
        function success8(data){
            console.log('重大项目推进情况',data)
            dispatch(actions.setVars('IndexProjectTypes',data.query));
        };
        //知识产权
        let param_json9={
            "query":{
                "target":"clientTotalProjectInf",
                "function":"getZscqData",
            }
        };
        let data9={
            url: 'ClientGetJsonDatas',
            requireData: "param_json="+JSON.stringify(param_json9),
            requireType: 'get',
            async: true,
        };
        myAjax(data9,success9);       
        function success9(data){
            console.log('知识产权',data)
            dispatch(actions.setVars('ZscqData',data.query.detail));
        };
      // var myData = new Date();//Id 
      // var times = myData.getTime().toString();
      // var str= times.substr(times.length-5);
      // webSocket.getConnect('getmodel/#',str,success,true);
      // function success(res){
      //   console.log(999,res)
      // }
      function setTime(){
        let myDate = new Date();
        let timeNow=myDate.getHours()+':'+myDate.getMinutes()+":"+myDate.getSeconds();
        let dateNow=myDate.toLocaleDateString();//获取当前日期
        let day=myDate.getDay();//星期
        let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        dispatch(actions.setVars('timeNow',timeNow));
        dispatch(actions.setVars('dateNow',dateNow));
        dispatch(actions.setVars('weekday',weekday[day]));
      }      
      setInterval(setTime, 1000); 
          
    },    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
