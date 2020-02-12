// import * as React from "react";
// import { createStore } from "redux";
// import { render } from "react-dom";
// import { Provider, connect } from "react-redux";

// const rootReducer = state => {
//   return {
//     linksRootReducer: [
//       { title: "Google", url: "https://www.google.com" },
//       { title: "Yahoo", url: "https://www.yahoo.com" },
//       { title: "Facebook", url: "https://www.facebook.com" },
//       { title: "HKO", url: "https://www.hko.gov.hk" },
//       { title: "DuckDuckGo", url: "https://www.duckduckgo.com" }
//     ],
//     userReducer:[
//       {user:'Derek'},
//       {user:'Tom'},
//       {user:'Tim'},
//       {user:'Peter'},
//       {user:'Mary'},
//       {user:'Annie'},
//     ]
//   };
// };

// const store = createStore(rootReducer);

// const PureLinkList = props => {
//   return (
//     <div>
//       {props.linksMSP.map(l => (
//         <div>
//           {l.title} - {l.url}
//         </div>
//       ))}
//     </div>
//   );
// };

// const PureUserList = props =>{
//   return(
//     <div>
//       {props.UserMSP.map(l => (
//         <ul>
//           <li>{l.user}</li>
//         </ul>
//       ))}
//     </div>
//   )
// }



// const mapStateToProps = state => {
//   return {
//     linksMSP: state.linksRootReducer,
//     UserMSP: state.userReducer
   
//   };
// };

// const LinkList = connect(mapStateToProps)(PureLinkList);
// const UserList = connect(mapStateToProps)(PureUserList);

// const App = () => (
//   <Provider store={store}>
//     <div>
//       <h2>Links</h2>
//       <LinkList />
//       <UserList/>
//     </div>
//   </Provider>
// );

// render(<App />, document.getElementById("root"));
