import React, {Component} from 'react';
import moment from 'moment';

class Table extends Component {
  constructor(props) {
      super(props);

      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(id) {
    this.props.deleteUser(id);
  }

  handleEdit(id) {
    this.props.editModeOn();
    this.props.setEditableUser(id);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>

          {this.props.users.map((user, index) =>
            <tr key={index} id={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{moment(user.dob).format('DD/MM/YYYY')}</td>
              <td>{user.location}</td>
              <td>
                <button type='button' onClick={() => {this.handleEdit(user.id)}}>Edit</button>
                <button type='button' onClick={() => {this.handleDelete(user.id)}}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
