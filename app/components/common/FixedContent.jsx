import React from "react";
import $ from 'jquery';

//export default class FixedContent extends React.Component {

let FixedContent = React.createClass({

  getContentStyle(){
    let {mode, origin} = this.props;    
    var remSize = window.screen.height / 64;
    document.querySelector("html").style.fontSize = remSize + "px";
    if (mode === 'fullWidth') {
      return {
        'height':'100%',
        'width':'100%',
      };
    } else {
      return {};
    }
  },

  componentDidMount() {
    window.addEventListener("resize", this.adjustWidth);
    console.log('resize','111')
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustWidth);
    console.log('resize','000')
  },

  adjustWidth() {
    $(this.refs.content).css(this.getContentStyle());
  },

  render() {
    var {className, children } = this.props;
    let style = this.getContentStyle();
    return (
      <div style={{height: '100%', width: '100%'}}>
        <div ref="content" style={style} className={className}>
          {children}
        </div>
      </div>
    );
  }
});

export default FixedContent;

FixedContent.propTypes = {
  height: React.PropTypes.number,
  mode: React.PropTypes.oneOf(['fullWidth', 'fullWidthCutHeight']),
  origin: React.PropTypes.oneOf(['top', 'bottom'])
};

FixedContent.defaultProps = {
  mode: 'fullWidth',
};

// fullWidth: 宽 100% 高按比例
// fullWidthCutHeight: 宽 100%, 高只显示一屏
