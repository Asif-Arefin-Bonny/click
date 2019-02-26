import React, { Component } from "react";
import "./App.css";
import Click from "./Components/Click";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rangeVal: 0
  //   };
  //   this.updateRange = this.updateRange.bind(this);
  // }

  // updateRange(val) {
  //   this.setState({
  //     rangeVal: val
  //   });
  // }

  render() {
    // const { rangeVal } = this.state;
    // return <Click range={rangeVal} updateRange={this.updateRange} />;
    return <Click />;
  }
}

export default App;
