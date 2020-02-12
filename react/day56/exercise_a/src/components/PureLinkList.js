import React from 'react'
import { connect } from 'react-redux'

const PureLinkList = props => {
  return (
    <div>
      <button onClick={props.addLinkMDP}>New Link</button>
      <button onClick={props.clearLinkMDP}>Clear Links</button>
      {props.linksMSP.map((l, i) => (
        <div key={i}>
          {' '}
          {l.title} - {l.url}{' '}
          <button onClick={() => props.removeLinkMDP(i)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProp = state => {
  return {
    linksMSP: state.linksReducer
  }
}

export default connect()(PureLinkList)
