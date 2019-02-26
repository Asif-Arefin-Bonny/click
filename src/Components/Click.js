import React, { Component } from "react";

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
    this.state = {
      range: 0
    };
  }

  updateRange = (e) => {
    // this.setState({ range: this.state.range + e.target.value });
    // if (this.state.range >= 200) {
    //     this.setState({ range: 200});
    // }
    this.setState({range: e.target.value});
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
      </div>
    );
  }
}

export default Click;
