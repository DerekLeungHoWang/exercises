import React, { Component } from 'react'
import AddLink from './AddLink'

export default class ListLink extends Component {
  state = {
    data: [{ link: 'https://google.com', tag: 'Google', id: 1 }]
  }

  addLink = links => {
    console.log(links)
    console.log(this.state.data[this.state.data.length - 1].id)

    links.id = Math.random() * 10
    let data = [...this.state.data, links]
    if (localStorage.data === undefined || localStorage.data === null) {
      localStorage.setItem('data', JSON.stringify(data))
    }

    console.log(...JSON.parse(localStorage.data))
    let local = JSON.parse(localStorage.data)
    let newSaved = [...local, links]

    localStorage.setItem('data', JSON.stringify(newSaved))

    this.setState({
      data: data
    })
  }

  render () {
    let dList = JSON.parse(localStorage.getItem('data'))
    if (dList === undefined || dList === null) {
      dList = [this.state.data]
    }
    const dataList = dList.map(rows => {
      return (
        <span key={rows.id}>
          Link{this.props.key}: <a href={rows.link}>{rows.link}</a> ==========
          tag:
          {rows.tag}
          <br />
        </span>
      )
    })
    console.log(dataList)

    return (
      <div className='link'>
        <AddLink addLink={this.addLink} buttonLabel='Click to add' />
        {dataList}
      </div>
    )
  }
}
