import RandomName from "node-random-name";
import React from "react";
import Counter from "./Counter";

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { name: RandomName({ seed: Math.random() }), count: 0 },
        { name: RandomName(), count: 2 }
      ]
    };
  }

  // Exercise - C
  addCounter = () => {
    const newCounter = { name: RandomName({ seed: Math.random() }), count: 0 };
    // dont do that. push() does mutate the original array
    // this.state.counters.push(newCounter)  <-- BAD

    // do this because concat() construct a new array
    console.log(newCounter, "line26");
    console.log(this.state.counters, "line27");

    let newCounterArray = this.state.counters.concat([newCounter]);
    console.log(newCounterArray, "line31");

    this.setState({
      counters: newCounterArray
    });
  };

  removeCounter = i => {
    // dont call splice() on the original:
    // this.state.counters.splice() <-- BAD
    // because it will mutate the state by not calling this.setState()

    // construct a new array and use splice() on the new one
    let newArray = [...this.state.counters];
    console.log(newArray);
    
    newArray.splice(i, 1);
    this.setState({
      counters: newArray
    });
  };

  handleClickPlus = i => {
    let newObj = {
      ...this.state.counters[i],
      count: this.state.counters[i].count + 1
    };
    const newArray = [...this.state.counters];
    newArray[i] = newObj;
    this.setState({
      counters: newArray
    });
  };

  handleClickMinus = i => {
    const newObj = {
      ...this.state.counters[i],
      count: this.state.counters[i].count - 1
    };
    const newArray = [...this.state.counters];
    newArray[i] = newObj;
    this.setState({
      counters: newArray
    });
  };

  getSortedResult = () => {
    const newArray = [...this.state.counters];
    console.log(newArray);
    
    return newArray.sort((a, b) => b.count - a.count);
  };

  render() {
    const sortedData = this.getSortedResult();

    return (
      <div>
        <div>
          <button onClick={this.addCounter}>Add Counter</button>
        </div>

        {this.state.counters.map((counter, index) => (
          <Counter
            count={counter.count}
            name={counter.name}
            key={index}
            onPlusButtonClicked={() => this.handleClickPlus(index)}
            onMinusButtonClicked={() => this.handleClickMinus(index)}
            onRemoveClicked={() => this.removeCounter(index)}
          />
        ))}
        <div>
          <h3>LeaderBoard</h3>
          {sortedData.map((item, i) => (
            
            <div key={i}>{item.name}!!!</div>
          ))}
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
