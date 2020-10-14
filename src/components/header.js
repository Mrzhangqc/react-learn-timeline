import React from 'react';

export default class Header extends React.Component {

  changeNav = (event) => {
    const value = event.currentTarget.getAttribute("value")
    this.props.parent.getMsg(value)
  }

  render() {
    return (
      <div className="header">
        <nav>
          <button onClick={this.changeNav} value="测试1">测试1</button>
          <button onClick={this.changeNav} value="测试2">测试2</button>
        </nav>
      </div>
    );
  }

}
