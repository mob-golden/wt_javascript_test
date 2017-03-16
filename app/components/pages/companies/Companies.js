//@flow
import React, { PropTypes as pt } from 'react'
import { RaisedButton, AppBar, Paper } from 'material-ui'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import { Container } from './CompaniesStyle'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  render() {
    const { companies } = this.props

    return <Container>
      <Paper zDepth={2}>
        <AppBar title='Companies' />
        <List>
          {
            companies.map(c => <ListItem key={c.id} primaryText={c.name} leftIcon={<ActionGrade />} />)
          }
        </List>
        <RaisedButton
          label='Add Company'
          secondary={true}
          fullWidth={true}
          href='/companies/new' />
        <RaisedButton
          label='Generate Random Companies'
          primary={true}
          fullWidth={true}
          href='/companies/new' />
      </Paper>
    </Container>
  }
})

export default Companies
