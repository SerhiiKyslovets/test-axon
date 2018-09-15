import React, {Component} from 'react';
import moment from 'moment';

class Table extends Component {
  constructor(props) {
      super(props);

      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e) {
    this.props.deleteUser(e);
  }

  handleEdit(e) {
    this.props.editModeOn();
    this.props.setEditableUser(e);
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
            <tr key={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{moment(user.dob).format('DD/MM/YYYY')}</td>
              <td>{user.location}</td>
              <td>
                <button id={'eidt-' + user.id} type='button' onClick={this.handleEdit}>Edit</button>
                <button id={user.id} type='button' onClick={this.handleDelete}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
