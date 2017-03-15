//@flow
import React from 'react'
import { browserHistory } from 'react-router'
import { addCompany } from '~/app/api/Company'
import { Header, Container, TextInput, AddButton, ErrorText } from './CompaniesStyle'

const NewCompany = React.createClass({

  getInitialState() {
    return {
      error: "",
      companyName: ""
    };
  },

  handleAdd() {
    if(this.state.companyName.length < 3){
      this.setState({error: "Company name must be more than 3 letters."})
      return;
    }
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
      <ErrorText>{this.state.error}</ErrorText>
      <AddButton onClick={this.handleAdd}>Add</AddButton>
    </Container>
  }
})

export default NewCompany
