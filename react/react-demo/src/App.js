import React from "react";
import Clock from "./components/Clock";

function App() {
  const clocks = [
    { location: "HK", timezone: 0 },
    { location: "JP", timezone: 1 },
    { location: "Au", timezone: 3 }
  ];

  return (
    <>
      {clocks.map(item => {
        return <Clock location={item.location} 
        key = {item.location}
        
        timezone={item.timezone}
        
        
        />;
      })}
    </>
  );

  // return <>

  // <Clock location = "HK" timezone ={0} />
  // <Clock location = "Japan" timezone ={1} />

  // </>
}

export default App;
