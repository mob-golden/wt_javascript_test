//@flow
import React from 'react'
import { browserHistory } from 'react-router'
import { addCompany } from '~/app/api/Company'
import { TextField, RaisedButton, AppBar, IconButton } from 'material-ui'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import { Container } from './CompaniesStyle'

const NewCompany = React.createClass({

  getInitialState() {
    return {
      error: '',
      companyName: ''
    }
  },

  handleAdd() {
    if (this.state.companyName.length < 3) {
      this.setState({error: 'Company name must be more than 3 letters.'})
      return
    }
    addCompany({
      name: this.state.companyName
    })
    browserHistory.push('/companies')
  },

  handleInputChange(e) {
    if (e.target.value.length > 3) {
      this.setState({error: ''})
    }
    this.setState({companyName: e.target.value})
  },

  render() {
    return <Container>
      <AppBar
        title='New Company'
        iconElementLeft={<IconButton href='/companies'><NavigationArrowBack /></IconButton>} />
      <TextField
        defaultValue=''
        floatingLabelText='Company Name'
        errorText={this.state.error}
        onChange={this.handleInputChange}
        fullWidth={true} /><br />
      <RaisedButton
        label='Add'
        secondary={true}
        onClick={this.handleAdd} />
    </Container>
  }
})

export default NewCompany
