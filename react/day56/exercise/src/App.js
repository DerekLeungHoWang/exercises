import React from 'react'

import MyNavbar from './components/Navbar'
import { connect } from 'react-redux'
function App (props) {
  return (
    <div>
      <MyNavbar />
      <div>{props.isLoggedIn ? `Welcome, user ${props.userId}`: `Please Login`}</div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps)(App)
