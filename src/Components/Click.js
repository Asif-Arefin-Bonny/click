import React, { Component } from "react";
import click1 from "../pulse/click1.wav";
import click2 from "../pulse/click2.wav";

class Click extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.updateRange = this.updateRange.bind(this);
  // }

  // updateRange(e) {
  //   this.props.updateRange(e.target.value);
  // }
  constructor(props) {
    super(props);
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
    this.state = {
      range: 0
    };
  }

  updateRange = e => {
    // this.setState({ range: this.state.range + e.target.value });
    // if (this.state.range >= 200) {
    //     this.setState({ range: 200});
    // }
    this.setState({ range: e.target.value });
  };
  startStop = () => {
      for (let i = 0 ; i< this.state.range ; i++){
           this.click1.play();
           console.log(i);
      }
  };

  render() {
    //   const { range } = this.props;
    return (
      <div>
        <input
          id="range"
          type="range"
          value={this.state.range}
          min="0"
          max="200"
          step="1"
          onChange={this.updateRange}
        />
        <span id="output">{this.state.range}</span>
        <button onClick={this.startStop} >Start</button>
        {/* <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button> */}
      </div>
    );
  }
}

export default Click;
