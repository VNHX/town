import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var $ = require('jquery');
import style from './tbck.scss'
let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {height}=this.props;
        return (
            <div>
                 <div className={style.ss}>
                <div className={style.yi_1}>B/计算机 通信和电子设备制造业</div>
                <div className={style.yi_2}>B/计算机 通信和电子设备制造业</div>
                <div className={style.yi_2_2}></div>
                <div className={style.yi_2_3}></div>
                <div className={style.yi_2_4}></div>
                <div className={style.yi_2_5}>I/信息传输和软件技术</div>
                <div className={style.yi_2_6}>名称</div>
                <div className={style.yi_2_7}>M/科学研究和技术服务业</div>
                <div className={style.yi_2_8}>L/租凭和商务服务业</div>
           </div>
           <div className={style.dd}>
                <div className={style.shu_liang}>
                <span>企业家数量:</span>
                <span>14家</span>
                </div>
                <div className={style.name_zi}>
                <span>I/信息传输和软件技术</span>
                </div>
                <div className={style.ji_shu}>
                <span>技术产值:</span>
                <span>0万元</span>
                </div>
                <div className={style.tong_bi}>
                <span>同比:</span>
                <span>10%</span>
                </div>
                <div className={style.zhan_bi}>
                <span>占比:</span>
                <span>20%</span>
                </div>
           </div>
            </div>
          
        );
    }
});


const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
          
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
