module.exports={
  //黑客帝国
  hkdganimate:function(Game_Interval){
       /*
     11     ① 用setInterval(draw, 33)设定刷新间隔
     12
     13     ② 用String.fromCharCode(1e2+Math.random()*33)随机生成字母
     14
     15     ③ 用ctx.fillStyle=’rgba(0,0,0,.05)’; ctx.fillRect(0,0,width,height); ctx.fillStyle=’#0F0′; 反复生成opacity为0.5的半透明黑色背景
     16
     17     ④ 用x = (index * 10)+10;和yPositions[index] = y + 10;顺序确定显示字母的位置
     18
     19     ⑤ 用fillText(text, x, y); 在指定位置显示一个字母 以上步骤循环进行，就会产生《黑客帝国》的片头效果。
     20 */
         $(document).ready(function() {
                //设备宽度
                var s = window.screen;
                 var width = q.width = s.width;
                var height = q.height;
                var yPositions = Array(300).join(0).split('');
                 var ctx = q.getContext('2d');
                var draw = function() {
                         ctx.fillStyle = 'rgba(0,0,0,.05)';
                         ctx.fillRect(0, 0, width, height);
                         ctx.fillStyle = '#172446';/*代码颜色*/
                         ctx.font = '18pt Georgia';
                         yPositions.map(function(y, index) {
                                 var text =  Math.ceil(Math.random() * 10);
                                 var x = (index * 80) + 10;
                                 q.getContext('2d').fillText(text, x, y);
                                 if (y > Math.random() * 1e4) {
                                        yPositions[index] = 0;
                                     } else {
                                        yPositions[index] = y + 10;
                                     }
                            });
                     };
                RunMatrix();
               function RunMatrix() {
                        Game_Interval = setInterval(draw,60);
                     }
             });

  },
	initanimate:function(){
        		//宇宙特效
        "use strict";
        var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d'),
          w = canvas.width = window.innerWidth,
          h = canvas.height = window.innerHeight,

          hue = 217,
          stars = [],
          count = 0,
          maxStars = 400;//星星数量

        var canvas2 = document.createElement('canvas'),
          ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        var half = canvas2.width / 2,
          gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#CCC');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

        // End cache

        function random(min, max) {
          if (arguments.length < 2) {
            max = min;
            min = 0;
          }

          if (min > max) {
            var hold = max;
            max = min;
            min = hold;
          }

          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
          var max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
          return diameter / 2;
          //星星移动范围，值越大范围越小，
        }

        var Star = function() {

          this.orbitRadius = random(maxOrbit(w, h));
          this.radius = random(60, this.orbitRadius) / 8; 
          //星星大小
          this.orbitX = w / 2;
          this.orbitY = h / 2;
          this.timePassed = random(0, maxStars);
          this.speed = random(this.orbitRadius) / 600000; 
          //星星移动速度
          this.alpha = random(2, 10) / 10;

          count++;
          stars[count] = this;
        }

        Star.prototype.draw = function() {
          var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

          if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
          } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
          }

          ctx.globalAlpha = this.alpha;
          ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
          this.timePassed += this.speed;
        }

        for (var i = 0; i < maxStars; i++) {
          new Star();
        }

        function animation() {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 0.5; //尾巴
          ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
          ctx.fillRect(0, 0, w, h)

          ctx.globalCompositeOperation = 'lighter';
          for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
          };

          window.requestAnimationFrame(animation);
        }

        animation();
	},
  numberRock1:function(){
               (function($){
            $.fn.numberRock=function(options){
                var defaults={
                    speed:44,
                    count:100
                };
                var opts=$.extend({}, defaults, options);

                var div_by = 100,
                count=opts["count"],
                speed = count / div_by,
                sum=0,
                $display = this,
                run_count = 1,
                int_speed = opts["speed"];
                var int = setInterval(function () {
                    if (run_count <= div_by&&speed!=0) {
                        $display.text(sum=(speed * run_count).toFixed(2));
                        run_count++;
                    } else if (sum < count) {
                        $display.text(++sum);
                    } else {
                        clearInterval(int);
                    }
                }, int_speed);
            }

        })(jQuery);
    },

    slidetop:function(){
       (function ($) {
      /*jQuery对象添加  runNum  方法*/
        $.fn.extend({
          /*
            * 滚动数字
        * @ val 值，  params 参数对象
        * params{addMin(随机最小值),addMax(随机最大值),interval(动画间隔),speed(动画滚动速度),width(列宽),height(行高)}
          */
            runNum:function (val,params) {
                /*初始化动画参数*/
                var valString = val || '1000000'
                var par= params || {};
                var runNumJson={
                    el:$(this),
                    value:valString,
                    valueStr:valString.toString(10),
                    width:par.width || 25,
                    height:par.height || 45,
                    addMin:par.addMin || 100,
                    addMax:par.addMax || 200,
                    interval:par.interval || 3000,
                    speed:par.speed || 1000,
                    width:par.width || 25,
                    length:valString.toString(10).length
                };
                $._runNum._list(runNumJson.el,runNumJson);
                $._runNum._interval(runNumJson.el.children("li"),runNumJson);
            }
        });
        /*jQuery对象添加  _runNum  属性*/
        $._runNum={
            /*初始化数字列表*/
            _list:function (el,json) {
                var str='';
                for(var i=0; i<json.length;i++){
                    var w=json.width*i;
                    var t=json.height*parseInt(json.valueStr[i]);
                    var h=json.height*10;
                    str +='<li style="width:'+json.width+'px;left:'+w+'px;top: '+-t+'px;height:'+h+'px;">';
                    for(var j=0;j<10;j++){
                        str+='<div style="height:'+json.height+'px;line-height:'+json.height+'px;">'+j+'</div>';
                    }
                    str+='</li>';
                }
                el.html(str);
            },
            /*生成随即数*/
            _random:function (json) {
                var Range = json.addMax - json.addMin;
                var Rand = Math.random();
                //var num=json.addMin + Math.round(Rand * Range);
                var num=json.addMin +51;
                return num;
            },
            /*执行动画效果*/
            _animate:function (el,value,json) {
                for(var x=0;x<json.length;x++){
                    var topPx=value[x]*json.height;
                    el.eq(x).animate({top:-topPx+'px'},json.speed);
                }
            },
            /*定期刷新动画列表*/
            _interval:function (el,json) {
                var val=json.value;
                setInterval(function () {
                    val+=$._runNum._random(json);
                    $._runNum._animate(el,val.toString(10),json);
                },json.interval);
            }
        }
    })(jQuery);
    }
}