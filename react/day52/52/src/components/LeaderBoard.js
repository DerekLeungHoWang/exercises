import RandomName from "node-random-name";

import React from "react";

import { Counter } from "./Counter";

export class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { name: RandomName({ seed: Math.random() }), count: 0 },
        { name: RandomName({ seed: Math.random() }), count: 2 }
      ]
    };
  }
  renderCounter(i, name, count) {
    return (
      <Counter
        count={count}
        name={name}
        key={i}
        onClick={() => this.handleClickPlus(i)}
        onMouseDown={() => this.handleClickMinus(i)}
      />
    );
  }

  handleClickPlus(i) {
    let newObj = {
      ...this.state.counters[i],
      count: this.state.counters[i].count + 1
    };
    let newArray = [...this.state.counters];
    newArray[i] = newObj;
    console.log(newArray[i]);

    this.setState({
      counters: newArray
    });
  }

  handleClickMinus(i) {
    let newObj = {
      ...this.state.counters[i],
      count: this.state.counters[i].count - 1
    };
    let newArray = [...this.state.counters];
    newArray[i] = newObj;
    this.setState({
      counters: newArray
    });
  }

  check() {
    let player1 = this.state.counters[0].name;

    let count1 = this.state.counters[0].count;

    let player2 = this.state.counters[1].name;

    let count2 = this.state.counters[1].count;

    if (count1 > count2) {
      return player1;
    } else if (count2 > count1) {
      return player2;
    }
  }

  render() {
    this.state.counters.map((counter, index) => {
      console.log(counter.name);
      console.log(index);
      console.log(counter.count);
    });
    let x = this.check();
    return (
      <div>
        {this.state.counters.map((counter, index) =>
          this.renderCounter(index, counter.name, counter.count)
        )}
        <p> {x} has the highest score</p>
      </div>
    );
  }
}
