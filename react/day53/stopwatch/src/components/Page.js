import React from "react";

export class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      numTimer:1
    };
  }

  addTimer =()=>{
    this.setState(prevState =>({numTimer:prevState.numTimer+1}))
  }



  componentWillUnmount() {
    
    clearInterval(this.timerID);
  }

 
  render() {
    return (
     
      <button onClick={} ></button>
    );
  }
}
