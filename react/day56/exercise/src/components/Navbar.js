import React from 'react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { connect } from 'react-redux'
import * as authActions from '../stores/actions/authActions'

function MyNavbar (props) {
  return (
    <Navbar color='danger' light expand='md'>
      <NavbarBrand href='/'>reactstrap</NavbarBrand>
      <NavbarToggler />
      <Nav className='ml-auto' navbar>
        <NavItem>
          <NavLink href='/'>Components</NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            onClick={() => {
              if (props.isLoggedIn) {
                props.logoutDispatcher()
              } else {
                props.loginDispatcher()
              }
            }}
          >
            {props.isLoggedIn ? 'Log out' : 'Log in'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>{props.userId}</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
// tell redux what we need from the store, can access state in reducer as props
const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    userId: state.auth.userId
  }
}
//
const mapDispatchToProps = dispatch => {
  return {
    loginDispatcher: () => {
      dispatch(authActions.loginAction('1234'))
    },
    logoutDispatcher: () => {
      dispatch(authActions.logoutAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar)
