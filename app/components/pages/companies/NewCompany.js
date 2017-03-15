//@flow
import React from 'react'
import { browserHistory } from 'react-router'
import { addCompany } from '~/app/api/Company'
import { Header, Container, TextInput, AddButton } from './CompaniesStyle'

const NewCompany = React.createClass({

  handleAdd() {
    addCompany({
      name: this.state.companyName
    })
    browserHistory.push('/companies')
  },

  handleInputChange(e) {
    this.setState({companyName: e.target.value})
  },

  render() {
    return <Container>
      <Header>New Company</Header>
      <TextInput onChange={this.handleInputChange} />
      <AddButton onClick={this.handleAdd}>Add</AddButton>
    </Container>
  }
})

export default NewCompany
