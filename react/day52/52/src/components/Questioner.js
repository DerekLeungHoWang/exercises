import React, { Component } from "react";

class Questioner extends Component {
  constructor(props) {
    super(props);
    this.ask = this.ask.bind(this);

    this.state = { answer: "" };
  }

  ask() {
    const answer = prompt(this.props.question);
    this.setState(state => ({
      answer: answer
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.ask}>Click me!</button>
        <p>{this.state.answer}</p>
      </>
    );
  }
}

export default Questioner;
