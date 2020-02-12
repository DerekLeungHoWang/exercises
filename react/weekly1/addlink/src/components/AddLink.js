import * as React from 'react'

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class AddLink extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modal: false,
      link: null,
      tag: null
    }

    console.log(this.state)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submitted')
    this.props.addLink(this.state)
    this.toggle()
  }

  render () {
    return (
      <div>
          <FormGroup>
          <Label for='exampleSearch'>Search</Label>
          <Input
            type='search'
            name='search'
            id='exampleSearch'
            placeholder='search placeholder'
          />
        </FormGroup>
        <Button color='danger' onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for='exampleEmail'>Link</Label>
                <Input
                  type='text'
                  name='link'
                  id='link'
                  placeholder='add link'
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='exampleEmail'>Tag</Label>
                <Input
                  type='text'
                  name='tag'
                  id='tag'
                  placeholder='add tag'
                  onChange={this.handleChange}
                />
              </FormGroup>
              <ModalFooter>
                <Button type='Submit' value='Submit' color='primary'>
                  Add
                </Button>{' '}
                <Button color='secondary' onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
        {/* {this.state.link.map((element, index) => (
          <span>
            Link{index + 1}:<a href={element}>{element}</a>
            <br />
          </span>
        ))} */}
      </div>
    )
  }
}

export default AddLink
