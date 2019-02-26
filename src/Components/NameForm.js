import React, { Component } from "react";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    
  
    render() {
      return (
        <>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          {this.state.value}
          {/* <input type="submit" value="Submit" /> */}
        </>
      );
    }
  }

  export default NameForm;