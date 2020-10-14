import React, { useMemo } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as AllActions from '@/store/actions';

import html2Canvas from '@/utils/html2canvas'
import rasterizeHtml from '@/utils/rasterizehtml'
import dom2Image from '@/utils/dom2image'

class Main extends React.Component {
  state = {
    msg: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { nav } = nextProps;

    if(nav !== prevState.msg) {
      return {
        msg : nav
      }
    }
    return null;
  }


  componentDidMount() {
    // 测试开始
    setTimeout(() => {
      this.props.actions.setT1Total({payload: {total: 555}})
    }, 2000);
  }

  inputChange = (e) => {
    const inputMsg = e.target.value
    this.props.actions.setT1Total({payload: {total: inputMsg}})
  }

  _html2Canvas = _ => {
    html2Canvas(document.querySelector(".main"))
  }
  _rasterizehtml = _ => {
    rasterizeHtml(document.querySelector(".main"))
  }
  _dom2image = _ => {
    dom2Image(document.querySelector(".main"))
  }
  

  render() {
    const { msg } = this.state
   
    return (
      <div className="main">
        输入：<input type="text" value={this.props.test1.total} onChange={this.inputChange}/><br/>
        显示：{msg}<ShowMsg inputMsg={this.props.test1.total}></ShowMsg>
        <div>
          <button onClick={this._html2Canvas}>html2canvas截图</button>
          <button onClick={this._rasterizehtml}>rasterizehtml截图</button>
          <button onClick={this._dom2image}>dom2image截图</button>
        </div>
      </div>
    );
  }

}

function ShowMsg ({inputMsg}) {
  function changeMsg () {
    return inputMsg ?  `- ${inputMsg} -B`: ''
  }

  const result = useMemo(changeMsg, [changeMsg]);

  return result
}

const mapStateToProps = ({ test1 }) => ({ test1 })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AllActions, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
