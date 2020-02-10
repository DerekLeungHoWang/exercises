import React from "react";
import { Clock } from "./Clock";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      second:0
    };
  }

 componentDidMount(){
   this.startInterval = setInterval(()=>{
     this.setState({prev})
   })
 }

  render() {
    return (
      <div>
        <Clock />
        <button onClick={this.addTimer}>generate new timer</button>
        <div>{this.state.newTimer} </div>

        <div>
          {this.state.result} seconds has passed since you clicked the button
        </div>
      </div>
    );
  }
}
