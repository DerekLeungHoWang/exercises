import React from "react";

// Exercise A
class Questioner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ""
    };
  }

  query = () => {
    const userInput = prompt(this.props.question);
    if (userInput !== null) {
      this.setState({
        answer: userInput
      });
    }
    return;
  };

  render() {
    return (
      <div>
        <button className="promptBox" onClick={this.query}>
          Questioner
        </button>
        <p>{this.state.answer}</p>
      </div>
    );
  }
}

export default Questioner;
