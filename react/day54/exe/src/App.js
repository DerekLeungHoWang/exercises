import React from 'react'
import { Route } from 'react-router-dom'

function Home () {
  return <div>Home Page</div>
}

function App () {
  return (
    <div className='App'>
      <Route path='/' component={Home} />
    </div>
  )
}

export default App
