import React from "react";

const DisplayTime = (props) => {

    const date = props.date;
    const hour = date.getHours() + props.timezone;
    const minute = date.getMinutes();
    const second = date.getSeconds();
  

  return (
    <div>
      {hour}:{minute}:{second}
    </div>
  );
};

export default DisplayTime;
