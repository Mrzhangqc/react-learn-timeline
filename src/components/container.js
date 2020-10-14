import React from 'react';
import Header from './header';
import Main from './main';

class Container extends React.Component {

  state = {
    nav: ''
  }

  getMsg = (value) => {
    this.setState({nav: value})
  }

  render() {
    const { nav } = this.state

    return (
      <div className="container">
        <Header parent={{getMsg: this.getMsg}}/>
        <Main nav={nav}/>
      </div>
    );
  }

}

export default Container
