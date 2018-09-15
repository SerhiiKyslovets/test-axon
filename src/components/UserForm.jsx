import React, {Component} from 'react';
import axios from 'axios';

class UserForm extends Component {
  constructor(props){
    super(props);

    this.addUser = this.addUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addUser() {
    axios.post('/users', {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      dob: this.props.dob,
      location: this.props.location
    })
  }

  updateUser() {
    const id = this.props.editableUser;
    axios.put(`users/${id}`, {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      dob: this.props.dob,
      location: this.props.location
    });
    this.props.editModeOff();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.props.editMode) {this.addUser();}
    else {this.updateUser();}

    this.props.clearForm();
    this.props.updateData();
  }

  render() {
    return (
      <form lang='en'>
        <div>
          <label htmlFor='name'>User Name: </label>
          <input
            id='name'
            type='text'
            value={this.props.first_name}
            onChange={this.props.handleNameChange}
            >
          </input>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            htmlFor='lastName'
            type='text'
            value={this.props.last_name}
            onChange={this.props.handleLastNameChange}
            >
          </input>
        </div>
        <div>
          <label htmlFor='birthday'>Birthday: </label>
          <input
            id='birthday'
            type='date'
            value={this.props.dob}
            onChange={this.props.handleDOBChange}
            >
          </input>
        </div>
        <div>
          <label htmlFor='location'>Location: </label>
          <input
            id='location'
            type='text'
            value={this.props.location}
            onChange={this.props.handleLocationChange}
            >
          </input>
        </div>

        <input
          disabled={this.props.isDisabled}
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
