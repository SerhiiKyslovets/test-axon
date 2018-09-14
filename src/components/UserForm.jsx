import React, {Component} from 'react';
import axios from 'axios';

class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      dob: '',
      first_name: '',
      last_name: '',
      location: ''
    }

    this.addUser = this.addUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
  }

  addUser() {
    axios.post('/users', {
      dob: this.state.dob,
      first_name: this.state.first_name,
      id: "11",
      last_name: this.state.last_name,
      location: this.state.location
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addUser();
  }

  handleNameChange(event) {
    this.setState({first_name: event.target.value})
  }

  handleLastNameChange(event) {
    this.setState({last_name: event.target.value})
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value})
  }

  handleDOBChange(event) {
    this.setState({dob: event.target.value})
  }

  render() {
    return (
      <form lang='en'>
        <div>
          <label htmlFor='name'>User Name: </label>
          <input
            id='name'
            type='text'
            value={this.state.first_name}
            onChange={this.handleNameChange}
            >
          </input>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            htmlFor='lastName'
            type='text'
            value={this.state.last_name}
            onChange={this.handleLastNameChange}
            >
          </input>
        </div>
        <div>
          <label htmlFor='birthday'>Birthday: </label>
          <input
            id='birthday'
            type='date'
            value={this.state.dob}
            onChange={this.handleDOBChange}
            >
          </input>
        </div>
        <div>
          <label htmlFor='location'>Location: </label>
          <input
            id='location'
            type='text'
            value={this.state.location}
            onChange={this.handleLocationChange}
            >
          </input>
        </div>

        <input
          className='btn'
          type='submit'
          value='Submit'
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default UserForm;
