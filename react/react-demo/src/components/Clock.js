import React from "react";
import DisplayTime from "./Displaytime";

// const Clock = props =>{
//     return <DisplayTime date={date}/>
// }

// export default Clock;

class Clock extends React.Component {
  constructor(props) {
    //super() calls the parent class's constructor
    super(props); //inherit from React.Component, whenever state get updated, super() calls the render function
    this.state = {
      //this is the only place you can do this.state = something
      //which is to set the default state
      nowTime: new Date()
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(this.refreshTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  //must use setState , otherwise render() will not be called
  // always use the this.setState. Dont directly change this.state
  refreshTime = () => {
    this.setState({
      nowTime: new Date()
    });
  };

  render() {
    return (
      <>
        <div>{this.props.location}</div>
        <DisplayTime date={this.state.nowTime} timezone={this.props.timezone} />
      </>
    );
  }
}

export default Clock;
