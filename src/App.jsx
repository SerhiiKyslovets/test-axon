import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

import Table from './components/Table';
import UserForm from './components/UserForm';
import Summary from './components/Summary';

class App extends Component {
  constructor() {
      super()

      this.state = {
        users: [],

        dob: '',
        first_name: '',
        last_name: '',
        location: '',

        editMode: false,
        editableUser: '',

        isDisabled: true
      }

      this.updateData = this.updateData.bind(this);
      this.deleteUser = this.deleteUser.bind(this);
      this.setEditableUser = this.setEditableUser.bind(this);

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleDOBChange = this.handleDOBChange.bind(this);

      this.getDataById = this.getDataById.bind(this);
      this.editModeOn = this.editModeOn.bind(this);
      this.editModeOff = this.editModeOff.bind(this);
      this.clearForm = this.clearForm.bind(this);
      this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleDisabled() {
    if ((this.state.first_name !== '') && (this.state.last_name !== '') &&
    (this.state.dob !== '') && (this.state.location !== '')) {
      this.setState({isDisabled: false});
    } else {
      this.setState({isDisabled: true});
    }
  }

  editModeOn() {
    this.setState({ editMode: true});
  }

  editModeOff() {
    this.setState({ editMode: false});
  }

  handleNameChange(event) {
    this.handleFieldChange('first_name', event.target.value);
  }

  handleLastNameChange(event) {
    this.handleFieldChange('last_name', event.target.value);
  }

  handleLocationChange(event) {
    this.handleFieldChange('location', event.target.value);
  }

  handleDOBChange(event) {
    this.handleFieldChange('dob', event.target.value);
  }

  handleFieldChange(name, value) {
    const obj = {};

    obj[name] = value;
    obj.isDisabled = !this.validateForm(obj);

    this.setState(obj);
  }

  validateForm(opts) {
    const requiredKeys = ['first_name', 'last_name', 'dob', 'location'];

    for (let i = 0; i < requiredKeys.length; i++) {
      let key = requiredKeys[i];

      if (opts[key] === '' || (!opts[key] && !this.state[key])) {
        return false;
      }
    }

    return true;
  }

  setEditableUser(e) {
    //Remove prefix 'eidt-'
    const id = (e.target.id).slice(5);
    this.setState({editableUser: id});
    const editableUserData = this.getDataById(id);

    this.setState({
      first_name: editableUserData.first_name,
      last_name: editableUserData.last_name,
      dob: moment(editableUserData.dob).format('YYYY-MM-DD'),
      location: editableUserData.location
    });
  }

  getDataById(id) {
    const allUsers = this.state.users;
    const userWithId = allUsers.filter((user) => {
      return user.id === id;
    });
    return userWithId[0];
  }

  componentDidMount() {
    this.updateData();
  }

  deleteUser(event) {
    const id = event.target.id;
    axios.delete(`users/${id}`);
    this.setState({
      editMode: false,
      dob: '',
      first_name: '',
      last_name: '',
      location: ''
    });
    this.updateData();
  }

  updateData() {
    axios.get('/users')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  clearForm() {
    this.setState({
      dob: '',
      first_name: '',
      last_name: '',
      location: ''
    })
  }

  render() {
    return (
      <div className='container'>
        <Table
            users={this.state.users}
            deleteUser={this.deleteUser}
            setEditableUser={this.setEditableUser}
            editModeOn={this.editModeOn}
        />

        <Summary users={this.state.users} />

        <UserForm
            updateData={this.updateData}

            dob={this.state.dob}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            location={this.state.location}

            handleNameChange={this.handleNameChange}
            handleLastNameChange={this.handleLastNameChange}
            handleDOBChange={this.handleDOBChange}
            handleLocationChange={this.handleLocationChange}

            editMode={this.state.editMode}
            editModeOff={this.editModeOff}
            editableUser={this.state.editableUser}
            clearForm={this.clearForm}
            isDisabled={this.state.isDisabled}
        />
      </div>
    );
  }
}

export default App;
