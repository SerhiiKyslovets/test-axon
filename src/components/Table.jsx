import React, {Component} from 'react';
// import TableRow from './TableRow';

class Table extends Component {
  constructor(props) {
      super(props);
      this.state = {
        users: this.props.users
      };
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
              <td>{user.dob}</td>
              <td>{user.location}</td>
              <td>
                <button type='button'>Edit</button>
                <button type='button'>Delete</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    );
  }
}

export default Table;
