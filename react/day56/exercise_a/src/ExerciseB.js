// import * as React from "react";
// import { createStore } from "redux";
// import { render } from "react-dom";
// import { Provider, connect } from "react-redux";

// //Define ADD_LINK and CLEAR_LINK as action creators
// const ADD_LINK_ACTION = "ADD_LINK_ACTION";

// const CLEAR_LINK_ACTION = "CLEAR_LINK_ACTION";

// const REMOVE_LINK_ACTION = "REMOVE_LINK_ACTION";


// const initalState = {
//   linksReducer: []
// };

// const rootReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case ADD_LINK_ACTION:
       
//       return {
//         ...state,
//         linksReducer: state.linksReducer.concat([action.link])
//       };
//     case CLEAR_LINK_ACTION:
//       return {

//         linksReducer: []
//       };
//     case REMOVE_LINK_ACTION:
   
//       var array = [...state.linksReducer]
//       array.splice(action.id,1)

      
//       return {
//         ...state,
//          linksReducer:array
//       }
//     default:
//       return state;
//   }
// };

// const store = createStore(rootReducer);

// const PureLinkList = props => {
//   return (
//     <div>
//       <button onClick={props.addLinkMDP}>New Link</button>
//       <button onClick={props.clearLinkMDP}>Clear Links</button>
//       {props.linksMSP.map((l, i) => (
//         <div key={i}>
//           {" "}
//           {l.title} - {l.url}{" "} <button onClick={() => props.removeLinkMDP(i)}>Delete</button>
//         </div>

//       ))}
//     </div>
//   );
// };

// // Give the component access to the state of our links
// const mapStateToProp = state => {
//   return {
//     linksMSP: state.linksReducer
//   };
// };

// // Add the `mapDispatchToProp` so functions can update the redux store.
// const mapDispatchToProp = dispatch => {
//   return {
//     // Define the actions actual function that will change the store.
//     addLinkMDP: () =>
//       dispatch({
//         type: ADD_LINK_ACTION,
//         link: {
//           title: "Xccelerate",
//           url: "https://xccelerate.co/",
//         }
//       }),
//     clearLinkMDP: () =>
//       dispatch({
//         type: CLEAR_LINK_ACTION
//       }),
//     removeLinkMDP: (id) =>{
     
//       dispatch({
//         type: REMOVE_LINK_ACTION,
//         id: id
//       })
//     }
//   };
// };

// // Link with connect()
// const LinkList = connect(
//   mapStateToProp,
//   mapDispatchToProp
// )(PureLinkList);

// const App = () => (
//   <Provider store={store}>
//     <div>
//       <h2>Links</h2>
//       <LinkList />
//     </div>
//   </Provider>
// );

// render(<App />, document.getElementById("root"));
