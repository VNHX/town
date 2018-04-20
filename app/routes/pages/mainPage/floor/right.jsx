//楼层信息
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var {browserHistory} = require('react-router');
import css from './right.scss';
import animate from '../functionCom/animate.js';
let Game_Interval,clearC;
let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  componentWillUnmount () {
    clearInterval(Game_Interval);
    clearInterval(clearC);
  },
  render() {
    let {}=this.props;
    return (
    	<div className={css.rightBg}>
    		<canvas id="q" width="100%" height="1000" opacity="0.8"></canvas>
        <div className={css.logoBg}>
          <div className={css.imgBox1}><img id="img1" /></div>
          <div className={css.imgBox2}><img id="img2" /></div>
          <div className={css.imgBox3}><img id="img3" /></div>
          <div className={css.imgBox4}><img id="img4" /></div>
          <div className={css.imgBox5}><img id="img5" /></div>
          <div className={css.imgBox6}><img id="img6" /></div>
          <div className={css.imgBox7}><img id="img7" /></div>
          <div className={css.imgBox8}><img id="img8" /></div>
          <div className={css.imgBox9}><img id="img9" /></div>
          <div className={css.imgBox10}><img id="img10" /></div>
          <div className={css.imgBox11}><img id="img11" /></div>
          <div className={css.imgBox12}><img id="img12" /></div>
          <div className={css.imgBox13}><img id="img13" /></div>
          <div className={css.imgBox14}><img id="img14" /></div>
          <div className={css.imgBox15}><img id="img15" /></div>
          <div className={css.imgBox16}><img id="img16" /></div>
          <div className={css.imgBox17}><img id="img17" /></div>
          <div className={css.imgBox18}><img id="img18" /></div>
          <div className={css.imgBox19}><img id="img19" /></div>
          <div className={css.imgBox20}><img id="img20" /></div>
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
      	var s = window.screen;
        var width = q.width = s.width;
        var height = q.height;
        var yPositions = Array(300).join(0).split('');
        var ctx = q.getContext('2d');
        var draw = function() {
        ctx.fillStyle = 'rgba(18,40,97,0)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#215a8b';/*代码颜色*/
        ctx.font = '18pt Georgia';
        yPositions.map(function(y, index) {
            var text =  Math.ceil(Math.random() * 10);
            var x = (index * 80) + 10;
            q.getContext('2d').fillText(text, x, y);
            if (y > Math.random() * 1e4) {
                yPositions[index] = 0;
            } else {
                 yPositions[index] = y + 20;
            }
        });
                     };
        RunMatrix();
        function RunMatrix() {
            Game_Interval = setInterval(draw,60);
        }
        function clearCanvas(){  
		    var c=document.getElementById("q");  
		    var cxt=c.getContext("2d");  
		    c.height=c.height;  
		}  
        clearC=setInterval(function(){
        	clearCanvas()
        },5000)
    },	
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
