import React from "react";
import { Button } from "reactstrap";
const counterStyle = {
  border: "2px solid #000000",
  width: "50%"
};

export default class Counter extends React.Component {
  render() {
    return (
      <div style={counterStyle}>
        <h5>
          {this.props.name === "" ? "Counter" : this.props.name + `'s Counter`}:{" "}
          {this.props.count}
        </h5>
        <Button color="success" onClick={this.props.onPlusButtonClicked}>
          +
        </Button>
        <Button color="danger" onClick={this.props.onMinusButtonClicked}>
          -
        </Button>
        <Button color="secondary" onClick={this.props.onRemoveClicked}>
          Delete Me
        </Button>
      </div>
    );
  }
}